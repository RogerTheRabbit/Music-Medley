import React from "react";
import { connect } from "react-redux";

import { Redirect, Route } from "react-router-dom";

/**
 * Checks if the websocket is connected to a room, if not, then redirect to join screen
 */
function ConnectedRoute( props, rest ) {
  const urlParams = new URLSearchParams(props.location?.search);

  return (
    <Route
      {...rest}
      children={() => {
        return props.connected ? (
          props.children
        ) : (
          <Redirect to={{ pathname: `/join/?roomCode=${urlParams.get("roomCode")}` }} />
        );
      }}
    />
  );
}

const mapStateToProps = (state) => {
    return state.lobby;
};

export default connect(mapStateToProps)(ConnectedRoute);
