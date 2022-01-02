// Apparently we can't use ES6 imports so we got the old imports.
const express = require("express");
const socket = require("socket.io");
const dotenv = require("dotenv");
const {nanoid} = require("nanoid");

dotenv.config();

const PORT = process.env.PORT;
const IP = process.env.IP;
const PROTOCOL = {
	NEW_USER: "new_user",
	CREATE_ROOM: "create_room",
	CREATE_SUCCESSFUL: "create_successful",
	JOIN_ROOM: "join_room",
	JOIN_SUCCESSFUL: "join_successful",
	INVALID_ROOMCODE: "invalid_roomcode",
    INVALID_PASSWORD: "invalid_password",
	USER_JOINED: "user_joined",
	USER_LEFT: "user_left",
	ADDED_SONG: "song_added",
	QUEUE_SONG: "song_queued",
	PAUSE_PLAYER: "pause_player",
	PLAY_PLAYER: "play_player",
	SET_PLAYING: "set_playing",
	PLAY_NEXT: "play_next",
	PLAY_PREVIOUS: "play_previous",
	PROGRESS_CHECK: "progress_check",
	SYNC_PLAYER: "sync_player",
	SYNC_PLAYER_ACK: "sync_player_ack",
    CORRECT_PROGRESS: "correct_progress",
	SEND_MESSAGE: "send_message",
	RECEIVE_MESSAGE: "receive_message",
};

let rooms = {};

// App setup
let app = express();

let server = app.listen(PORT, IP, function () {
	console.log("Listening on " + IP + ":" + PORT);
});

// Socket setup
let io = socket(server, {
	cors: {
		origin: process.env.CLIENT_ORIGIN,
		methods: ["GET"],
		credentials: true,
	}
});

io.on("connection", function (client) {
	console.log("Client[" + client.id + "] connected");
	let roomCode;
	client.on(PROTOCOL.CREATE_ROOM, ({userName, roomPassword}) => {
		roomCode = nanoid(6);
		let room = {
			roomCode: roomCode,
			password: roomPassword,
			participants: {},
			messages: [],
			currProgress: 0,
			playingStatus: false,
			queue: [],
			curSong: 0,
		}
		client.join(roomCode);
		rooms[roomCode] = room;
		const newParticipant = { 
			id: client.id,
			userName: userName,
			profilePicture: `https://picsum.photos/id/${Math.trunc(Math.random() * 300)}/50/50`,
		}
		rooms[roomCode].participants[client.id] = newParticipant;
		client.emit(PROTOCOL.CREATE_SUCCESSFUL, room);
		client.to(roomCode).emit(PROTOCOL.USER_JOINED, newParticipant);
	})

	client.on(PROTOCOL.JOIN_ROOM, ({userName, roomCode:receivedRoomCode, roomPassword}) => {
		roomCode = receivedRoomCode;
		// check that the roomCode is valid
		if (!(roomCode in rooms)){
			client.emit(PROTOCOL.INVALID_ROOMCODE);
		}
		// check if the password is correct
		else if (rooms[roomCode].password !== roomPassword){
			client.emit(PROTOCOL.INVALID_PASSWORD);
		} 
		else {
			client.join(roomCode);
			roomCode = roomCode;
			const newParticipant = { 
				id: client.id,
				userName: userName,
				roomCode: roomCode,
				profilePicture: `https://picsum.photos/id/${Math.trunc(Math.random() * 300)}/50/50`,
			}
			rooms[roomCode].participants[client.id] = newParticipant;
			client.emit(PROTOCOL.JOIN_SUCCESSFUL, rooms[roomCode]);
			client.to(roomCode).emit(PROTOCOL.USER_JOINED, newParticipant);
		}
	})

	client.on(PROTOCOL.ADDED_SONG, (songInfo) => {
		rooms[roomCode].queue.push(songInfo);
		io.to(roomCode).emit(PROTOCOL.QUEUE_SONG, songInfo);
	})

	client.on(PROTOCOL.SET_PLAYING, ({playing, progress}) => {
		if (playing){
			io.in(roomCode).emit(PROTOCOL.SET_PLAYING, playing);
		} else {
			client.to(roomCode).emit(PROTOCOL.SET_PLAYING, playing, progress);
		}
		rooms[roomCode].playingStatus = playing;
	})

	client.on(PROTOCOL.PLAY_NEXT, () => {
		if (rooms[roomCode].queue.length > rooms[roomCode].curSong) {
			rooms[roomCode].curSong++;
			rooms[roomCode].currProgress = 0;
			io.in(roomCode).emit(PROTOCOL.PLAY_NEXT);
		}
	});

	client.on(PROTOCOL.PLAY_PREVIOUS, () => {
		if (0 < rooms[roomCode].curSong) {
			rooms[roomCode].curSong--;
			rooms[roomCode].currProgress = 0;
			io.in(roomCode).emit(PROTOCOL.PLAY_PREVIOUS);
		}
	});

	client.on(PROTOCOL.PROGRESS_CHECK, (clientProgress) => {
		let progressInServer = rooms[roomCode].currProgress;
		if (progressInServer < clientProgress){
			rooms[roomCode].currProgress = clientProgress;
		} else if (progressInServer - clientProgress > 1) { // Progress is measured as a percentage, not a time, so unless there is a 100.1% difference, then this will never trigger.
			console.log('Progress is too far apart.')
			client.emit(PROTOCOL.CORRECT_PROGRESS, progressInServer);
		}
	})

	client.on(PROTOCOL.SYNC_PLAYER, () => {
		client.emit(PROTOCOL.SYNC_PLAYER_ACK, rooms[roomCode]);
	})

	client.on(PROTOCOL.SEND_MESSAGE, (message) => {
		io.in(roomCode).emit(PROTOCOL.RECEIVE_MESSAGE, message);
	});

	// when client disconnects
	client.on("disconnect", (reason) => {
		if (roomCode in rooms){
			delete rooms[roomCode].participants[client.id];			
			client.to(roomCode).emit(PROTOCOL.USER_LEFT, client.id, reason);
			if (Object.entries(rooms[roomCode].participants).length === 0){
				delete rooms[roomCode];
			}
		}
		console.log(rooms);
	})

});
