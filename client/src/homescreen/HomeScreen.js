import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import { setRoom, setUsername } from "../redux/lobby/lobbyActions";
import { WebSocketContext } from '../networking/networking';
import { Redirect } from "react-router-dom";
import "./HomeScreen.css";
import logo from "../resource/Whale_Vector.svg";

import { MDBCardBody, MDBAnimation, MDBCard, MDBIcon } from "mdbreact";

const formComponents = {
  MAIN: "Main",
  JOIN: "Join",
  CREATE: "Create",
};

function HomeScreen(props) {
  let urlParams = new URLSearchParams(props.location?.search);

  const [currentFormComponent, setCurrentFormComponent] = useState(urlParams.get("roomCode") ? formComponents.JOIN : formComponents.MAIN);
  let initialRoomCode = urlParams.get("roomCode") || props.room?.roomCode || "";
  const [roomCode, setRoomCode] = useState(initialRoomCode);
  const [roomPassword, setRoomPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const roomURL = `/room/?roomCode=${roomCode}`;
  const networking = useContext(WebSocketContext);

  if (props.room) {
    // TODO: See if this redirect is breaking url path history
    return <Redirect to={roomURL} />;
  }

  const handleJoinPage = () => {
      setCurrentFormComponent(formComponents.JOIN);
  };

  const handleCreatePage = () => {
      setCurrentFormComponent(formComponents.CREATE);
  };

  const handleMainPage = () => {
      setCurrentFormComponent(formComponents.MAIN);
  };

  const loadWhileConnecting = (children) => {
    return loading ? <MDBIcon icon="spinner" /> : children;
  }

  const joinRoom = () => {
    if (!props.userName){
      alert("Username cannot be empty!");
      return;
    }
    if (!roomCode){
      alert("Room Code cannot be empty!");
      return;
    }
    setLoading(true);
    networking.joinRoom(props.userName, roomCode, roomPassword);
  }

  // TODO: Make network call to actually create and join room.
  const createRoom = () => {
    if (!props.userName){
      alert("Username cannot be empty!");
      return;
    }
    
    setLoading(true);

    console.log("Creating room");
    networking.createRoom(props.userName, roomPassword);
  }

  const renderForm = () => {

    switch (currentFormComponent) {
      case formComponents.MAIN:
        return (
          <div className="login-card-body-content">
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
          </div>
        );

      case formComponents.JOIN:
        return (
          <div className="login-card-body-content">
            <p className="h1 text-center py-4 login-header">JOIN ROOM</p>
            {loadWhileConnecting(
              <>
                <div className="d-flex justify-content-around flex-column align-content-center align-items-center flex-grow-1">
                  <input
                    type="text"
                    label="Username"
                    placeholder="Username"
                    className="login-input z-depth-1-half"
                    value={props.userName}
                    onChange={(e) => props.setUsername(e.target.value)}
                  />
                  <input
                    type="text"
                    label="Room Code"
                    placeholder="Room Code"
                    className="login-input z-depth-1-half"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value)}
                    
                  />
                  <input
                    type="password"
                    label="Room Password"
                    placeholder="Room Password (optional)"
                    className="login-input z-depth-1-half"
                    onChange={(e) => setRoomPassword(e.target.value)}
                  />
                </div>
                <div className="login-button-group py-4 mt-3">
                  <button className="outlined-button btn-fill-horz-open btn-rounded" onClick={() => handleMainPage()}>
                    Back
                  </button>
                  <button onClick={()=>joinRoom()} className="outlined-button btn-fill-horz-open btn-rounded">Enter</button>
                </div>
              </>
            )}
          </div>
        );

      case formComponents.CREATE:
        return (
          <div className="login-card-body-content">
            <p className="h1 text-center py-4 login-header">CREATE ROOM</p>
            {loadWhileConnecting(
              <>
                <div className="d-flex justify-content-around flex-column align-content-center align-items-center flex-grow-1">
                  <input
                    type="text"
                    label="Username"
                    placeholder="Username"
                    className="login-input z-depth-1-half"
                    value={props.userName}
                    onChange={(e) => props.setUsername(e.target.value)}
                  />
                  <input
                    type="password"
                    label="Room Password"
                    placeholder="Room Password (optional)"
                    className="login-input z-depth-1-half"
                    onChange={(e) => setRoomPassword(e.target.value)}
                  />
                </div>
                <div className="login-button-group py-4 mt-3">
                  <button className="outlined-button btn-fill-horz-open btn-rounded" onClick={() => handleMainPage()}>
                    Back
                  </button>
                  <br />
                  <button onClick={()=>createRoom()} className="outlined-button btn-fill-horz-open btn-rounded">Enter</button>
                </div>
              </>
            )}
          </div>
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
        setRoom: (room) => dispatch(setRoom(room)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
