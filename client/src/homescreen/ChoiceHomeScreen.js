import React, { Component } from "react";
import { connect } from "react-redux";
import { setPage } from "../redux/appActions";
import "./HomeScreen.css";
import Constants from "../Constants";
import logo from "../resource/Whale_Vector.svg";

import { MDBCardBody, MDBAnimation, MDBCard } from "mdbreact";

class choiceHomeScreen extends Component {
  state = { currentFormComponent: "Main Page" };
  //Make the state handlers for buttons

  renderForm() {
    // This function should send a network call to the server to join a room
    // and something else should run this setPage command.
    const enterRoom = () => {
      this.props.setPage(Constants.LOBBY_SCREEN);
    };

    const handleJoinPage = () => {
      this.setState((state) => ({
        currentFormComponent: "Join Page",
      }));
    };

    const handleCreatePage = () => {
      this.setState((state) => ({
        currentFormComponent: "Create Page",
      }));
    };

    const handleMainPage = () => {
      this.setState((state) => ({
        currentFormComponent: "Main Page",
      }));
    };

    switch (this.state.currentFormComponent) {
      case "Main Page":
        return (
          <form>
            <MDBAnimation type="zoomIn" reveal>
              <p className="h1 text-center py-4 login-header">MUSIC MEDLEY</p>
            </MDBAnimation>
            <div className="main-login-options">
              <button className="outlined-button btn-fill-horz-open btn-rounded" onClick={() => handleJoinPage()}>
                JOIN ROOM
              </button>
              <br />
              <h4 className="no-margins">OR</h4>
              <br />
              <button className="outlined-button btn-fill-horz-open btn-rounded" onClick={() => handleCreatePage()}>
                CREATE ROOM
              </button>
            </div>
          </form>
        );

      case "Join Page":
        return (
          <form>
            <p className="h1 text-center py-4 login-header">JOIN ROOM</p>
            <div className="d-flex justify-content-around flex-column align-content-center align-items-center flex-grow-1">
              <input type="text" label="Username" placeholder="Username" className="z-depth-1-half" />
              <input type="text" label="Room Code" placeholder="Room Code" className="z-depth-1-half" />
              <input
                type="password"
                label="Room Password"
                placeholder="Room Password (optional)"
                className="z-depth-1-half"
              />
            </div>
            <div className="login-button-group py-4 mt-3">
              <button className="outlined-button btn-fill-horz-open btn-rounded" onClick={() => handleMainPage()}>
                Go Back
              </button>
              <button className="outlined-button btn-fill-horz-open btn-rounded" onClick={() => enterRoom()}>
                Enter
              </button>
            </div>
          </form>
        );

      case "Create Page":
        return (
          <form>
            <p className="h1 text-center py-4 login-header">CREATE ROOM</p>
            <div className="d-flex justify-content-around flex-column align-content-center align-items-center flex-grow-1">
              <input type="text" label="Username" placeholder="Username" className="z-depth-1-half" />
              <input
                type="password"
                label="Room Password"
                placeholder="Room Password (optional)"
                className="z-depth-1-half"
              />
            </div>
            <div className="login-button-group py-4 mt-3">
              <button className="outlined-button btn-fill-horz-open btn-rounded" onClick={() => handleMainPage()}>
                Go Back
              </button>
              <br />
              <button className="outlined-button btn-fill-horz-open btn-rounded" onClick={() => enterRoom()}>
                Enter
              </button>
            </div>
          </form>
        );

      default:
        return <React.Fragment></React.Fragment>;
    }
  }

  render() {
    return (
      // heavy-rain-gradient
      <div className="heavy-rain-gradient d-flex justify-content-center flex-container">
        <MDBCard className="login-card align-self-center">
          <MDBCardBody className="aqua-gradient login-card-body">
            <img src={logo} className="login-image" alt="TODO: CHANGE ME TO WHATEVER THE ACTUAL THING IS LATER" />
            {this.renderForm()}
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (newPage) => dispatch(setPage(newPage)),
  };
};

export default connect(null, mapDispatchToProps)(choiceHomeScreen);
