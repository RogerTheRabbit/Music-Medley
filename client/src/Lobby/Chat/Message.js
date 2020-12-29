import React from "react";
import { formatTime } from "../../utils/utils";
import { motion } from "framer-motion"

export default function Message({ message }) {
    return (
        <motion.div
            className="chat-message"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ ease: "easeIn", duration: 0.1 }}
        >
            <img src={message.from.profilePicture} className={"z-depth-1"} alt="Profile" width="40px" height="40px"/>
            <div>
                <div className="message-info">
                    <div className="message-from">{message.from.name}</div>
                    <div className="message-timestamp">{formatTime(message.timeStamp)}</div>
                </div>
                <div className="message-text">{message.message}</div>
            </div>
        </motion.div>
    );
}
