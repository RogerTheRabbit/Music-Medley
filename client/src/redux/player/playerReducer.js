import TYPES from "./playerTypes";

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
    playbackRate: null,
    pip: false,
    progress: 0,
}


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case TYPES.SET_PROGRESS:
            return {
                ...state,
                progress: action.data.progress
            }
        case TYPES.TOGGLE_PLAYING:
            console.log("TOGGLE PLAYING RECIEVED", !state.playing)
            return {
                ...state,
                playing: !state.playing
            }
        case TYPES.PLAY:
            console.log("PLAY RECIEVED")
            return {
                ...state,
                playing: true
            }
        case TYPES.PAUSE:
            console.log("PAUSE RECIEVED")
            return {
                ...state,
                playing: false
            }
        case TYPES.SET_AUDIO_LEVEL:
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
