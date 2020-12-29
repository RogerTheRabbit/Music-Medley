import TYPES from "./lobbyTypes";

export const resetLobby = () => {
    return {
        type: TYPES.RESET_LOBBY,
    }
}

export const addMessage = (newMessage) => {
    return {
        type: TYPES.ADD_MESSAGE,
        data: {
            newMessage
        }
    }
}

export const addSong = (newSong) => {
    return {
        type: TYPES.ADD_SONG,
        data: {
            newSong
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

export const setConnected = (connected) => {
    return {
        type: TYPES.SET_USERNAME,
        data: {
            connected
        }
    }
}
