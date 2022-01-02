import React from "react";
import { connect } from "react-redux";
import "./currently-playing.css";

function CurrentlyPlaying({ className, player, ...rest }) {
    const curSong = player.songs[player.songIndex] || {};
    return (
        <div className={`currently-playing ${className}`} {...rest}>
            <div className="song-info">
                {curSong.photo && <img src={curSong.photo} className="album-art z-depth-1" alt="Song art" />}
                <div className="song-text">
                    <h4>{curSong.title || ""}</h4>
                    <div>{curSong.channel || ""}</div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { player: state.player }
}

export default connect(mapStateToProps)(CurrentlyPlaying);
