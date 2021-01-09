import React from "react";
import {MDBIcon} from "mdbreact";


export default function SearchResult({ song }) {
    

    const sendSong = () => {
        //song.id.videoId is how to get the video id
        socket.emit("https://www.youtube.com/watch?v=" + song.id.videoId)
    }


    return (
        <div className="individual-search-result-container">
            <div className="search-result">
                <img src={song.snippet.thumbnails.default.url} className="thumbnail"/>
                <div className="song-information">
                    <div className="song-name">{song.snippet.title}</div>
                    <div className="channel-name">{song.snippet.channelTitle}</div>
                </div>
            </div>
            <div className="add-song" onClick={sendSong}>
                <MDBIcon icon="plus" />
            </div>
        </div>
     );
}
