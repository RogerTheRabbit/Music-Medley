import React from "react";
import { connect } from "react-redux";
import { addSong } from "../../redux/player/playerActions";
import SongQueueItem from "./SongQueueItem";
import "./song-queue.css";

function SongQueueContainer(props) {

    return (
        <div className="song-queue-container">
            {props.songs.map((song, idx) => {
                return <SongQueueItem key={idx} song={song} />;
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return state.player;
};

const mapDispatchToProps = (dispatch) => {
    return {
        addSong: (newSong) => dispatch(addSong(newSong)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongQueueContainer);
