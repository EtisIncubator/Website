package main

import (
	"crypto/md5"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"strings"
	"time"
)

func ValidateToken(token string) string {
	addr := "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token="
	resp, err := http.Get(addr + token)
	if err != nil {
		fmt.Println(err.Error())
		return ""
	} else if resp.StatusCode != 200 {
		return ""
	} else {
		jso, serr := ioutil.ReadAll(resp.Body)
		if serr != nil {
			fmt.Println(serr.Error())
			return ""
		}
		var data map[string]string
		derr := json.Unmarshal(jso, &data)
		if derr != nil {
			fmt.Println(derr.Error())
			return ""
		}
		return data["email"]
	}
}
func FormArray(ident string, form string) []string {
	data := []string{}
	for _, v := range strings.Split(form, "&") {
		if strings.Contains(v, ident) {
			data = append(data, strings.Replace(
				strings.TrimPrefix(v, ident+"="),
				"+", " ", -1))
		}
	}
	return data
}
func CreateRandomToken() string {
	h := md5.New()
	salt := "secretkey%^7&8888"
	io.WriteString(h, salt+time.Now().String())
	return fmt.Sprintf("%x", h.Sum(nil))
}
