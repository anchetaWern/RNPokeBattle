import { combineReducers } from "redux";
import TeamReducer from "./TeamReducer";
import BattleReducer from "./BattleReducer";

export default combineReducers({
  team_selection: TeamReducer,
  battle: BattleReducer
});
