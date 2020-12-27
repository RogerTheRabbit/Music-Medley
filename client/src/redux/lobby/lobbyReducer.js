import TYPES from "./lobbyTypes";

const initialState = {
    userName: "",
    messages: [],
    connected: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.data.newMessage]
            }
        case TYPES.SET_USERNAME:
            return {
                ...state,
                userName: action.data.userName
            }
        case TYPES.SET_CONNECTED:
            return {
                ...state,
                connected: action.data.connected
            }
        case TYPES.RESET_LOBBY:
            return Object.assign({}, initialState);
        default:
            return state
    }
}

export default reducer;
