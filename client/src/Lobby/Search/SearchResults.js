import React, {useContext } from "react";
import {MDBIcon} from "mdbreact";
import { WebSocketContext } from '../../networking/networking';

export default function SearchResult({ song }) {
    const networking = useContext(WebSocketContext);

    return (
        <div className="individual-search-result-container">
            <div className="search-result">
                <img src={song.snippet.thumbnails.default.url} alt="Song Display" className="thumbnail"/>
                <div className="song-information">
                    <div className="song-name">{song.snippet.title}</div>
                    <div className="channel-name">{song.snippet.channelTitle}</div>
                </div>
            </div>
            <div className="add-song" onClick={() => {networking.sendSong(song)}}>
                <MDBIcon icon="plus" />
            </div>
        </div>
     );
}
