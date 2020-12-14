import React from "react";
import MessageContainer from "./MessageContainer";
import "./chat.css";

export default function ChatContainer() {
    return (
        <div className="chat">
            <MessageContainer />
            <input
                type="text"
                label="Send message..."
                placeholder="Send message..."
                className="chat-input z-depth-1-half"
                onChange={(e) => console.log(e.target.value)}
            />
        </div>
    );
}
