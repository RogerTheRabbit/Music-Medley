import React, { useState } from 'react';

// This is a CRUD file...it should probably be replaced with something proper when networking is done.

// TODO: Once networking is more complete, it should interface with the player with a HOC like this...somehow
export default (WrappedComponent) => ({ ...props }) => {

    const [pos, setpos] = useState(0);

    const [songs, setSongs] = useState([
        'https://www.youtube.com/watch?v=dyRsYk0LyA8',
        'https://youtu.be/A6l8THwbcfY',
        'https://www.youtube.com/watch?v=JIN36NweL6I',
    ])

    const onReady = () => {
        props.setReady(true)
    }

    const onEnded = () => {
        const newPos = (pos + 1) % songs.length
        props.setSong(songs[newPos]);
        setpos(newPos);
    }

    const addSong = () => {
        // Probably send something via the socket here to tell the server to add a song.
        const newSongs = songs;
        newSongs.push(document.getElementById('newSong').value);
        setSongs(newSongs);
    }

    return <WrappedComponent
        {...props}
        onReady={() => onReady()}
        onStart={() => { }}
        onPlay={() => { }}
        // onEnablePIP={this.handleEnablePIP}
        // onDisablePIP={this.handleDisablePIP}
        onPause={() => { }}
        onBuffer={() => { }}
        onSeek={e => { }}
        onEnded={() => onEnded()}
        onError={e => { }}
        onProgress={e => props.setProgress(e.played)}
        onDuration={e => { }}
        addSong={() => addSong()}
    />
};
