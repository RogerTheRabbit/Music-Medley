import React from "react";
import { connect } from "react-redux";
import { setConnected, resetLobby } from "../../redux/lobby/lobbyActions";
import { MDBPopover, MDBPopoverBody, MDBIcon } from "mdbreact";
import "./roominfo.css";

function RoomInfo( props ) {
    
    const shareFunction = () => {
        if(navigator.share) {
            navigator.share({
                title: "Music Medley Room",
                text: "Join room to listen to music together!",
                url: window.location.href,
            }).then(() => {
                console.log("Share successful!");
            })
        } else if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href)
                .then(()=>{
                    console.log("Share successful!");
                });
        } else {
            console.log("Failed to copy...");
        }
    };

    const leaveFunction = () => {
        console.log("RESETTING LOBBY");
        props.setConnected(false);
        props.resetLobby();
    };

    return (
        <div>
            {/* <h3>
                {"Room Name"} <button className="outlined-button btn-fill-horz-open btn-rounded icon-button"><MDBIcon icon="edit" onClick={() => editRoomName()} /></button>
            </h3> */}
            {/* <p>Queue Length: {123.45}</p> */}
            <div className="room-buttons">
                <MDBPopover placement="top" popover clickable domElement>
                    <button className="outlined-button btn-fill-horz-open btn-rounded icon-button-md">
                        <MDBIcon icon="key" />
                    </button>
                    <div>
                        <MDBPopoverBody>Password: {"Room Password"}</MDBPopoverBody>
                    </div>
                </MDBPopover>
                <button onClick={() => shareFunction()} className="outlined-button blue btn-fill-horz-open btn-rounded icon-button-md">
                    <MDBIcon icon="share-alt" />
                </button>
                <button onClick={() => leaveFunction()} className="outlined-button red btn-fill-horz-open btn-rounded icon-button-md">
                    <MDBIcon icon="sign-out-alt" />
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state.lobby;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setConnected: (connected) => dispatch(setConnected(connected)),
        resetLobby: () => dispatch(resetLobby()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomInfo);
