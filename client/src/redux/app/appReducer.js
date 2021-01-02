import TYPES from "./appTypes";

const initialState = {
    chatOpen: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.TOGGLE_CHAT:
            return {
                ...state,
                chatOpen: !state.chatOpen,
            }
        default:
            return state
    }
}

export default reducer;
