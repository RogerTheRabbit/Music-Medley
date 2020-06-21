import React from "react";
import "./App.css";
import NavBar from "./Lobby/NavBar";
import Lobby from "./Lobby/Lobby";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Lobby />
      </main>
    </React.Fragment>
  );
}

export default App;
