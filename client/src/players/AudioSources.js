import React, { useContext, useRef } from 'react';
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { togglePlaying, setAudioLevel, setProgress, setDuration, setSong, setReady } from '../redux/player/playerActions';
import { togglePlaying, setAudioLevel, setProgress, setDuration, setSong, setReady, setPlayerRef } from '../redux/player/playerActions';
import { WebSocketContext } from '../networking/networking';

const dotenv = require("dotenv");

dotenv.config();

const DEBUG = process.env.REACT_APP_DEBUG_PLAYER === "true";

function Player(props) {

	const networking = useContext(WebSocketContext);

	const {
		songs,
		songIndex,
		playing,
		controls,
		light,
		volume,
		muted,
		loop,
		// played,
		// loaded,
		playbackRate,
		pip,
	} = props;

	const updateProgress = (e) => {
		let updatedProgress = e.played;
		props.setProgress(updatedProgress);
		networking.progressCheck(updatedProgress);
	}

	const playerRef = useRef(null);
	props.setPlayerRef(playerRef);

	return (
		<>
			<ReactPlayer
				className={!DEBUG && "hidden"}
				url={songs[songIndex]?.url}
				pip={pip}
				playing={playing}
				controls={controls}
				light={light}
				loop={loop}
				playbackRate={playbackRate}
				volume={volume}
				muted={muted}
				onReady={props.onReady}
				onStart={props.onStart}
				onPlay={props.onPlay}
				// onEnablePIP={this.handleEnablePIP}
				// onDisablePIP={this.handleDisablePIP}
				onPause={props.onPause}
				onBuffer={props.onBuffer}	// Note to self: Called when player runs out of buffer
				onSeek={e => console.log("onSeek", e)}
				onEnded={props.onEnded}
				onError={e => { }}
				onProgress={e => updateProgress(e)}
                onDuration={(duration) => props.setDuration(duration)}
				ref={playerRef}
			/>
			{DEBUG && (
				<>
					<h1>TESTING STATS:</h1>
					<p>PROGRESS: {props.progress}</p>
					<p>READY: {props.ready ? "Ready" : "Not ready"}</p>
					<p>VOLUME: {props.volume}</p>
					<p>Current song: {props.songs[props.songIndex]?.url}</p>
					<input id="newSong" defaultValue={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} />
					<button onClick={props.addSong}>Add Song</button>
					<br />
					<button onClick={props.togglePlaying}>{props.playing ? "PAUSE" : "PLAY"}</button>
					Volume: <input max={1} min={0} type="range" step=".01" onChange={e => props.setAudioLevel(e.target.value)} defaultValue={props.volume} />
				</>
			)}
		</>
	);
}


const mapStateToProps = (state) => {
	return state.player
}

const mapDispatchToProps = dispatch => {
	return {
		togglePlaying: () => dispatch(togglePlaying()),
		setAudioLevel: (newLevel) => dispatch(setAudioLevel(newLevel)),
		setProgress: (progress) => dispatch(setProgress(progress)),
		setSong: (url) => dispatch(setSong(url)),
		setReady: (ready) => dispatch(setReady(ready)),
		setDuration: (ready) => dispatch(setDuration(ready)),
		setPlayerRef: (playerRef) => dispatch(setPlayerRef(playerRef)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
