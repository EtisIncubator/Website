package main

import (
	"time"
)

type (
	Auth interface {
	}
	Base struct {
		ID        uint `gorm:"primary_key"`
		CreatedAt time.Time
		UpdatedAt time.Time
	}
	Person struct {
		Base
		Career  string `form:"Career"`
		Class   string `form:"Class"`
		Country string `form:"Country"`
		Develop string `form:"Help"`
		Email   string `form:"Email"`
		//Experience string `form:""`
		Firstname string `form:"First"`
		Freetime  string `form:"Freetime"`
		Ideas     string `form:"Project"`
		//Intrest    string `form:"last"`
		Lastname string `form:"Last"`
		Phone    string `form:"last"`
		School   string `form:"School"`
		Skillset string `form:"Skillset"`
		Subjects string `form:"Subjects"`
	}
	User struct {
		Firstname string
		Lastname  string
		Email     string `gorm:"unique"`
		Password  string
		Token     string
		Salt      string
		authType  int //1 = hautomo 2 = google
		Level     int
		Approved  bool
		Verified  bool
		Person    Person
	}
	Project struct {
		Name        string
		Description string
	}
	Page struct {
		Base
		path    string
		english string //JSON
		finnish string //JSON
	}
	AuditLog struct {
		Base
		Who    Person
		Url    string
		Method string
		What   string
		Id     int
	}
)

func (m *Base) AfterCreate() (err error) {
	m.CreatedAt = time.Now()
	return
}
func (m *Base) AfterUpdate() (err error) {
	m.UpdatedAt = time.Now()
	return
}
