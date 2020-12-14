import React from "react";
import Participant from "./Participant";
import "./participant.css";

export default function ParticipantContainer() {
    const participants = [
        {
            name: "First User",
            profilePicture: "https://picsum.photos/50",
        },
        {
            name: "Second User",
            profilePicture: "https://picsum.photos/50",
        },
        {
            name: "Third User",
            profilePicture: "https://picsum.photos/50",
        },
        {
            name: "Fourth User",
            profilePicture: "https://picsum.photos/50",
        },
        {
            name: "Fifth User",
            profilePicture: "https://picsum.photos/50",
        },
        {
            name: "Sixth User",
            profilePicture: "https://picsum.photos/50",
        },
    ];

    return (
        <div className="participant-container">
            {participants.map((participant, idx) => {
                return <Participant key={idx} participant={participant} />;
            })}
        </div>
    );
}
