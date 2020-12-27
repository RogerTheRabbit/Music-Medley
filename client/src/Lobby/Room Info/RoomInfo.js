import React from "react";
import { MDBPopover, MDBPopoverBody, MDBIcon } from "mdbreact";
import "./roominfo.css";

export default function RoomInfo() {
    const shareFunction = () => {
        console.log("SHARE ROOM");
    };
    const leaveFunction = () => {
        console.log("LEAVE ROOM");
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
