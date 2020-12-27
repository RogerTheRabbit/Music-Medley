import React, { useState } from "react";
import { connect } from "react-redux";
import { setUsername } from "../redux/lobby/lobbyActions";
import "./HomeScreen.css";
import logo from "../resource/Whale_Vector.svg";

import { MDBCardBody, MDBAnimation, MDBCard } from "mdbreact";
import { Link } from "react-router-dom";

const formComponents = {
  MAIN_PAGE: "Main Page",
  JOIN_PAGE: "Join Page",
  CREATE_PAGE: "Create Page",
};

function HomeScreen(props) {
  let urlParams = new URLSearchParams(props.location?.search);

    const [currentFormComponent, setCurrentFormComponent] = useState(urlParams.get("roomCode") ? formComponents.JOIN_PAGE : formComponents.MAIN_PAGE);
    const [roomCode, setRoomCode] = useState(urlParams.get("roomCode") || "");
    const [roomPassword, setRoomPassword] = useState("");

  const handleJoinPage = () => {
      setCurrentFormComponent(formComponents.JOIN_PAGE);
  };

  const handleCreatePage = () => {
      setCurrentFormComponent(formComponents.CREATE_PAGE);
  };

  const handleMainPage = () => {
      setCurrentFormComponent(formComponents.MAIN_PAGE);
  };

  const roomURL = `/room/?roomCode=${roomCode}`;

  const renderForm = () => {

    switch (currentFormComponent) {
      case formComponents.MAIN_PAGE:
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

      case formComponents.JOIN_PAGE:
        return (
          <form>
            <p className="h1 text-center py-4 login-header">JOIN ROOM</p>
            <div className="d-flex justify-content-around flex-column align-content-center align-items-center flex-grow-1">
              <input
                type="text"
                label="Username"
                placeholder="Username"
                className="z-depth-1-half"
                value={props.userName}
                onChange={(e) => props.setUsername(e.target.value)}
              />
              <input
                type="text"
                label="Room Code"
                placeholder="Room Code"
                className="z-depth-1-half"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
              />
              <input
                type="password"
                label="Room Password"
                placeholder="Room Password (optional)"
                className="z-depth-1-half"
                onChange={(e) => setRoomPassword(e.target.value)}
              />
            </div>
            <div className="login-button-group py-4 mt-3">
              <button className="outlined-button btn-fill-horz-open btn-rounded" onClick={() => handleMainPage()}>
                Go Back
              </button>
              <Link to={roomURL}>
                <button className="outlined-button btn-fill-horz-open btn-rounded">Enter</button>
              </Link>
            </div>
          </form>
        );

      case formComponents.CREATE_PAGE:
        return (
          <form>
            <p className="h1 text-center py-4 login-header">CREATE ROOM</p>
            <div className="d-flex justify-content-around flex-column align-content-center align-items-center flex-grow-1">
              <input
                type="text"
                label="Username"
                placeholder="Username"
                className="z-depth-1-half"
                value={props.userName}
                onChange={(e) => props.setUsername(e.target.value)}
              />
              <input
                type="password"
                label="Room Password"
                placeholder="Room Password (optional)"
                className="z-depth-1-half"
                onChange={(e) => setRoomPassword(e.target.value)}
              />
            </div>
            <div className="login-button-group py-4 mt-3">
              <button className="outlined-button btn-fill-horz-open btn-rounded" onClick={() => handleMainPage()}>
                Go Back
              </button>
              <br />
              <Link to={roomURL}>
                <button className="outlined-button btn-fill-horz-open btn-rounded">Enter</button>
              </Link>
            </div>
          </form>
        );

      default:
        return <React.Fragment></React.Fragment>;
    }
  }

  return (
    <div className="heavy-rain-gradient d-flex justify-content-center flex-container">
      <MDBCard className="login-card align-self-center">
        <MDBCardBody className="aqua-gradient login-card-body">
          <img src={logo} className="login-image" alt="TODO: CHANGE ME TO WHATEVER THE ACTUAL THING IS LATER" />
          {renderForm()}
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

const mapStateToProps = (state) => {
    return state.lobby;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (userName) => dispatch(setUsername(userName)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
