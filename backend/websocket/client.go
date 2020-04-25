package websocket

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/gorilla/websocket"
)

//Client body
type Client struct {
	ID   string
	Conn *websocket.Conn
	Pool *Pool
}

//Message body
type Message struct {
	Username string `json:"username"`
	Body     string `json:"body"`
}

func (c *Client) Read() {
	defer func() {
		c.Pool.Unregister <- c
		c.Conn.Close()
	}()

	for {
		_, p, err := c.Conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}
		var msg Message
		err = json.Unmarshal(p, &msg)
		if err != nil {
			fmt.Println(err)
		}
		message := Message{Username: string(msg.Username), Body: string(msg.Body)}
		c.Pool.Broadcast <- message
		fmt.Printf("Message received: %+v\n", message)
	}
}
