import React from "react";
import "./Lobby.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Chat from './Components/Chat';

function Lobby() {
  return (
    <div className="main-container">
      <div className="room-info">Room Info</div>
      <div className="search-bar">Search Bar</div>
      <div className="chatbox">
        <Chat/>
      </div>
      {/* <Chat/> */}
      <div className="participants">Participants</div>
      <div className="current-song">Current Song</div>
      <div className="queue">Queue</div>
      <div className="music-player">Music Player</div>
    </div>
  );
}

export default Lobby;
