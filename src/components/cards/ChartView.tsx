import React from 'react';
import BarChart from '../BarChart'

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

export default function ChartView() {
    const [selectedChart, setSelectedChart] = React.useState("alerts");
    const [chartData, setBarData] = React.useState(alertsChartData)
    const clickHandler = (chartType: "alerts" |  "priority" | "overall") => {
        if (chartType === "alerts") {
            setBarData(alertsChartData)
        } else if (chartType === "priority") {
            setBarData(priorityChartData)
        } else {
            setBarData(overallChartData)
        }
        setSelectedChart(chartType)
    }

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