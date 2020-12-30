import socket from "socket.io-client";
import dotenv from "dotenv";

dotenv.config();

const IP = process.env.REACT_APP_IP;
const PORT = process.env.REACT_APP_PORT;

// Added some messages we might send.
// The values aren't that important but they should be
// consistent between the client and the server
const PROTOCOL = {
	TEST: "test",
	NEW_USER: "new_user",
	JOIN_ROOM: "join_room",
	USER_LEFT: "user_left"
};

// Initialize listeners here
function initialize() {
	let io = socket.connect("http://" + IP + ":" + PORT);
	console.log("Trying to connect to:", "http://" + IP + ":" + PORT);

	io.on("connect", () => {
		console.log("Connected to server");
		io.emit(PROTOCOL.JOIN_ROOM);
	});

	io.on(PROTOCOL.JOIN_ROOM, (msg) => {
		console.log(msg);
	})

	io.on(PROTOCOL.USER_LEFT, (msg) => 
		console.log(msg)
	);

	io.on("disconnect", (msg) => {
		console.log(msg);
	});

	io.on(PROTOCOL.TEST, (data) => {
		console.log(data);
	});
}

function joinRoom(roomName) {
	console.log("Attempting to join room with id:", roomName);
}

function createAndJoinRoom(roomName, password) {
	console.log("Attempting to join room with name '" + roomName + "' and password '" + password + "'");
}

export default { initialize, joinRoom, createAndJoinRoom };
