import { LOAD_ACTIVITIES } from './ActivityActionTypes'

const loadActivities = (activities: Activity[]): ActivityAction => ({
    type: LOAD_ACTIVITIES,
    payload: activities
})

export {
    loadActivities
}