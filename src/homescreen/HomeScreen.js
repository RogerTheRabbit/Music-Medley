import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import Icon from "@material-ui/core/Icon";
import "./HomeScreen.css";

class HomeScreen extends Component {
  state = {};

  render() {
    const whaleIcon = (
      <Icon>
        <img alt="sign in" src={require("../resource/Whale_Vector.svg")} />
      </Icon>
    );
    return (
      <div className="flex-container">
        <p className="title">Music Medley</p>
        <p className="user-text">What would you like to do?</p>
        <Button
          variant="contained"
          className="choice-button"
          startIcon={whaleIcon}
        >
          <p className="button-text">Join A Room</p>
        </Button>
        <Button variant="contained" className="second-choice-button">
          <p className="button-text">Create A Room</p>
        </Button>
      </div>

      // put in the first button tag
      // <input />
      // <img src="../resource/Whale_Vector.svg" />

      // <div>
      //   <title
      //     style={{"text-align:center", "font-family:'Lucida Sans Unicode'","font-size:50"}}
      //   >
      //     A Title
      //   </title>
      //   <button
      //     style="font-family:'Lucida Sans Unicode'"
      //     style="font-size:35"

      //     //TO ADD: onClick enter the page where you can create a room
      //   >
      //     <img
      //       src="../reource/Whale_Vector.svg"
      //       alt="DJ Whale"
      //       style="width:35px;height:35;"
      //     ></img>
      //     Create a Room
      //   </button>
      //   <button
      //     style="font-family:'Lucida Sans Unicode'"
      //     style="font-size:35"
      //     //TO ADD: onClick enter the page where you can join a room
      //   >
      //     Join a Room
      //   </button>
      // </div>
    );
  }
}

export default HomeScreen;
