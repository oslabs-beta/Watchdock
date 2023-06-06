const fs = require("fs");
const http = require("http");
let process = require("process");
const express = require("express");
const app = express();
import type { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import type { ErrorObj } from './types';

app.get("/hello", function (req: Request, res: Response) {
  res.send({ message: "Hello Velocirabbits!!!" });
});

var sock = process.argv[2];

fs.stat(sock, function (err: ErrorObj) {
  if (!err) {
    fs.unlinkSync(sock);
  }
  http.createServer(app).listen(sock, function () {
    fs.chmodSync(sock, "777");
    console.log("Express server listening on " + sock);
  });
});
