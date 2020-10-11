import React, { useEffect } from 'react';
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { togglePlaying, setAudioLevel } from '../redux/player/playerActions';

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
		// duration,
		playbackRate,
		pip,
	} = props;

	useEffect(() => {
		console.log("USEEFFECT");
		let timeout = setTimeout(() => {
			console.log("TESTTT", player);
			props.togglePlaying(playing);
			props.setAudioLevel(Math.random() / 2);
		}, 3000);
		return () => {
			clearTimeout(timeout)
		}
	})

	let player;

	const playerRef = playerRef => {
		player = playerRef;
	}

	return (
		<>
			<ReactPlayer
				ref={playerRef}
				width="0px"
				height="0px"
				url={url}
				pip={pip}
				playing={playing}
				controls={controls}
				light={light}
				loop={loop}
				playbackRate={playbackRate}
				volume={volume}
				muted={muted}
				onReady={() => console.log("onReady")}
				onStart={() => console.log("onStart")}
				// onPlay={this.handlePlay}
				// onEnablePIP={this.handleEnablePIP}
				// onDisablePIP={this.handleDisablePIP}
				onPause={handlePause}
				onBuffer={() => console.log("onBuffer")}
				onSeek={(e) => console.log("onSeek", e)}
				onEnded={handleEnded}
				onError={(e) => console.log("onError", e)}
				onProgress={handleProgress}
				onDuration={handleDuration}
				style={{ display: "hidden" }}
			/>
		</>
	);
}

const handlePause = (e) => {
	// console.log(e);
}
const handleEnded = (e) => {
	// console.log(e);
}
const handleProgress = (e) => {
	// console.log(e);
}
const handleDuration = (e) => {
	// console.log(e);
}

const mapStateToProps = (state) => {
	return state.player
}

const mapDispatchToProps = dispatch => {
	return {
		togglePlaying: (currentPlayingState) => dispatch(togglePlaying(currentPlayingState)),
		setAudioLevel: (newLevel) => dispatch(setAudioLevel(newLevel)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
