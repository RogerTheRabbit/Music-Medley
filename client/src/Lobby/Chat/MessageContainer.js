import React from "react";
import { connect } from "react-redux";
import Message from "./Message";

function MessageContainer( props ) {

    return (
        <div className="message-container">
            {props.messages.map((message, idx) => {
                return <Message message={message} key={idx} />;
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return state.lobby;
};

export default connect(mapStateToProps)(MessageContainer);
