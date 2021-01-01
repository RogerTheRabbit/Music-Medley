import React, { useContext } from "react";
import { connect } from "react-redux";
import { setRoom } from "../../redux/lobby/lobbyActions";
import { WebSocketContext } from '../../networking/networking';
import { MDBPopover, MDBPopoverBody, MDBIcon } from "mdbreact";
import "./roominfo.css";

function RoomInfo( props ) {

    const networking = useContext(WebSocketContext)
    
    const shareRoom = () => {
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

    const leaveRoom = () => {
        console.log("LEAVING LOBBY");
        networking.resetConnection();
        props.setRoom(null);
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
                <button onClick={() => shareRoom()} className="outlined-button blue btn-fill-horz-open btn-rounded icon-button-md">
                    <MDBIcon icon="share-alt" />
                </button>
                <button onClick={() => leaveRoom()} className="outlined-button red btn-fill-horz-open btn-rounded icon-button-md">
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
        setRoom: (room) => dispatch(setRoom(room)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomInfo);
