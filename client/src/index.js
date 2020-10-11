import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HomeScreen from "./homescreen/HomeScreen";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from './redux/rootReducer'


const store = createStore(rootReducer);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			{/* <HomeScreen /> */}
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
