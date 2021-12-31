import { useSelector } from 'react-redux'
import CustomTable from './CustomTable'

export default function Activities() {
    const title = "Priority Target HCPs"
    const priorities = useSelector<PriorityState, PriorityState['priorities']>((state: any) => state.priority.priorities)
    const headers = useSelector<PriorityState, PriorityState['headers']>((state: any) => state.priority.headers)
    const keys = useSelector<PriorityState, PriorityState['keys']>((state: any) => state.priority.keys)

    return (
        <CustomTable data={priorities} title={title} headers={headers} keys={keys} zigzag />
    )  
}