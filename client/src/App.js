import React from "react";
import AudioSources from "./players/AudioSources";
import Lobby from './Lobby/Lobby'
import { connect } from "react-redux";
import { setPage } from "./redux/appActions";
import Constants from './Constants';
import ChoiceHomeScreen from "./homescreen/ChoiceHomeScreen";

function App(props) {

	console.log(props);

	let Page;

	switch (props.page) {
		case Constants.CHOICE_HOME_SCREEN:
			Page = <ChoiceHomeScreen />
			break;
		case Constants.LOBBY_SCREEN:
			Page = <Lobby />
			break;
		default:
			Page = "404"
			break;
	}

	return (
		<>
			{Page}
			<AudioSources />
		</>
	);
}

const mapStateToProps = (state) => {
	return state.app;
}

const mapDispatchToProps = dispatch => {
	return {
		setPage: (newPage) => dispatch(setPage(newPage)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
