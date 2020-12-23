import React from "react";
import "./controls.css";
import { MDBIcon } from "mdbreact";
import { setAudioLevel } from "../../redux/player/playerActions";
import { connect } from "react-redux";
import { formatDuration } from "../../utils/utils";
import CurrentlyPlaying from "../CurrentlyPlaying/CurrentlyPlaying";

function Controls(props) {
    const playing = true;

    let volumeIcon;

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
                    <button className="primary outlined-button btn-fill-horz-open btn-rounded icon-button-lg">
                        <MDBIcon icon={playing ? "play" : "pause"} />
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
