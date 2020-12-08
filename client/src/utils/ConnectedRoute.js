import React from "react";

import { Redirect, Route } from "react-router-dom";

/**
 * Checks if the websocket is connected to a room, if not, then redirect to join screen
 */
export default function ConnectedRoute({ children, location, ...rest }) {
  const somethingThatChecksIsConnected = true; // This will obviously need to be changed later when the networking stuff is implemented
  const urlParams = new URLSearchParams(location?.search);

  return (
    <Route
      {...rest}
      children={() => {
        return somethingThatChecksIsConnected ? (
          children
        ) : (
          <Redirect to={{ pathname: `/join/?roomCode=${urlParams.get("roomCode")}` }} />
        );
      }}
    />
  );
}
