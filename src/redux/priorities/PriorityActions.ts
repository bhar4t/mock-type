import { LOAD_PRIORITIES } from './PriorityActionTypes'

const loadPriorities = (priorities: Priority[]): PriorityAction => ({
    type: LOAD_PRIORITIES,
    payload: priorities
})

export {
    loadPriorities
}