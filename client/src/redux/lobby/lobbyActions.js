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
