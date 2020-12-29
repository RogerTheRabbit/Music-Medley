import React from "react";
import Lobby from "./Lobby/Lobby";
import HomeScreen from "./homescreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ConnectedRoute from "./utils/ConnectedRoute";

export default function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/join" component={HomeScreen} />

        <ConnectedRoute path="/room/">
          <Lobby />
        </ConnectedRoute>

        <Route exact path="/" component={() => <Redirect to="/join" />} />
        {/* 
          path="*" is a wildcard and will catch any path that does not match the above paths
          This route should always be last in the switch
        */}
        <Route path="*">
          <h1>404</h1>
          <a href="/">Go back</a>
        </Route>
      </Switch>
    </Router>
  );
}
