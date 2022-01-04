import { useDispatch, useSelector } from 'react-redux';
import BarChart from '../BarChart'
import { switchChart } from '../../redux/charts/chartActions'

export default function ChartView() {
    const chartType = useSelector<ChartState, ChartState["selectedChart"]>((state: any) => state.chart.selectedChart)
    const chartData = useSelector<ChartState, ChartState["chartData"]>((state: any) => state.chart.chartData)
    
    const dispatch = useDispatch<dispatchChartType>()
    const clickHandler = (e: any) => dispatch(switchChart(e.target.id))

    return (
        <div className="cv-container">
            <div className="cv-btn-container">
                <button
                    id='alerts'
                    onClick={clickHandler}
                    className={`cv-btn ${chartType === 'alerts' ? 'cv-selected' : ''}`}
                >
                    Alerts
                </button>
                <button
                    id='priority'
                    onClick={clickHandler}
                    className={`cv-btn ${chartType === 'priority' ? 'cv-selected' : ''}`}
                >
                    Priority
                </button>
                <button
                    id='overall'
                    onClick={clickHandler}
                    className={`cv-btn ${chartType === 'overall' ? 'cv-selected' : ''}`}
                >
                    Overall Readiness
                </button>
            </div>
            <BarChart data={chartData} />
        </div>
    )
}