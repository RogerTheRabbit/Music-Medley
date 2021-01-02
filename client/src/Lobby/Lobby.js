import React from "react";
import "./Lobby.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import RoomInfo from "./Room Info/RoomInfo";
import ParticipantContainer from "./Participants/ParticipantContainer";
import Controls from "./Controls/Controls";
import AudioSources from "../players/AudioSources";
import SongQueueContainer from "./SongQueue/SongQueueContainer";
import Chat from "./Chat/Chat";
import CenterNav from "./CenterNav";

function Lobby() {
    return (
        <div className="lobby-container">
            <div className="lobby-body">
                <div className="left-panel">
                    <div className="left-panel-container">
                        <RoomInfo />
                        <ParticipantContainer />
                    </div>
                </div>
                <div className="center-content">
                    <div className="center-content-container">
                        <CenterNav/>
                        <br/>
                        <SongQueueContainer />
                    </div>
                </div>
                <div className="right-panel-container">
                    <Chat />
                </div>
            </div>
            <div className="controls-section">
                <Controls />
            </div>
            <AudioSources />
        </div>
    );
}

export default Lobby;
