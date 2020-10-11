import { PLAY, PAUSE, SET_AUDIO_LEVEL } from "./playerTypes";

const initalState = {
    url: 'https://www.youtube.com/watch?v=dyRsYk0LyA8',
    playing: true,
    controls: true,
    light: null,
    volume: 0.05,
    muted: false,
    loop: false,
    // played: null,
    // loaded: null,
    // duration: null,
    playbackRate: null,
    pip: false,
}


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case PLAY:
            console.log("PLAY RECIEVED")
            return {
                ...state,
                playing: true
            }
        case PAUSE:
            console.log("PAUSE RECIEVED")
            return {
                ...state,
                playing: false
            }
        case SET_AUDIO_LEVEL:
            console.log("SET AUDIO LEVEL RECIEVED", action)
            return {
                ...state,
                volume: action.data.newLevel
            }
        default:
            return state
    }
}

export default reducer;
