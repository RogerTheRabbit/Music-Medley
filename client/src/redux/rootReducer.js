import { combineReducers } from 'redux';
import playerReducer from './player/playerReducer';

const rootReducer = combineReducers({
    player: playerReducer,
});

export default rootReducer;
