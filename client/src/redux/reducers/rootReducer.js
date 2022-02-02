import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import BuySellReducer from "./BuySellReducer";
import { projectReducer } from "./projectReducer";
import LostFoundReducer  from "./LostFoundReducer"
const rootReducer = combineReducers({
  auth: AuthReducer,
  project: projectReducer,
  buySell: BuySellReducer,
  lostFound: LostFoundReducer,
});
export default rootReducer;
