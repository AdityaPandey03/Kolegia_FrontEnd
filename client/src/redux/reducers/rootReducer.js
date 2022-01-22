import { combineReducers } from "redux";
import authReducer from "./authReducer";
import BuySellReducer from "./BuySellReducer";
import { projectReducer } from "./projectReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  buySell: BuySellReducer,
});
export default rootReducer;
