import React, { createContext } from 'react';
import socket from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { addMessage, addParticipant, removeParticipant, setRoom } from '../redux/lobby/lobbyActions';
import { setPlayingState, setProgress, addSong, setPlayer, setSong } from '../redux/player/playerActions';
import dotenv from "dotenv";

dotenv.config();

const IP = process.env.REACT_APP_IP;
const PORT = process.env.REACT_APP_PORT;

export const WebSocketContext = createContext(null);

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
    CORRECT_PROGRESS: "correct_progress",
    SYNC_PLAYER: "sync_player",
    SYNC_PLAYER_ACK: "sync_player_ack",
    SONG_ENDED: "song_ended",
    SEND_MESSAGE: "send_message",
    RECEIVE_MESSAGE: "receive_message",
};

const Networking = ({ children }) => {
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
    
    const setPlaying = (playing, progress) => {
        io.emit(PROTOCOL.SET_PLAYING, {
            playing: playing,
            progress: progress,
        });
    }

    const playNext = () => {
        io.emit(PROTOCOL.PLAY_NEXT);
    }

    const playPrevious = () => {
        io.emit(PROTOCOL.PLAY_PREVIOUS);
    }

    const progressCheck = (currProgress) => {
        io.emit(PROTOCOL.PROGRESS_CHECK, currProgress)
    }

    const syncPlayer = () => {
        io.emit(PROTOCOL.SYNC_PLAYER);
    }

    const songEnded = () => {
        io.emit(PROTOCOL.SONG_ENDED);
    }

    const sendMessage = (message) => {
        io.emit(PROTOCOL.SEND_MESSAGE, message);
    }

    const initializeEventHandlers = (io) => {
        io.on("connect", () => {
            console.log("Connected to server");
        });

        io.on(PROTOCOL.CREATE_SUCCESSFUL, (room) => {
            room.connected = true;
            console.log(room);
            dispatch(setRoom(room));
            dispatch(setPlayer(room));
        });

        io.on(PROTOCOL.JOIN_SUCCESSFUL, (room) => {
            room.connected = true;
            dispatch(setRoom(room));
            dispatch(setPlayer(room));
        });

        io.on(PROTOCOL.INVALID_ROOMCODE, () => {
            alert("The room code is not valid. Try again!")
            console.log("invalid room code");
            return false;
        });

        io.on(PROTOCOL.INVALID_PASSWORD, () => {
            alert("The password is incorrect. Try again!")
        });

        io.on(PROTOCOL.USER_JOINED, (newParticipant) => {
            console.log("User joined:", newParticipant);
            dispatch(addParticipant(newParticipant));
        });

        io.on(PROTOCOL.USER_LEFT, (userId, reason) => 
            dispatch(removeParticipant(userId))
        );

        io.on(PROTOCOL.SET_PLAYING, (playing, progress) => {
            dispatch(setPlayingState(playing));
            if (!playing) {
                dispatch(setProgress(progress));
            }
        });

        io.on(PROTOCOL.PLAY_NEXT, () => {
            dispatch(setSong(1));
        });

        io.on(PROTOCOL.PLAY_PREVIOUS, () => {
            dispatch(setSong(-1));
        });

        io.on(PROTOCOL.CORRECT_PROGRESS, (progress) => {
            dispatch(setProgress(progress));
            console.log("progress updated to: " + progress);
        });

        io.on(PROTOCOL.SYNC_PLAYER_ACK, (room) => {
            dispatch(setPlayer(room));
        })

        io.on(PROTOCOL.RECEIVE_MESSAGE, (message) => {
            message.timestamp = new Date(message.timestamp);
            dispatch(addMessage(message));
        })

        io.on("disconnect", (msg) => {
            console.log("Disconnected: ", msg);
            dispatch(setRoom({}));
        });

        io.on(PROTOCOL.TEST, (data) => {
            console.log(data);
        });

        io.on(PROTOCOL.QUEUE_SONG, (songInfo) => {
            dispatch(addSong(songInfo));
        });
    }

    const sendSong = (song) => {
        const songInfo = {
			photo: song.snippet.thumbnails.default.url,
			url: "https://www.youtube.com/watch?v=" + song.id.videoId,
			title: song.snippet.title,
            channel: song.snippet.channelTitle,
            videoId: song.id.videoId
        }
        console.log(songInfo);
        io.emit(PROTOCOL.ADDED_SONG, songInfo);
    }

    if (!io) {
        io = socket(`http://${IP}:${PORT}`, {
            withCredentials: true,
        });

        initializeEventHandlers(io);

        ws = {
            io: io,
            joinRoom,
            createRoom,
            resetConnection,
            sendSong,
            setPlaying,
            playNext,
            playPrevious,
            progressCheck,
            syncPlayer,
            songEnded,
            sendMessage,
        }
    }

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}

export default Networking;
