import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HomeScreen from "./homescreen/HomeScreen";
import networking from "./networking/networking";

networking.initialize();

networking.createAndJoinRoom("The best Room", "The most secure password123");

ReactDOM.render(
	<React.StrictMode>
		<div>Uncomment your component</div>
		{/* <HomeScreen /> */}
	</React.StrictMode>,
	document.getElementById("root")
);
