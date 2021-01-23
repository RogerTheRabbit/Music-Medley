import { combineReducers } from "redux";
import playerReducer from "./player/playerReducer";
import lobbyReducer from "./lobby/lobbyReducer";
import appReducer from "./app/appReducer";

const rootReducer = combineReducers({
  player: playerReducer,
  lobby: lobbyReducer,
  app: appReducer,
});

export default rootReducer;
