import React from "react";
import "./Lobby.css";
import Controls from "./Controls/Controls";
import AudioSourcesWrapper from "../players/AudioSourcesWrapper";
import SongQueueContainer from "./SongQueue/SongQueueContainer";
import Chat from "./Chat/Chat";
import CenterNav from "./CenterNav";
import LeftPanel from "./LeftPanel";

function Lobby() {
    return (
        <div className="lobby-container">
            <div className="lobby-body">
                <div className="left-panel">
                    <LeftPanel />
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
            <AudioSourcesWrapper />
        </div>
    );
}

export default Lobby;
