import TYPES from "./appTypes";
import { isMobile } from 'react-device-detect';

const initialState = {
    chatOpen: false,
    leftPanelOpen: !isMobile,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.TOGGLE_CHAT:
            return {
                ...state,
                chatOpen: !state.chatOpen,
                leftPanelOpen: false || !isMobile,
            }
            case TYPES.TOGGLE_LEFT_PANEL:
                return {
                    ...state,
                    leftPanelOpen: !state.leftPanelOpen,
                    chatOpen: false,
            }
        default:
            return state
    }
}

export default reducer;
