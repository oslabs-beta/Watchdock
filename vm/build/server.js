"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const http = require("http");
let process = require("process");
const express = require("express");
const app = express();
const extension_api_client_1 = require("@docker/extension-api-client");
const container = 'f06781b446e2';
const client = (0, extension_api_client_1.createDockerDesktopClient)();
function useDockerDesktopClient() {
    return client;
}
const ddClient = useDockerDesktopClient();
const getContainers = () => {
    console.log('i am getting containers');
    ddClient.docker.cli
        .exec('ps', ['--all', '--format', '"{{json .}}"'])
        .then((result) => {
        // result.parseJsonLines() parses the output of the command into an array of objects
        // removed changeContainers
        console.log(result.parseJsonLines());
    });
};
app.get("/hello", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // const containers: any = await res;
        let result;
        getContainers();
        // await ddClient.extension.vm.service
        //   .get(`/containers/${container}/stats?stream=false`)
        //   .then((value: any) => console.log(value))
        // // const result: any = await fetch(`http://localhost:2375/containers/${container}/stats?stream=false`);
        // res.send({ message: 'Metrics!!!' });
    });
});
var sock = process.argv[2];
fs.stat(sock, function (err) {
    if (!err) {
        fs.unlinkSync(sock);
    }
    http.createServer(app).listen(sock, function () {
        fs.chmodSync(sock, "777");
        console.log("Express server listening on " + sock);
    });
});
//# sourceMappingURL=server.js.map