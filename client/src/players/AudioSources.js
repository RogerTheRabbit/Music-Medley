import React, { useEffect } from 'react';
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { togglePlaying, setAudioLevel, setProgress, setSong, setReady } from '../redux/player/playerActions';

function Player(props) {

	const {
		url,
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

	let player;

	const playerRef = playerRef => {
		player = playerRef;
	}

	return (
		<>
			<ReactPlayer
				ref={playerRef}
				width="500px"
				height="300px"
				url={url}
				pip={pip}
				playing={playing}
				controls={controls}
				light={light}
				loop={loop}
				playbackRate={playbackRate}
				volume={volume}
				muted={muted}
				onReady={() => props.setReady(true)}
				onStart={() => console.log("onStart")}
				onPlay={() => console.log("onPlay")}
				// onEnablePIP={this.handleEnablePIP}
				// onDisablePIP={this.handleDisablePIP}
				onPause={() => console.log("onPause")}
				onBuffer={() => console.log("onBuffer")}
				onSeek={e => console.log("onSeek", e)}
				onEnded={() => console.log("onEnded")}
				onError={e => console.log("onError", e)}
				onProgress={e => props.setProgress(e.played)}
				onDuration={e => console.log("onDuration", e)}
			/>
			<h1>TESTING STATS:</h1>
			<p>PROGRES: {props.progress}</p>
			<p>READY: {props.ready ? "Ready" : "Not ready"}</p>
			<p>VOLUME: {props.volume}</p>
			<button onClick={props.togglePlaying}>{props.playing ? "PAUSE" : "PLAY"}</button>
			<input onChange={e => props.setSong(e.target.value)} defaultValue={props.url} />
			<input max={1} min={0} type="range" step=".01" onChange={e => props.setAudioLevel(e.target.value)} defaultValue={props.volume} />
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
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
