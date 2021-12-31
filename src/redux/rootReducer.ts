import { combineReducers } from "redux";
import siteReducer from "./sites/SiteReducer";
import activityReducer from "./activities/ActivityReducer";
import priorityReducer from "./priorities/PriorityReducer";

const rootReducer = combineReducers({
    site: siteReducer,
    activity: activityReducer,
    priority: priorityReducer
})

export default rootReducer