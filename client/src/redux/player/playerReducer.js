import TYPES from "./playerTypes";

const initalState = {
    ready: false,
    playing: false,
    controls: true,
    light: null,
    volume: 0.05,
    muted: false,
    loop: false,
    // played: null,
    // loaded: null,
    playbackRate: 1.00,     // Min=0.25, Max=2.00 default=1.00
    pip: false,
    progress: 0,
    duration: 0,
    songs: [],
    songIndex: 0,
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        
        case TYPES.SET_PROGRESS:
            return {
                ...state,
                progress: action.data.progress
            };
        case TYPES.TOGGLE_PLAYING:
            console.log("TOGGLE PLAYING RECIEVED", !state.playing)
            return {
                ...state,
                playing: !state.playing
            };
        case TYPES.SET_PLAYING:
            console.log("SET PLAYING RECEIVED", action.data.playingStatus);
            return {
                ...state,
                playing: action.data.playingStatus,
            };
        case TYPES.SET_DURATION:
            console.log("SET DURATION RECIEVED", action.data.duration);
            return {
                ...state,
                duration: action.data.duration,
            };
        case TYPES.SET_SONG:
            console.log("SET_SONG RECIEVED", action.data.url)
            return {
                ...state,
                url: action.data.url
            };
        case TYPES.SET_AUDIO_LEVEL:
            console.log("SET AUDIO LEVEL RECIEVED", action)
            return {
                ...state,
                volume: action.data.newLevel
            };
        case TYPES.SET_READY:
            console.log("SET READY RECIEVED", action)
            return {
                ...state,
                ready: action.data.ready
            };
        case TYPES.ADD_SONG:
            return {
                ...state,
                songs: [...state.songs, action.data.newSong]
            };
        case TYPES.SET_PLAYER:
            return {
                ...state,
                songs: action.data.room?.queue || []
            }
        default:
            return state
    }
}

export default reducer;
