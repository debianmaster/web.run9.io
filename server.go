package main

import (
	"github.com/gin-gonic/gin"
	cors "github.com/rs/cors/wrapper/gin"
)

func main() {
	router := gin.Default()
	router.Use(cors.Default())
	router.Static("/", "./build")
	router.Run(":8080")
}

