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
	CREATE_ROOM: "create_room",
	CREATE_SUCCESSFUL: "create_successful",
	JOIN_ROOM: "join_room",
	JOIN_SUCCESSFUL: "join_successful",
	USER_JOINED: "user_joined",
	USER_LEFT: "user_left"
};

let clients = {};
let rooms = {};

let room1 = {
	roomCode: "room1",
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

	client.on(PROTOCOL.CREATE_ROOM, ({userName, roomPassword}) => {
		let roomCode = generateRoomCode(5);
		let room = {
			roomCode: roomCode,
			password: roomPassword,
			participants: {}
		}
		rooms[roomCode] = room;
		const newParticipant = { 
			id: client.id,
			userName: userName,
			profilePicture: `https://picsum.photos/id/${Math.trunc(Math.random() * 300)}/50/50`,
		}
		rooms[roomCode].participants[client.id] = newParticipant;
		console.log(rooms);
		client.emit(PROTOCOL.CREATE_SUCCESSFUL, room);
		client.to(roomCode).emit(PROTOCOL.USER_JOINED, newParticipant);

	})

	client.on(PROTOCOL.JOIN_ROOM, ({userName, roomCode, roomPassword}) => {
		client.join('room1');
		// todo: add the room to the rooms object as it gets created
		rooms['room1'] = room1;
		const newParticipant = { 
			id: client.id,
			userName: userName,
			profilePicture: `https://picsum.photos/id/${Math.trunc(Math.random() * 300)}/50/50`,
		}
		rooms['room1'].participants[client.id] = newParticipant;
		client.emit(PROTOCOL.JOIN_SUCCESSFUL, rooms['room1']);
		client.to("room1").emit(PROTOCOL.USER_JOINED, newParticipant);
	})

	// when client disconnects
	client.on("disconnect", (reason) => {
		delete room1.participants[client.id];

		client.to("room1").emit(PROTOCOL.USER_LEFT, client.id, reason);
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

