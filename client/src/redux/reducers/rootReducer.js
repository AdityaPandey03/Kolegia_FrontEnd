import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import BuySellReducer from "./BuySellReducer";
import { projectReducer } from "./projectReducer";
import LostFoundReducer  from "./LostFoundReducer"
import RequirementReducer from "./RequirementReducer";
const rootReducer = combineReducers({
  auth: AuthReducer,
  project: projectReducer,
  buySell: BuySellReducer,
  lostFound: LostFoundReducer,
  requirement:RequirementReducer
});
export default rootReducer;
