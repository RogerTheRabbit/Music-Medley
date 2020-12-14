import React from "react";
import Message from "./Message";

export default function MessageContainer() {
    const messages = [];

    // For testing -- Delete later and use actual data instead
    let x;
    const goTo = Math.floor(Math.random() * 50);
    for (x = 0; x < goTo; x++) {
        messages.push({
            from: {
                name: `${x + 1}th User`,
                profilePicture: "https://picsum.photos/50",
            },
            timeStamp: 123,
            message: "Message that's super long and requires some css to make sure it works properly hopefully",
        });
    }

    return (
        <div className="message-container">
            {messages.map((message, idx) => {
                return <Message message={message} key={idx} />;
            })}
        </div>
    );
}
