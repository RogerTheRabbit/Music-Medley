// Apparently we can't use ES6 imports so we got the old imports.
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

io.on("connection", function (client) {
	console.log("Client[" + client.id + "] connected");
	clients[client.id] = client;

	client.emit(PROTOCOL.TEST, "TEST");

	// broadcast when a user connects
	client.broadcast.emit(PROTOCOL.NEW_USER, client + "has joined the room.");

	// when client disconnects
	client.on("disconnect", (reason) => {
		// TODO: Remove disconnected clients from the clients variable
		io.emit("Client[" + client.id + "] has disconnected for reason:", reason);
		// console.log("Client[" + client.id + "] has disconnected for reason:", reason);
	});
});
