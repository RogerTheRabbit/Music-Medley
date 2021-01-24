import React from 'react';
import { connect } from "react-redux";
import Search from './Search/Search';
import { MDBIcon } from 'mdbreact';
import { toggleChat, toggleLeftPanel } from '../redux/app/appActions';
import { isMobile } from 'react-device-detect';

function CenterNav(props) {
    return (
        <div>
            <Search/>
            { isMobile && <button onClick={() => {props.toggleLeftPanel()}} className="outlined-button btn-fill-horz-open btn-rounded icon-button md z-index-10">
                <MDBIcon icon="comment-alt" />
            </button> }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleChat: () => dispatch(toggleChat()),
        toggleLeftPanel: () => dispatch(toggleLeftPanel()),
    };
};

export default connect(null, mapDispatchToProps)(CenterNav);
