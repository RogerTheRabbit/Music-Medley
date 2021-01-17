import React, { useContext } from "react";
import "./controls.css";
import { MDBIcon } from "mdbreact";
import { setAudioLevel, togglePlaying } from "../../redux/player/playerActions";
import { toggleMobileControls } from "../../redux/app/appActions";
import { connect } from "react-redux";
import { formatDuration } from "../../utils/utils";
import CurrentlyPlaying from "../CurrentlyPlaying/CurrentlyPlaying";
import { WebSocketContext } from '../../networking/networking';
import { isMobile } from 'react-device-detect';
import { AnimateSharedLayout, motion } from "framer-motion";
import { controllerHeight } from "../../utils/constants"

const variants = {
    open: { opacity: 1, y: 0, height: "100%" },
    closed: { opacity: 0, y: "100%", height: "0" },
}

function Controls(props) {
    let volumeIcon;
    const networking = useContext(WebSocketContext);

    switch (true) {
        case props.player.volume > 0.5:
            volumeIcon = "volume-up";
            break;
        case props.player.volume > 0:
            volumeIcon = "volume-down";
            break;
        default:
            volumeIcon = "volume-mute";
            break;
    }

    const togglePlaying = () => {
        // if the player is currently playing, then we want to pause on local first then send signal to server, 
        // we'll pass in the timestamp so the server can sync up the other clients to this time
        if (props.player.playing){ 
            props.togglePlaying();
            networking.setPlaying(false, props.player.progress)
        } 
        // if the player is paused, we want it to resume/play
        else {
            networking.setPlaying(true);
        }
    }

    const mediaButtons = (<div>
        <button className="outlined-button btn-fill-horz-open btn-rounded icon-button-md">
            <MDBIcon icon="random" />
        </button>
        <button className="outlined-button btn-fill-horz-open btn-rounded icon-button-md">
            <MDBIcon icon="step-backward" />
        </button>
        <button className="primary outlined-button btn-fill-horz-open btn-rounded icon-button-lg"
            onClick={() => togglePlaying()}>
            <MDBIcon icon={props.player.playing ? "pause" : "play"} />
        </button>
        <button className="outlined-button btn-fill-horz-open btn-rounded icon-button-md">
            <MDBIcon icon="step-forward" />
        </button>
        <button className="outlined-button btn-fill-horz-open btn-rounded icon-button-md">
            <MDBIcon icon="redo-alt" />
        </button>
    </div>)

    return (
        <>
            {isMobile && <motion.div
                className="mobile-controls"
                animate={props.app?.mobileControlsOpen ? "open" : "closed"}
                transition={{ease:"easeOut", duration: "0.1"}}
                variants={variants}
                drag="y"
                dragConstraints={{top: 0}}
                onDragEnd={(event, info) => {
                    if(info.offset.y > 0) {
                        props.toggleMobileControls();
                    }
                }}
            >
                {mediaButtons}
            </motion.div>}
            <motion.div 
                className="controls"
                onClick={()=> {isMobile && props.toggleMobileControls()}}
                drag={!props.app?.mobileControlsOpen && "y"}
                dragConstraints={{top: 0, bottom: 0}}
                onDragEnd={(event, info) => {
                    if(info.offset.y < 0) {
                        props.toggleMobileControls();
                    }
                }}
            >
                {!isMobile && mediaButtons}
                <CurrentlyPlaying className="left-section"/>
                <div className="custom-progress-bar">
                    <div className="song-progress">{formatDuration(props.player.duration * props.player.progress)}</div>
                    <input type="range" min={0} max={props.player.duration} readOnly value={props.player.progress * props.player.duration} />
                    <div className="song-length">{formatDuration(props.player.duration)}</div>
                </div>
                <div className="volume-slider">
                    <MDBIcon icon={volumeIcon} />
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={props.player.volume}
                        onChange={(e) => {
                            props.setAudioLevel(e.target.value);
                        }}
                    />
                </div>
            </motion.div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        player: state.player,
        app: state.app,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAudioLevel: (newLevel) => dispatch(setAudioLevel(newLevel)),
        togglePlaying: () => dispatch(togglePlaying()),
        toggleMobileControls: () => dispatch(toggleMobileControls()),
    };
};  

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
