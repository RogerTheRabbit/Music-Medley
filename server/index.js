// Apparently we can't use ES6 imports
because;
const express = require("express");
const socket = require("socket.io");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;
const IP = process.env.IP;

// Added some messages we might send.
// The values aren't that important but they should be
// consistent between the client and the server
const PROTOCOL = {
	TEST: "test",
	NEW_USER: "newuser",
	JOIN_ROOM: "joinroom",
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
	console.log("Client[" + client.id + "] connected");
	clients[client.id] = client;

	client.emit(PROTOCOL.TEST, "TEST");

	client.on("disconnect", function (reason) {
		// TODO: Remove disconnected clients from the clients variable
		console.log("Client[" + client.id + "] disconnected for reason:", reason);
	});
});
