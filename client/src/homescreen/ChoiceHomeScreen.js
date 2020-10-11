import React, { Component } from "react";
import "./HomeScreen.css";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";

class choiceHomeScreen extends Component {
  state = { currentFormComponent: "Main Page" };
  //Make the state handlers for buttons
  constructor(props) {
    super(props);

    this.handleJoinPage = this.handleJoinPage.bind(this);
    this.handleMainPage = this.handleMainPage.bind(this);
    this.handleCreatePage = this.handleCreatePage.bind(this);
  }

  handleJoinPage() {
    this.setState((state) => ({
      currentFormComponent: "Join Page",
    }));
  }

  handleCreatePage() {
    this.setState((state) => ({
      currentFormComponent: "Create Page",
    }));
  }

  handleMainPage() {
    this.setState((state) => ({
      currentFormComponent: "Main Page",
    }));
  }

  renderForm() {
    switch (this.state.currentFormComponent) {
      case "Main Page":
        return (
          <form>
            <p className="h4 text-center py-4">MUSIC MEDLEY</p>
            <div className="grey-text"></div>
            <div className="text-center py-4 mt-3">
              <MDBBtn color="cyan" onClick={this.handleJoinPage}>
                JOIN ROOM
              </MDBBtn>
              <MDBBtn color="cyan" onClick={this.handleCreatePage}>
                CREATE ROOM
              </MDBBtn>
            </div>
          </form>
        );

      case "Join Page":
        return (
          <form>
            <p className="h4 text-center py-4">Join Room</p>
            <div className="grey-text">
              <MDBInput
                label="Username"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Room Code"
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Password (optional)"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center py-4 mt-3">
              <MDBBtn color="cyan" onClick={this.handleMainPage}>
                Go Back
              </MDBBtn>
              <MDBBtn color="cyan">Enter</MDBBtn>
            </div>
          </form>
        );

      case "Create Page":
        return (
          <form>
            <p className="h4 text-center py-4">Join Room</p>
            <div className="grey-text">
              <MDBInput
                label="Username"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Password (optional)"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center py-4 mt-3">
              <MDBBtn color="cyan" onClick={this.handleMainPage}>
                Go Back
              </MDBBtn>
              <MDBBtn color="cyan">Enter</MDBBtn>
            </div>
          </form>
        );

      default:
        return <React.Fragment></React.Fragment>;
    }
  }

  render() {
    console.log(this.state.currentFormComponent);
    return (
      <div className="flex-container">
        <MDBRow>
          <MDBCol mb="9">
            <MDBCard className="login-card">
              <MDBCardBody className="content-in-card">
                {this.renderForm()}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default choiceHomeScreen;
