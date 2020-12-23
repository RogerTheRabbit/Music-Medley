import React from "react";
import MessageContainer from "./MessageContainer";
import "./chat.css";

export default function ChatContainer() {

    const chatOnKeyPress = (e) => {
        console.log(e.keyCode);
        if (e.keyCode === 13) {
            console.log("Chat message to send:", e.target.value);
        }
    }

    return (
        <div className="chat">
            <MessageContainer />
            <input
                type="text"
                label="Send message..."
                placeholder="Send message..."
                className="chat-input z-depth-1-half"
                onKeyDown={chatOnKeyPress}
            />
        </div>
    );
}
