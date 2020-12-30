import React from "react";
import { motion } from "framer-motion"
import "./participant.css";

export default function Participant({ participant, ...rest }) {
    return (
        <motion.div
            {...rest} 
            className="participant"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ ease: "easeIn", duration: 0.1 }}
        >
            <img className="z-depth-1" src={participant.profilePicture} alt="Profile" width="40px" height="40px"/>
            <p>{participant.userName}</p>
        </motion.div>
    );
}
