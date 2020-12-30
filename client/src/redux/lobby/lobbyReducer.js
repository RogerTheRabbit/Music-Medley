import TYPES from "./lobbyTypes";

const initialState = {
    userName: "",
    messages: [],
    songs: [],
    participants: {},
    connected: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.data.newMessage]
            }
        case TYPES.ADD_SONG:
            return {
                ...state,
                songs: [...state.songs, action.data.newSong]
            }
        case TYPES.ADD_PARTICIPANT:
            return {
                ...state,
                participants: {...state.participants, [action.data.newParticipant.id]: action.data.newParticipant}
            }
        case TYPES.REMOVE_PARTICIPANT:
            const newParticipants = Object.assign({}, state.participants);
            delete newParticipants[action.data.participantId];
            return {
                ...state,
                participants: newParticipants
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