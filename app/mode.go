package main

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"github.com/kataras/iris"
	"log"
	"os"
)

//All boilerplate for db + typescript
func Env() *gorm.DB {
	if os.Getenv("IRIS") == "Production" {
		user := os.Getenv("USER")
		data := "host=localhost user=" + user + " dbname=" + user
		data += " sslmode=disable" + " password=" + os.Getenv("PASS")
		if db, err := gorm.Open("postgres", data); err == nil {
			return db
		} else {
			log.Fatal(err)
		}
	} else {
		iris.Static("/public", "../assets/compiled", 1)
		if db, err := gorm.Open("sqlite3", "./test.db"); err == nil {
			return db
		} else {
			log.Fatal(err)
		}
	}
	return nil
}
