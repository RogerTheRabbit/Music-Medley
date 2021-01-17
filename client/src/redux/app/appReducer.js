import TYPES from "./appTypes";
import { isMobile } from 'react-device-detect';

const initialState = {
    chatOpen: false,
    leftPanelOpen: !isMobile,
    mobileControlsOpen: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.TOGGLE_CHAT:
            return {
                ...state,
                chatOpen: !state.chatOpen,
                leftPanelOpen: false || !isMobile,
                mobileControlsOpen: false,
            }
            case TYPES.TOGGLE_LEFT_PANEL:
                return {
                    ...state,
                    leftPanelOpen: !state.leftPanelOpen,
                    chatOpen: false,
                    mobileControlsOpen: false,
            }
            case TYPES.TOGGLE_MOBILE_CONTROLS:
                return {
                    ...state,
                    mobileControlsOpen: !state.mobileControlsOpen,
                    leftPanelOpen: false || !isMobile,
                    chatOpen: false,
            }
        default:
            return state
    }
}

export default reducer;
