import socket from "socket.io-client";
import dotenv from "dotenv";

dotenv.config();

const IP = process.env.REACT_APP_IP;
const PORT = process.env.REACT_APP_PORT;

const PROTOCOL = {
	TEST: "test",
};

// Initialize listeners here
function initialize() {
	let io = socket.connect("http://" + IP + ":" + PORT);
	console.log("Trying to connect to:", "http://" + IP + ":" + PORT);

	io.on("connect", (io) => {
		console.log("Connected so server");
	});

	io.on("disconnect", () => {
		console.log("Connection lost...");
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
