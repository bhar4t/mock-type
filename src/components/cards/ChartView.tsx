import BarChart from '../BarChart'

export default function ChartView() {
    return (
        <div className="cv-container">
            <div className="cv-btn-container">
                <button className="cv-btn cv-btn-selected" title="Alerts">Alerts</button>
                <button className="cv-btn" title="Priority">Priority</button>
                <button className="cv-btn" title="Overall Readiness">Overall Readiness</button>
            </div>
            <BarChart />
        </div>
    )
}