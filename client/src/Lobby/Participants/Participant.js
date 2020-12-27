import React from "react";
import "./participant.css";

export default function Participant({ participant, ...rest }) {
    return (
        <div {...rest} className="participant">
            <img className="z-depth-1" src={participant.profilePicture} alt="Profile" width="40px" height="40px"/>
            <p>{participant.name}</p>
        </div>
    );
}
