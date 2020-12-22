import React from "react";
import "./currently-playing.css";

export default function CurrentlyPlaying({className, ...rest}) {
    const currentlyPlaying = {
        song: "Song 1",
        artist: "Artist 1",
        albumArt: "https://picsum.photos/100",
    };

    return (
        <div className={`currently-playing ${className}`} {...rest}>
            <div className="song-info">
                <img src={currentlyPlaying.albumArt} className="album-art z-depth-1" />
                <div className="song-text">
                    <h4>{currentlyPlaying.song}</h4>
                    <div>{currentlyPlaying.artist}</div>
                </div>
            </div>
        </div>
    );
}
