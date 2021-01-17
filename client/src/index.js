import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from './redux/rootReducer'
import WebSocketProvider from "./networking/networking";

const store = createStore(rootReducer);

ReactDOM.render(

	<React.StrictMode>
		<Provider store={store}>
			<WebSocketProvider>
				<App />
			</WebSocketProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
