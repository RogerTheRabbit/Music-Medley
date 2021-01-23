import React from 'react'
import { connect } from "react-redux";
import RoomInfo from "./Room Info/RoomInfo";
import ParticipantContainer from "./Participants/ParticipantContainer";
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%", width: 0 },
}

function LeftPanel( props ) {
    return (
        <motion.div 
            className={isMobile ? "mobile-left-panel" : "left-panel-container"}
            animate={props.app?.leftPanelOpen ? "open" : "closed"}
            transition={{ease:"easeOut", duration: "0.1"}}
            variants={variants}
        >
            <RoomInfo />
            <ParticipantContainer />
        </motion.div>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    };
};

export default connect(mapStateToProps)(LeftPanel);