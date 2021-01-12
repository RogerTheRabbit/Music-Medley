import TYPES from "./lobbyTypes";

export const addMessage = (newMessage) => {
    return {
        type: TYPES.ADD_MESSAGE,
        data: {
            newMessage
        }
    }
}

export const addParticipant = (newParticipant) => {
    return {
        type: TYPES.ADD_PARTICIPANT,
        data: {
            newParticipant
        }
    }
}

export const removeParticipant = (participantId) => {
    return {
        type: TYPES.REMOVE_PARTICIPANT,
        data: {
            participantId
        }
    }
}

export const setUsername = (userName) => {
    return {
        type: TYPES.SET_USERNAME,
        data: {
            userName
        }
    }
}

export const setRoom = (room) => {
    return {
        type: TYPES.SET_ROOM,
        data: {
            room
        }
    }
}
