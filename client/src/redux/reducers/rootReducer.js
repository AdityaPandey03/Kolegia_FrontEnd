import { combineReducers } from "redux";
import authReducer from "./authReducer";
import BuySellReducer from "./BuySellReducer";
import { projectReducer } from "./projectReducer";
import LostFoundReducer  from "./LostFoundReducer"
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  buySell: BuySellReducer,
  lostFound: LostFoundReducer,
});
export default rootReducer;
