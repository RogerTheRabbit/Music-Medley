import React from "react";
import AudioSources from "./players/AudioSources";
import Lobby from "./Lobby/Lobby";
import ChoiceHomeScreen from "./homescreen/ChoiceHomeScreen";
import { BrowserRouter as Router, Switch, Route, hashHistory } from "react-router-dom";

export default function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ChoiceHomeScreen />
        </Route>
        <Route path="/room">
          <Lobby />;
        </Route>
        {/* 
          path="*" is a wildcard and will catch any path that does not match the above paths
          This route should always be last in the switch
        */}
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
      {/* <AudioSources /> */}
    </Router>
  );
}
