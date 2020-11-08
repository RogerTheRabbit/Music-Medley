import TYPES from "./playerTypes";

export const togglePlaying = () => {
    return {
        type: TYPES.TOGGLE_PLAYING,
    }
}

export const setAudioLevel = (newLevel) => {
    return {
        type: TYPES.SET_AUDIO_LEVEL,
        data: {
            newLevel
        }
    }
}

export const setProgress = (progress) => {
    return {
        type: TYPES.SET_PROGRESS,
        data: {
            progress
        }
    }
}

export const setSong = (url) => {
    return {
        type: TYPES.SET_SONG,
        data: {
            url
        }
    }
}

export const setReady = (ready) => {
    return {
        type: TYPES.SET_READY,
        data: {
            ready
        }
    }
}
