import { useSelector } from 'react-redux'
import CustomTable from './CustomTable'

export default function Activities() {
    const title = "Activities Next 7 Days"
    const activities = useSelector<ActivityState, ActivityState['activities']>((state: any) => state.activity.activities)
    const headers = useSelector<ActivityState, ActivityState['headers']>((state: any) => state.activity.headers)
    const keys = useSelector<ActivityState, ActivityState['keys']>((state: any) => state.activity.keys)

    return (
        <CustomTable data={activities} title={title} headers={headers} keys={keys} />
    )  
}