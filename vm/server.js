const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const port = 8080;



app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/hello", function (req, res) {
  console.log("BACKEND REQUEST SUCCESFUL! HELLO HELLO HELLO!");
  res.send(200);
});

server.listen(port, function () {
  console.log('Express server listening on port ' + port);
});
