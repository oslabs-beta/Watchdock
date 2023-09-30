const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const port = 8080;
const ip = "0.0.0.0";



app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/hello", function (req, res) {
  res.status(200).send('WE MADE IT TO THE BACKEND!');
});

server.listen(port, ip, function () {
  console.log('Express server listening on port ' + port);
});
