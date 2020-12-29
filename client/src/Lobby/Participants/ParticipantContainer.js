import React from "react";
import { connect } from "react-redux";
import { addParticipant, removeParticipant } from "../../redux/lobby/lobbyActions";
import Participant from "./Participant";
import "./participant.css";

function ParticipantContainer(props) {

    const addMockParticipant = () => {
        const id = Object.keys(props.participants).length;
        props.addParticipant({id: id, name: `User ${id}`, profilePicture: "https://picsum.photos/50"})
    }

    // This function is totally unreadable, but I think it's kinda cool and it's just for testing and should be deleted when networking starts working sooo...
    const removeRandomMockParticipant = () => {
        (Object.keys(props.participants).length) && props.removeParticipant(Object.keys(props.participants)[Math.trunc(Math.random() * Object.keys(props.participants).length)])
    }

    return (
        <div className="participant-container thin-scroll-bar">
            <button onClick={()=>{addMockParticipant()}}>Add Participant</button>
            <button onClick={()=>{removeRandomMockParticipant()}}>Remove Participant</button>
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
