package main

import (
	"github.com/TileHalo/logger"
	"github.com/kataras/iris"
)

func main() {
	iris.Use(logger.Default("Hautomo"))
	iris.Config().Render.Template.Extensions = []string{".jade"}
	iris.Config().Render.Template.Engine = iris.JadeEngine
	iris.Listen(":8080")
}
