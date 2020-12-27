import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from './redux/rootReducer'
import Networking from './networking/networking';

const store = createStore(rootReducer);

Networking.initialize();

ReactDOM.render(

	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
