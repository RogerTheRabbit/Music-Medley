import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../../redux/lobby/lobbyActions";
import MessageContainer from "./MessageContainer";
import "./chat.css";

function ChatContainer( props ) {
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

const mapStateToProps = (state) => {
    return state.lobby;
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessage) => dispatch(addMessage(newMessage)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);