import React from "react";
import "./participant.css";

export default function Participant({ participant, ...rest }) {
    return (
        <div {...rest} className="participant ease-transition">
            <img className="z-depth-1" src={participant.profilePicture} alt="Profile" />
            <p>{participant.name}</p>
        </div>
    );
}
