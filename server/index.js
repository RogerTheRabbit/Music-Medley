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
	NEW_USER: "new_user",
	JOIN_ROOM: "join_room",
	USER_LEFT: "user_left"
};

let clients = {};
let rooms = {};

let room1 = {
	name: "room1",
	password: "password",
	participants: {}
};

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

	client.on(PROTOCOL.JOIN_ROOM, () => {
		console.log(generateRoomCode(5));
		client.join('room1');
		// todo: add the room to the rooms object as it gets created
		rooms['room1'] = room1;
		room1.participants[client.id] = client;
		io.to("room1").emit(PROTOCOL.JOIN_ROOM, client.id + " hello has joined room: " + room1.name);
	})

	// when client disconnects
	client.on("disconnect", (reason) => {
		delete room1.participants[client.id];

		io.to("room1").emit(PROTOCOL.USER_LEFT, "Client[" + client.id + "] has disconnected for reason:" + reason);
		if (Object.entries(room1.participants).length === 0){
			delete rooms['room1'];
		}
	});
});

function generateRoomCode(length) {
	let result           = '';
	let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let charactersLength = characters.length;
	for ( let i = 0; i < length; i++ ) {
	   result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
 }
