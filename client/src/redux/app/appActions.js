import TYPES from "./appTypes";

export const toggleChat = () => {
    return {
        type: TYPES.TOGGLE_CHAT,
    }
}

export const toggleLeftPanel = () => {
    return {
        type: TYPES.TOGGLE_LEFT_PANEL,
    }
}

export const toggleMobileControls = () => {
    return {
        type: TYPES.TOGGLE_MOBILE_CONTROLS,
    }
}
