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
            name: "Sixth User with a really really really long name for some reason that we should probably put a limit on...",
            profilePicture: "https://picsum.photos/50",
        },
    ];

    return (
        <div className="participant-container thin-scroll-bar">
            {participants.map((participant, idx) => {
                return <Participant key={idx} participant={participant} />;
            })}
        </div>
    );
}
