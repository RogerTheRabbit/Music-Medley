import React, { createContext } from 'react';
import socket from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { addParticipant, addSong, removeParticipant, setRoom } from '../redux/lobby/lobbyActions';
import dotenv from "dotenv";

dotenv.config();

const IP = process.env.REACT_APP_IP;
const PORT = process.env.REACT_APP_PORT;

export const WebSocketContext = createContext(null)

const PROTOCOL = {
	TEST: "test",
    NEW_USER: "new_user",
    CREATE_ROOM: "create_room",
    CREATE_SUCCESSFUL: "create_successful",
	JOIN_ROOM: "join_room",
	JOIN_SUCCESSFUL: "join_successful",
	USER_JOINED: "user_joined",
    USER_LEFT: "user_left",
    ADDED_SONG: "song_added"
};

export default ({ children }) => {
    let io;
    let ws;

    const dispatch = useDispatch();

    const createRoom = (userName, roomPassword) => {
        io.emit(PROTOCOL.CREATE_ROOM, {
            userName: userName,
            roomPassword: roomPassword,
        });
    }

    const joinRoom = (userName, roomCode, roomPassword) => {
        io.emit(PROTOCOL.JOIN_ROOM, {
            userName: userName,
            roomCode: roomCode,
            roomPassword: roomPassword,
        });
    }

    const resetConnection = () => {
        io.disconnect();
        io = socket.connect("http://" + IP + ":" + PORT);
        initializeEventHandlers(io);
    }

    const initializeEventHandlers = (io) => {
        io.on("connect", () => {
            console.log("Connected to server");
        });

        io.on(PROTOCOL.CREATE_SUCCESSFUL, (room) => {
            console.log(room);
            dispatch(setRoom(room));
        });

        io.on(PROTOCOL.JOIN_SUCCESSFUL, (room) => {
            dispatch(setRoom(room));
        });

        io.on(PROTOCOL.USER_JOINED, (newParticipant) => {
            console.log("User joined:", newParticipant);
            dispatch(addParticipant(newParticipant))
        })

        io.on(PROTOCOL.USER_LEFT, (userId, reason) => 
            dispatch(removeParticipant(userId))
        );

        io.on("disconnect", (msg) => {
            console.log("Disconnected: ", msg);
            dispatch(setRoom(null));
        });

        io.on(PROTOCOL.TEST, (data) => {
            console.log(data);
        });

        io.on(PROTOCOL.ADDED_SONG, (songInfo) =>{
            dispatch(addSong(songInfo));
        });
    }

    const sendSong = (song) => {
        const songInfo = {
			photo: song.snippet.thumbnails.default.url,
			url: "https://www.youtube.com/watch?v=" + song.id.videoId,
			title: song.snippet.title,
			channel: song.snippet.channelTitle
        }
        console.log(songInfo);
        io.emit(PROTOCOL.ADDED_SONG, songInfo);
    }

    if (!io) {
        io = socket.connect("http://" + IP + ":" + PORT);

        initializeEventHandlers(io);

        ws = {
            io: io,
            joinRoom,
            createRoom,
            resetConnection,
            sendSong,
        }
    }

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}
