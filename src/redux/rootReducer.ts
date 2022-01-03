import { combineReducers } from "redux";
import siteReducer from "./sites/SiteReducer";
import activityReducer from "./activities/ActivityReducer";
import priorityReducer from "./priorities/PriorityReducer";
import configReducer from './configs/configReducer'
import chartReducer from './charts/chartReducer'

const rootReducer = combineReducers({
    site: siteReducer,
    activity: activityReducer,
    priority: priorityReducer,
    config: configReducer,
    chart: chartReducer
})

export default rootReducer