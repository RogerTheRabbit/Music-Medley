import React from "react";
import "./App.css";
import NavBar from "./Lobby/NavBar";
import Lobby from "./Lobby/Lobby";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
	return (
		<div className="container">
			<div className="room-info">Room Info</div>
			<div className="search-bar">Search Bar</div>
			<div className="chatbox">Chatbox</div>
			<div className="participants">Participants</div>
			<div className="current-song">Current Song</div>
			<div className="queue">Queue</div>
			<div className="music-player">Music Player</div>
		</div>
	);
}

export default App;
