package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")

	frontendDir := "./frontend"

	fmt.Printf("Listening on port %s\n", port)
	http.Handle("/", http.FileServer(http.Dir(frontendDir)))
	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		fmt.Println(err)
	}
}
