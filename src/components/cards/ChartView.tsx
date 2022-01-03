import { useDispatch, useSelector } from 'react-redux';
import BarChart from '../BarChart'
import { switchChart } from '../../redux/charts/chartActions'

export default function ChartView() {
    const dispatch = useDispatch<dispatchChartType>()
    const selectedChart = useSelector<ChartState, ChartState["selectedChart"]>((state: any) => state.chart.selectedChart)
    const chartData = useSelector<ChartState, ChartState["chartData"]>((state: any) => state.chart.chartData)

    const clickHandler = (chartType: "alerts" |  "priority" | "overall") => dispatch(switchChart(chartType))

    return (
        <div className="cv-container">
            <div className="cv-btn-container">
                <button onClick={evt => clickHandler('alerts')} className={`cv-btn ${selectedChart === "alerts" ? 'cv-btn-selected' : ''}`} title="Alerts">Alerts</button>
                <button onClick={evt => clickHandler('priority')} className={`cv-btn ${selectedChart === "priority" ? 'cv-btn-selected' : ''}`} title="Priority">Priority</button>
                <button onClick={evt => clickHandler('overall')} className={`cv-btn ${selectedChart === "overall" ? 'cv-btn-selected' : ''}`} title="Overall Readiness">Overall Readiness</button>
            </div>
            <BarChart data={chartData} />
        </div>
    )
}