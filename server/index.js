//Server side code.

var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname + "/"))

var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)

var wss = new WebSocketServer({server: server})
console.log("websocket server created")

wss.on("connection", function(ws) {
  console.log("websocket connection open")
  console.log("No of clients is %d",this.clients.length)
  ws.on("message", function(data,flag) {
    //Broadcast the message to all connected clients.
    console.log("recieved: %s",data)
    wss.broadcast = function(data) {
            for(var i in this.clients){
              this.clients[i].send(data);
              console.log("Sending to client")
            }
            console.log("Broadcast done")
    };
    wss.broadcast(data)
  })
  ws.on("close", function() {
    console.log("websocket connection close")
  })
})
