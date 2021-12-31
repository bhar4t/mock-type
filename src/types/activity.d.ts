interface Activity {
    date: string
    name: string
    indicator: string
    type: string
    tier: string
    link: string
}

type ActivityState = {
    activities: Activity[]
    headers: string[]
    keys: string[]
}

type ActivityAction = {
    type: string
    payload: Activity | Activity[]
}

type DispatchActivity = (args: ActivityAction) => ActivityAction