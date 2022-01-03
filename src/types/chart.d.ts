interface Bar {
    "title": string
    "Tier 1": number
    "Tier 2": number
    "Tier 3": number
    "Blank": number
}

type ChartState = {
    chartData: Bar[]
    selectedChart: "alerts" |  "priority" | "overall"
}

type ChartAction = {
    type: string
    payload: string | Bar | Bar[]
}

type dispatchChartType = (args: ChartAction) => ChartAction