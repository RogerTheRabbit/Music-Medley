import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../../redux/lobby/lobbyActions";
import { toggleChat } from "../../redux/app/appActions";
import { MDBIcon } from 'mdbreact';
import MessageContainer from "./MessageContainer";
import { motion } from "framer-motion"
import { isMobile } from 'react-device-detect';
import "./chat.css";

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%", width: 0 },
}

function ChatContainer( props ) {

    const chatOnKeyPress = (e) => {
        if (e.keyCode === 13) {
            // TODO: Send message to server as well -- DATA STRUCTURE SUBJECT TO CHANGE
            props.addMessage({
                from: {
                    name: props.lobby?.userName,
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
            <button onClick={() => {props.toggleChat()}} className="toggle-chat-button outlined-button btn-fill-horz-open btn-rounded icon-button md z-index-10">
                <MDBIcon icon="comment-alt" />
            </button>
            <motion.div
                className={isMobile ? "mobile-chat z-index-1" : "chat"}
                animate={props.app?.chatOpen ? "open" : "closed"}
                transition={{ease:"easeOut", duration: "0.1"}}
                variants={variants}
            >
                <MessageContainer />
                {props.app?.chatOpen && <input
                    type="text"
                    label="Send message..."
                    placeholder="Send message..."
                    className="chat-input z-depth-1-half"
                    onKeyDown={chatOnKeyPress}
                />}
            </motion.div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        lobby: state.lobby,
        app: state.app
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessage) => dispatch(addMessage(newMessage)),
        toggleChat: (newMessage) => dispatch(toggleChat(newMessage)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);