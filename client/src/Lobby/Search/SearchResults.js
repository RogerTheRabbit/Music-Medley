import React from "react";
import {MDBIcon} from "mdbreact";

export default function SearchResult({ song }) {
    return (
        <div className="individual-search-result-container">
            <div className="search-result">
                <img src={song.thumbnails.default.url} className="thumbnail"/>
                <div className="song-information">
                    <div className="song-name">{song.title}</div>
                    <div className="channel-name">{song.channelTitle}</div>
                </div>
            </div>
            <div className="add-song">
                <MDBIcon icon="plus" />
            </div>
        </div>
     );
}
