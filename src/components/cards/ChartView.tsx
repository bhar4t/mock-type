import React from 'react';
import BarChart from '../BarChart'

const overallChartData = [
    {
      "country": "AD",
      "Tier 1": 182,
      "Tier 1Color": "#005b7f",
      "Tier 2": 199,
      "Tier 2Color": "#5386bf",
      "Tier 3": 139,
      "Tier 3Color": "#7cc3e2",
      "Blank": 109,
      "BlankColor": "#78be20",
    },
    {
      "country": "AE",
      "Tier 1": 160,
      "Tier 1Color": "#005b7f",
      "Tier 2": 106,
      "Tier 2Color": "#5386bf",
      "Tier 3": 119,
      "Tier 3Color": "#7cc3e2",
      "Blank": 40,
      "BlankColor": "#78be20",
    },
    {
      "country": "AF",
      "Tier 1": 94,
      "Tier 1Color": "#005b7f",
      "Tier 2": 67,
      "Tier 2Color": "#5386bf",
      "Tier 3": 171,
      "Tier 3Color": "#7cc3e2",
      "Blank": 72,
      "BlankColor": "#78be20",
    },
    {
      "country": "AG",
      "Tier 1": 30,
      "Tier 1Color": "#005b7f",
      "Tier 2": 154,
      "Tier 2Color": "#5386bf",
      "Tier 3": 58,
      "Tier 3Color": "#7cc3e2",
      "Blank": 44,
      "BlankColor": "#78be20",
    },
    {
      "country": "AI",
      "Tier 1": 116,
      "Tier 1Color": "#005b7f",
      "Tier 2": 44,
      "Tier 2Color": "#5386bf",
      "Tier 3": 126,
      "Tier 3Color": "#7cc3e2",
      "Blank": 143,
      "BlankColor": "#78be20",
    }
  ]

  const priorityChartData = [
    {
      "country": "AD",
      "Tier 1": 182,
      "Tier 1Color": "#005b7f",
      "Tier 2": 199,
      "Tier 2Color": "#5386bf",
      "Tier 3": 139,
      "Tier 3Color": "#7cc3e2",
      "Blank": 109,
      "BlankColor": "#78be20",
    },
    {
      "country": "AE",
      "Tier 1": 160,
      "Tier 1Color": "#005b7f",
      "Tier 2": 106,
      "Tier 2Color": "#5386bf",
      "Tier 3": 119,
      "Tier 3Color": "#7cc3e2",
      "Blank": 40,
      "BlankColor": "#78be20",
    },
    {
      "country": "AF",
      "Tier 1": 94,
      "Tier 1Color": "#005b7f",
      "Tier 2": 67,
      "Tier 2Color": "#5386bf",
      "Tier 3": 171,
      "Tier 3Color": "#7cc3e2",
      "Blank": 72,
      "BlankColor": "#78be20",
    }
  ]

  const alertsChartData = [
    {
      "country": "AD",
      "Tier 1": 182,
      "Tier 1Color": "#005b7f",
      "Tier 2": 199,
      "Tier 2Color": "#5386bf",
      "Tier 3": 139,
      "Tier 3Color": "#7cc3e2",
      "Blank": 109,
      "BlankColor": "#78be20",
    },
    {
      "country": "AE",
      "Tier 1": 160,
      "Tier 1Color": "#005b7f",
      "Tier 2": 106,
      "Tier 2Color": "#5386bf",
      "Tier 3": 119,
      "Tier 3Color": "#7cc3e2",
      "Blank": 40,
      "BlankColor": "#78be20",
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