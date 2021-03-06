import TYPES from "./lobbyTypes";

const initialState = {
    userName: "",
    messages: [],
    participants: {},
    roomCode: '',
    connected: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.data.newMessage]
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
        case TYPES.SET_ROOM:
            return {
                ...state,
                messages: action.data.room?.messages || [],
                participants: action.data.room?.participants || {},
                roomCode: action.data.room?.roomCode || state.roomCode,
                connected: action.data.room?.connected || false,
            }
        default:
            return state
    }
}

export default reducer;
