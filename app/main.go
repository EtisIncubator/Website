package main

import (
	"github.com/TileHalo/logger"
	"github.com/jinzhu/gorm"
	"github.com/kataras/iris"
)

type Server struct{}

func (s Server) Serve(ctx *iris.Context) {
	ctx.HTML(200, PAGE)
}
func Models(db *gorm.DB) {
	db.AutoMigrate(&User{}, &Person{}, &Project{})
}

func main() {
	server := Server{}
	iris.Use(logger.Default("Hautomo"))
	db := Env()
	Models(db)
	api := Api{DB: db, Session: map[string]Session{},
		Verify: map[string]User{}}
	iris.Handle("GET", "/", server)
	iris.Handle("GET", "/database", server)
	iris.Handle("GET", "/register", server)
	iris.Handle("GET", "/login", server)
	iris.Handle("GET", "/logout", server)
	iris.Get("/verify/:token", api.VerifyApi)
	auths := iris.Party("/auth")
	{
		auths.Handle("GET", "/persons", server)
	}

	restApi := iris.Party("/api")
	{
		restApi.Post("/lang", api.SetLang)
		restApi.Get("/text/:component", api.GetText)
		restApi.Post("/login", api.Login)
		restApi.Post("/logout", api.SignOut)
		restApi.Post("/register", api.UserCreate)
		person := restApi.Party("/person")
		{
			person.Post("/", api.PersonCreate)
		}
		auth := restApi.Party("/auth")
		{
			auth.UseFunc(api.Auth)
			authperson := auth.Party("/person")
			{
				authperson.Get("/", api.PersonGet)
			}
		}
	}

	iris.Listen(":8080")
}
