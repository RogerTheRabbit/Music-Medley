import React from "react";
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
            <h3>{"Room Name (not mvp?)"}</h3>
            {"Room Owner"}
            {"Room Code"}
            {"Room Password"}
            <p>Queue Length: {123.45}</p>
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
