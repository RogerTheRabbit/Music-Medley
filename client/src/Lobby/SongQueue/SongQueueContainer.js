import React from "react";
import { connect } from "react-redux";
import { addSong } from "../../redux/player/playerActions";
import SongQueueItem from "./SongQueueItem";
import "./song-queue.css";

function SongQueueContainer(props) {

    const addMockSong = () => {
        props.addSong({title: `Song ${Math.trunc(Math.random() * 100)}`, artist: `Artist ${Math.trunc(Math.random() * 100)}`, duration: Math.trunc(Math.random() * 444), albumArt: "https://picsum.photos/50"});
    }

    return (
        <div className="song-queue-container">
            <button onClick={()=>addMockSong()} >Add Song</button>
            {props.songs.map((song, idx) => {
                return <SongQueueItem key={idx} song={song} />;
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return state.lobby, state.player;
};

const mapDispatchToProps = (dispatch) => {
    return {
        addSong: (newSong) => dispatch(addSong(newSong)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongQueueContainer);
