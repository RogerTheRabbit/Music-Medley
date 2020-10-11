import TYPES from "./playerTypes";

export const togglePlaying = () => {
    console.log("TOGGLEPLAYING Recieved");
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
