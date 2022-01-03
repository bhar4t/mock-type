import { SWITCH_CHART } from "./chartActionTypes"


const overallChartData = [
    {
      "title": "Need More Data",
      "Tier 1": 182,
      "Tier 2": 199,
      "Tier 3": 139,
      "Blank": 109,
    },
    {
      "title": "Not Ready",
      "Tier 1": 160,
      "Tier 2": 106,
      "Tier 3": 119,
      "Blank": 40,
    },
    {
      "title": "Ready With Gaps",
      "Tier 1": 94,
      "Tier 2": 67,
      "Tier 3": 171,
      "Blank": 72,
    },
    {
      "title": "Ready Capable",
      "Tier 1": 30,
      "Tier 2": 154,
      "Tier 3": 58,
      "Blank": 44,
    },
    {
      "title": "Ready Excellent",
      "Tier 1": 116,
      "Tier 2": 44,
      "Tier 3": 126,
      "Blank": 143,
    }
  ]

  const priorityChartData = [
    {
      "title": "Need More Data",
      "Tier 1": 182,
      "Tier 2": 199,
      "Tier 3": 139,
      "Blank": 109,
    },
    {
      "title": "Not Ready",
      "Tier 1": 160,
      "Tier 2": 106,
      "Tier 3": 119,
      "Blank": 40,
    },
    {
      "title": "Ready With Gaps",
      "Tier 1": 94,
      "Tier 2": 67,
      "Tier 3": 171,
      "Blank": 72,
    }
  ]

  const alertsChartData = [
    {
      "title": "Score Decreased",
      "Tier 1": 182,
      "Tier 2": 199,
      "Tier 3": 139,
      "Blank": 109,
    },
    {
      "title": "Score Increased",
      "Tier 1": 160,
      "Tier 2": 106,
      "Tier 3": 119,
      "Blank": 40,
    },
  ]


const initialState: ChartState = {
    chartData: alertsChartData,
    selectedChart: 'alerts'
}

const chartReducer = (state: ChartState = initialState, action: ChartAction) => {
    switch(action.type) {
        case SWITCH_CHART: 
            if (action.payload === 'alerts') {
                return { ...state, selectedChart: 'alerts', chartData: alertsChartData }
            } else if (action.payload === 'priority') {
                return { ...state, selectedChart: 'priority', chartData: priorityChartData }
            } else {
                return { ...state, selectedChart: 'overall', chartData: overallChartData }
            }
        default: 
            return state
    }
}

export default chartReducer