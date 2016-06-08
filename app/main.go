package main

import (
	"github.com/TileHalo/logger"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/kataras/iris"
	"log"
	"os"
)

type Server struct {
	db *gorm.DB
}

//Everything else will be used by the api
func (s Server) Serve(ctx *iris.Context) {
	if err := ctx.Render("main.jade", nil); err != nil {
		println(err.Error())
	}

}

func main() {
	server := Server{}
	if os.Getenv("IRIS") == "Production" {
		user := os.Getenv("USER")
		data := "host=localhost user=" + user + "dbname=" + user
		data += "sslmode=disable" + "password=" + os.Getenv("PASS")
		if db, err := gorm.Open("postgres", data); err == nil {
			server.db = db
		} else {
			log.Fatal(err)
		}
	} else {
		iris.Static("/public", "./assets/compiled", 1)
		iris.Static("/out", "./assets/js/out", 1)
	}
	iris.Use(logger.Default("Hautomo"))
	iris.Config().Render.Template.Extensions = []string{".jade"}
	iris.Config().Render.Template.Engine = iris.JadeEngine
	iris.Config().Render.Template.Directory = "./assets/templates"
	iris.Handle("GET", "/", server)
	reactApi := iris.Party("/api")
	reactApi.Handle("GET", "/", server)
	iris.Listen(":8080")
}
