import React from "react";
import { formatTime } from "../../utils/utils";

export default function Message({ message }) {
    return (
        <div className="chat-message">
            <img src={message.from.profilePicture} className={"z-depth-1"} alt="Profile" />
            <div>
                <div className="message-info">
                    <div className="message-from">{message.from.name}</div>
                    <div className="message-timestamp">{formatTime(message.timeStamp)}</div>
                </div>
                <div className="message-text">{message.message}</div>
            </div>
        </div>
    );
}
