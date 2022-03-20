import { combineReducers } from "redux";
import GraphTokenReducer from "./DashboardReducers/GraphReducer";

const rootReducer = combineReducers({
  GraphTokenReducer,
});

export default rootReducer;
