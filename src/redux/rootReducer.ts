import { combineReducers } from "redux";
import siteReducer from "./sites/SiteReducer";
import activityReducer from "./activities/ActivityReducer";
import priorityReducer from "./priorities/PriorityReducer";
import configReducer from './configs/configReducer'

const rootReducer = combineReducers({
    site: siteReducer,
    activity: activityReducer,
    priority: priorityReducer,
    config: configReducer
})

export default rootReducer