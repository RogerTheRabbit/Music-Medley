const express = require("express");
const socket = require("socket.io");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;
const IP = process.env.IP;

const PROTOCOL = {
	TEST: "test",
};

let clients = {};

// App setup
let app = express();

let server = app.listen(PORT, IP, function () {
	console.log("Listening on " + IP + ":" + PORT);
});

// Socket setup
let io = socket(server);

io.on("connect", function (client) {
	console.log("Client connected with id:", client.id);
	clients[client.id] = client;

	client.emit(PROTOCOL.TEST, "TEST");

	client.on("disconnect", function (reason) {
		console.log("Client disconnected for reason:", reason);
	});
});
