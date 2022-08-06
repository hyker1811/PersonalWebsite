package main

import (
	"errors"
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"runtime"
)

func main() {
	_, filename, _, ok := runtime.Caller(0)

	if !ok {
		panic(errors.New("Fetching the file directory of the workspace was unsuccessful"))
	}

	port := os.Getenv("PORT")

	frontendDir := filepath.Join(filepath.Dir(filename), "frontend")

	fmt.Printf("Listening on port %s\n", port)
	http.Handle("/", http.FileServer(http.Dir(frontendDir)))
	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		fmt.Println(err)
	}
}
