import { combineReducers } from "redux";
import playerReducer from "./player/playerReducer";
import lobbyReducer from "./lobby/lobbyReducer";

const rootReducer = combineReducers({
  player: playerReducer,
  lobby: lobbyReducer,
});

export default rootReducer;
