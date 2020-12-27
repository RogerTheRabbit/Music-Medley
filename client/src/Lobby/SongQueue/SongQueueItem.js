import React from "react";
import { formatDuration } from "../../utils/utils";

export default function SongQueueItem({ song }) {
    return (
        <div className="song-item">
            <img src={song.albumArt} alt="Album art" className="album-art z-depth-1" width="50px" height="50px"/>
            <div className="song-info">
                <div>{song.title}</div>
                <div className="song-artist">{song.artist}</div>
            </div>
            <div className="song-duration">{formatDuration(song.duration)}</div>
        </div>
    );
}