import { combineReducers } from 'redux';
import playerReducer from './player/playerReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
    player: playerReducer,
    app: appReducer,
});

export default rootReducer;
