import React, {useState} from "react";
import { connect } from "react-redux";
import { addMessage } from "../../redux/lobby/lobbyActions";
import MessageContainer from "./MessageContainer";import { motion } from "framer-motion"
import "./chat.css";

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%", width: 0 },
}

function ChatContainer( props ) {

    const [isOpen, setIsOpen] = useState(true)

    const chatOnKeyPress = (e) => {
        if (e.keyCode === 13) {
            // TODO: Send message to server as well -- DATA STRUCTURE SUBJECT TO CHANGE
            props.addMessage({
                from: {
                    name: props.userName,
                    profilePicture: "https://picsum.photos/50",
                },
                timeStamp: new Date(),
                message: e.target.value,
            });
            e.target.value = "";
        }
    }

    return (
        <>
            <button onClick={() => {setIsOpen(!isOpen)}}>Toggle chat</button>
            <motion.div 
                className="chat"
                animate={isOpen ? "open" : "closed"}
                variants={variants}
            >
                <MessageContainer />
                <input
                    type="text"
                    label="Send message..."
                    placeholder="Send message..."
                    className="chat-input z-depth-1-half"
                    onKeyDown={chatOnKeyPress}
                />
            </motion.div>
        </>
    );
}

const mapStateToProps = (state) => {
    return state.lobby;
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessage) => dispatch(addMessage(newMessage)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);