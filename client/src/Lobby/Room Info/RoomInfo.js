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
            <p>Queue Length: {123.45}</p>
            <MDBPopover placement="right" popover clickable domElement>
                <button className="outlined-button btn-fill-horz-open btn-rounded icon-button">
                    <MDBIcon icon="key" />
                </button>
                <div>
                    <MDBPopoverBody>Password: {"Room Password"}</MDBPopoverBody>
                </div>
            </MDBPopover>
            <div className="room-buttons">
                <button onClick={() => shareFunction()} className="outlined-button blue btn-fill-horz-open btn-rounded">
                    SHARE
                </button>
                <button onClick={() => leaveFunction()} className="outlined-button red btn-fill-horz-open btn-rounded">
                    LEAVE
                </button>
            </div>
        </div>
    );
}
