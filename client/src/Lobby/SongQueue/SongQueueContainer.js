import React from "react";
import SongQueueItem from "./SongQueueItem";
import "./song-queue.css";

export default function SongQueueContainer() {
    const songs = [
        { title: "Song 1", artist: "Artist 1", duration: 453, albumArt: "https://picsum.photos/50" },
        { title: "Song 2", artist: "Artist 1", duration: 453, albumArt: "https://picsum.photos/50" },
        { title: "Song 3", artist: "Artist 2", duration: 453, albumArt: "https://picsum.photos/50" },
        { title: "Song 4", artist: "Artist 3", duration: 453, albumArt: "https://picsum.photos/50" },
        { title: "Song 5", artist: "Artist 3", duration: 453, albumArt: "https://picsum.photos/50" },
        { title: "Song 6", artist: "Artist 4", duration: 453, albumArt: "https://picsum.photos/50" },
        { title: "Song 7", artist: "Artist 5", duration: 453, albumArt: "https://picsum.photos/50" },
        { title: "Song 8 - A song with a really really really long song name", artist: "Artist 5", duration: 453, albumArt: "https://picsum.photos/50" },
    ];

    return (
        <div className="song-queue-container">
            {songs.map((song, idx) => {
                return <SongQueueItem key={idx} song={song} />;
            })}
        </div>
    );
}
