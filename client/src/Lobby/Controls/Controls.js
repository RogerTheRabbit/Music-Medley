import React, { useContext } from "react";
import "./controls.css";
import { MDBIcon } from "mdbreact";
import { setAudioLevel, togglePlaying } from "../../redux/player/playerActions";
import { connect } from "react-redux";
import { formatDuration } from "../../utils/utils";
import CurrentlyPlaying from "../CurrentlyPlaying/CurrentlyPlaying";
import { WebSocketContext } from '../../networking/networking';
import { isMobile } from 'react-device-detect';

function Controls(props) {
    let volumeIcon;
    const networking = useContext(WebSocketContext);

    switch (true) {
        case props.volume > 0.5:
            volumeIcon = "volume-up";
            break;
        case props.volume > 0:
            volumeIcon = "volume-down";
            break;
        default:
            volumeIcon = "volume-mute";
            break;
    }

    const togglePlaying = () => {
        // if the player is currently playing, then we want to pause on local first then send signal to server, 
        // we'll pass in the timestamp so the server can sync up the other clients to this time
        if (props.playing){ 
            props.togglePlaying();
            networking.setPlaying(false, props.progress)
        } 
        // if the player is paused, we want it to resume/play
        else {
            networking.setPlaying(true);
        }
    }

    return (
        <>
            <div className="controls">
                <CurrentlyPlaying className="left-section"/>
                <div>
                    <button className="outlined-button btn-fill-horz-open btn-rounded icon-button-md">
                        <MDBIcon icon="random" />
                    </button>
                    <button className="outlined-button btn-fill-horz-open btn-rounded icon-button-md">
                        <MDBIcon icon="step-backward" />
                    </button>
                    <button className="primary outlined-button btn-fill-horz-open btn-rounded icon-button-lg"
                        onClick={() => togglePlaying()}>
                        <MDBIcon icon={props.playing ? "pause" : "play"} />
                    </button>
                    <button className="outlined-button btn-fill-horz-open btn-rounded icon-button-md">
                        <MDBIcon icon="step-forward" />
                    </button>
                    <button className="outlined-button btn-fill-horz-open btn-rounded icon-button-md">
                        <MDBIcon icon="redo-alt" />
                    </button>
                </div>
                <div className="custom-progress-bar">
                    <div className="song-progress">{formatDuration(props.duration * props.progress)}</div>
                    <input type="range" min={0} max={props.duration} readOnly value={props.progress * props.duration} />
                    <div className="song-length">{formatDuration(props.duration)}</div>
                </div>
                <div className="volume-slider">
                    <MDBIcon icon={volumeIcon} />
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={props.volume}
                        onChange={(e) => {
                            props.setAudioLevel(e.target.value);
                        }}
                    />
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return state.player;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAudioLevel: (newLevel) => dispatch(setAudioLevel(newLevel)),
        togglePlaying: () => dispatch(togglePlaying()),
    };
};  

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
