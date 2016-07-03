package main

import (
	"crypto/rand"
	"encoding/json"
	"fmt"
	"github.com/jinzhu/gorm"
	"github.com/kataras/iris"
	"github.com/valyala/fasthttp"
	"golang.org/x/crypto/bcrypt"
	"net/smtp"
	"strconv"
	"time"
)

var SUCCESS = map[string]string{"msg": "Success", "ok": "Success"}
var FAILED = map[string]string{"msg": "Failed", "ok": "false"}
var APPROVED = map[string]string{"msg": "User not approved or verified",
	"ok": "false"}
var RIGHTS = map[string]string{"msg": "Insufficent rights", "ok": "false"}
var LOGIN = map[string]string{"msg": "Failed", "ok": "true"}

type (
	Session struct {
		user  User
		level int
		lang  bool //true = english, false = finnish
	}
	Api struct {
		DB      *gorm.DB
		Session map[string]Session
		Verify  map[string]User
	}
)

func (api Api) PersonGet(ctx *iris.Context) {
	jso := map[string]string{}
	persons := []Person{}
	if err := ctx.ReadForm(&jso); err != nil {
		api.DB.Where(nil).Find(&persons)
		api.AuditLog(ctx, "")
		api.Authoritaze(ctx, 5)
	} else {
		api.DB.Where(jso).Find(&persons)
		api.AuditLog(ctx, "Access to database")
	}
	var data interface{}
	if d, derr := json.Marshal(&persons); derr != nil {
		fmt.Println("Error when converting: " + derr.Error())
	} else {
		if json.Unmarshal(d, &data) == nil {
			ctx.JSON(iris.StatusOK, data)
			return
		} else {
			fmt.Println("Error when reading form: " + derr.Error())
		}

	}
	ctx.JSON(401, FAILED)
}
func (api Api) PersonCreate(ctx *iris.Context) {
	person := Person{}
	if err := ctx.ReadForm(&person); err != nil {
		fmt.Println("Error when reading form: " + err.Error())
		ctx.JSON(iris.StatusOK, FAILED)
	} else {
		data := FormArray("Skillset", string(ctx.PostBody()[:]))
		d := ""
		for _, v := range data {
			d += " " + v
		}
		person.Skillset = d
		api.DB.Create(&person)
		ctx.JSON(iris.StatusOK, SUCCESS)
	}
}
func (api Api) UserGet(ctx *iris.Context) {
	jso := map[string]string{}
	if err := ctx.ReadForm(&jso); err != nil {
		fmt.Println("Error when reading form: " + err.Error())
	}
	users := []User{}
	api.DB.Where(jso).Find(&users)
	if data, derr := json.Marshal(users); derr != nil {
		fmt.Println("Error when reading form: " + derr.Error())
	} else {

		ctx.JSON(iris.StatusOK, data)
	}
}
func (api Api) UserCreate(ctx *iris.Context) {
	user := User{}
	if err := ctx.ReadForm(&user); err != nil {
		fmt.Println("Error when reading form: " + err.Error())
	}
	if user.Token == "" {
		password := user.Password
		saltb := make([]byte, 20)
		_, err := rand.Read(saltb)
		if err != nil {
			fmt.Println("error:", err)
			return
		}
		salt := string(saltb)
		bb := []byte(password + salt)
		pass, err := bcrypt.GenerateFromPassword(bb, 10)
		if err != nil {
			fmt.Println("error:", err)
			return
		}
		user.Password = strconv.QuoteToASCII(string(pass))
		user.Salt = strconv.QuoteToASCII(salt)
	} else if ValidateToken(user.Token) == user.Email {

	} else {
		ctx.JSON(iris.StatusOK, FAILED)
		return
	}
	token := CreateRandomToken()
	user.Approved = false
	user.Verified = false
	user.Level = 1
	person := Person{}
	user.Person = person
	api.DB.Create(&user)
	api.DB.Create(&person)
	msg := "https://deploy.hautomo.org/verify/" + token
	api.Verify[token] = user
	fmt.Println(user.Email)
	go api.SendMail(msg, user.Email)
	ctx.JSON(iris.StatusOK, SUCCESS)

}
func (api Api) ProjectGet(ctx *iris.Context) {
	jso := map[string]string{}
	if err := ctx.ReadForm(&jso); err != nil {
		fmt.Println("Error when reading form: " + err.Error())
	}
	projects := []Project{}
	api.DB.Where(jso).Find(&projects)
	if data, derr := json.Marshal(projects); derr != nil {
		fmt.Println("Error when reading form: " + derr.Error())
	} else {

		ctx.JSON(iris.StatusOK, data)
	}
}
func (api Api) ProjectCreate(ctx *iris.Context) {
	project := Project{}
	if err := ctx.ReadForm(&project); err != nil {
		fmt.Println("Error when reading form: " + err.Error())
	}
	api.DB.Create(&project)
	ctx.JSON(iris.StatusOK, SUCCESS)

}
func (api Api) Login(ctx *iris.Context) {
	form := map[string]string{}
	if err := ctx.ReadForm(&form); err != nil {
		fmt.Println("Error when reading form: " + err.Error())
	}
	if val, ok := form["token"]; ok {
		mail := ValidateToken(val)
		user := User{}
		api.DB.Where("email = ?", mail).First(&user)
		if user.authType == 2 && user.Approved && user.Verified {
			api.SetCookie(ctx, mail)
			ctx.JSON(200, LOGIN)
			return
		} else {
			ctx.JSON(401, APPROVED)
			return

		}
	} else if email, ok := form["Email"]; ok {
		if pass, ok := form["Password"]; ok {
			user := User{}
			api.DB.Where("email = ?", email).First(&user)
			t, err := strconv.Unquote(user.Salt)
			if err != nil {
				ctx.JSON(401, FAILED)
				return
			}
			str := []byte(pass + t)
			pas, err := strconv.Unquote(user.Password)
			if err != nil {
				ctx.JSON(401, FAILED)
				return
			}
			passw := []byte(pas)
			if bcrypt.CompareHashAndPassword(passw, str) == nil {
				if user.Approved && user.Verified {
					api.SetCookie(ctx, email)
					ctx.JSON(200, LOGIN)
					return
				} else {
					ctx.JSON(401, APPROVED)
					return
				}
			}
		}
	}
	ctx.JSON(401, FAILED)
}
func (api Api) Auth(ctx *iris.Context) {
	key := ctx.GetCookie("hautomosession")
	if _, ok := api.Session[key]; ok {
		ctx.JSON(200, APPROVED)
	} else {
		ctx.JSON(401, FAILED)
	}
}
func (api Api) SetCookie(ctx *iris.Context, email string) {
	expr := time.Now()
	expr = expr.Add(time.Hour)
	token := CreateRandomToken()
	cookie := fasthttp.Cookie{}
	cookie.SetHTTPOnly(true)
	cookie.SetKey("hautomosession")
	cookie.SetValue(token)
	cookie.SetExpire(expr)
	user := User{}
	api.DB.Where("email = ?", email).First(&user)
	sess := Session{user: user, level: user.Level, lang: true}
	api.Session[token] = sess
	ctx.SetCookie(&cookie)
}
func (api Api) SignOut(ctx *iris.Context) {
	key := ctx.GetCookie("hautomosession")
	if _, ok := api.Session[key]; ok {
		ctx.RemoveCookie("hautomosession")
		delete(api.Session, key)
	}
	ctx.JSON(200, SUCCESS)
}
func (api Api) AuditLog(ctx *iris.Context, params string) {
	//user := api.Session[ctx.GetCookie("hautomosession")].user
	//audit := AuditLog{}
	//audit.Method = string(ctx.Method())
	//audit.Url = string(ctx.URI())
	//audit.What = params
	//audit.Who = user
	//api.DB.Create(&audit)
}
func (api Api) Authoritaze(ctx *iris.Context, wanted int) {
	level := api.Session[ctx.GetCookie("hautomosession")].level
	if level >= wanted {
		fmt.Println("Authoritazed")
		return
	} else {
		fmt.Println("unauthoritazed")
		ctx.JSON(401, RIGHTS)
	}
}
func (api Api) VerifyApi(ctx *iris.Context) {
	token := ctx.Param("token")
	user := api.Verify[token]
	api.DB.Model(&user).Update("Verified", "true")
	delete(api.Verify, token)
}
func (api Api) SendMail(msg, addr string) {
	head := `To: recipient@example.net\r\nSubject: Please verify
	your account\r\n`
	err := smtp.SendMail("mail.hautomo.org:25", nil,
		"noreply@hautomo.org", []string{addr}, []byte(head+msg))
	if err != nil {
		fmt.Println(err.Error())
	}
}
func (api Api) GetText(ctx *iris.Context) {
	name := ctx.Param("component")
	language := ctx.GetCookie("hautomolang")
	fmt.Println(name)
	if language == "Suomi" {
		ctx.JSON(200, map[string]string{})
	} else {
		ctx.JSON(200, map[string]string{})
	}
}
func (api Api) SetLang(ctx *iris.Context) {
	var json map[string]string
	if err := ctx.ReadJSON(json); err == nil {
		ctx.SetCookieKV("hautomolang", json["lang"])
		ctx.JSON(200, SUCCESS)
	} else {
		ctx.JSON(404, FAILED)
	}
}
