import React from "react";
import "./Lobby.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Search from "./Search/Search";
import RoomInfo from "./Room Info/RoomInfo";
import ParticipantContainer from "./Participants/ParticipantContainer";
import Controls from "./Controls/Controls";
import AudioSources from "../players/AudioSources";
import SongQueueContainer from "./SongQueue/SongQueueContainer";
import CurrentlyPlaying from "./CurrentlyPlaying/CurrentlyPlaying";
import Chat from "./Chat/Chat";

function Lobby() {
    return (
        <div className="lobby-container">
            <div className="room-info-section">
                <RoomInfo />
            </div>
            <div className="search-section">
                <Search />
            </div>
            <div className="chatbox-section">
                <Chat />
            </div>
            <div className="participants-section">
                <ParticipantContainer />
            </div>
            <div className="current-song-section">
                <CurrentlyPlaying />
            </div>
            <div className="queue-section">
                <SongQueueContainer />
            </div>
            <div className="controls-section">
                <Controls />
            </div>
            {/* <AudioSources /> */}
        </div>
    );
}

export default Lobby;
