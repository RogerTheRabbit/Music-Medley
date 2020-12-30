import React from "react";
import { connect } from "react-redux";
import { addParticipant, removeParticipant } from "../../redux/lobby/lobbyActions";
import Participant from "./Participant";
import "./participant.css";

function ParticipantContainer(props) {

    return (
        <div className="participant-container thin-scroll-bar">
            {Object.keys(props.participants).map((participantId, idx) => {
                return <Participant key={idx} participant={props.participants[participantId]} />;
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return state.lobby;
};

const mapDispatchToProps = (dispatch) => {
    return {
        addParticipant: (newParticipant) => dispatch(addParticipant(newParticipant)),
        removeParticipant: (participantId) => dispatch(removeParticipant(participantId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantContainer);
