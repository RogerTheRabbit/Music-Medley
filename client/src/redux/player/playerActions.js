import { PAUSE, PLAY, SET_AUDIO_LEVEL } from "./playerTypes"

export const togglePlaying = (currentPlayState) => {
    const type = currentPlayState ? PAUSE : PLAY;
    console.log("TOGGLEPLAYING Recieved", currentPlayState);
    return {
        type: type,
    }
}

export const setAudioLevel = (newLevel) => {
    return {
        type: SET_AUDIO_LEVEL,
        data: {
            newLevel
        }
    }
}
