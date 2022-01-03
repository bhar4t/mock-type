import {
    SWITCH_CHART
} from './chartActionTypes'

const switchChart = (chartType: any) => ({
    type: SWITCH_CHART,
    payload: chartType
})

export {
    switchChart
}