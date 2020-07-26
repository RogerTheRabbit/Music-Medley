import React from "react";
import "./App.css";
import NavBar from "./Lobby/NavBar";
import Lobby from "./Lobby/Lobby";

function App() {
  return (
<<<<<<< HEAD
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Lobby />
      </main>
    </React.Fragment>
=======
    <div className="container">
      <div className="room-info">Room Info</div>
      <div className="search-bar">Search Bar</div>
      <div className="chatbox">Chatbox</div>
      <div className="participants">Participants</div>
      <div className="current-song">Current Song</div>
      <div className="queue">Queue</div>
      <div className="music-player">Music Player</div>
    </div>
>>>>>>> master
  );
}

export default App;
