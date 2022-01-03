import { ResponsiveBar } from '@nivo/bar'
import { ArrowRight, ArrowUp } from "../../icons/Icons";

const data = [
    {
      "country": "1",
      "File": 4,
      "Email": 2,
      "Phone": 1,
      "Planned": 2,
    }
]

interface SelectedSiteNamesProp {
    selectedSite: Site
}

export default function SelectedSiteNames({ selectedSite }: SelectedSiteNamesProp): JSX.Element {
    return (
        <div className="ssn-container">
            <div className="ssn-titlebar">
                <span className="ssn-title">{selectedSite?.name || "Site Not Selected"}</span>
                <div className="ssn-score-container">
                    <div className="ssn-score-left">Advanced</div>
                    <div className="ssn-score-right">
                        <span className="ssn-score-title">Score | EDU Score | ESTA Score</span>
                        <span className="ssn-score">
                            {selectedSite?.score}{selectedSite?.angle === 'right' ? <ArrowRight /> : <ArrowUp /> } &nbsp;&nbsp;
                            {selectedSite?.eduScore}{selectedSite?.angle === 'right' ? <ArrowRight /> : <ArrowUp /> } &nbsp;&nbsp;
                            {selectedSite?.estaScore}{selectedSite?.angle === 'right' ? <ArrowRight /> : <ArrowUp /> } &nbsp;&nbsp;
                            HCPS w/ HCP
                        </span>
                    </div>
                </div>
            </div>
            <div className="ssn-chart">
                <ResponsiveBar
                    data={selectedSite?.name === "Site Not Selected" ? [] : data}
                    keys={[ 'File', 'Email', 'Phone', 'Planned' ]}
                    indexBy="country"
                    margin={{ top: 10, right: 130, bottom: 38, left: 60 }}
                    padding={0.3}
                    layout="horizontal"
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    enableLabel={false}
                    isInteractive={false}
                    colors={[
                        "#4371c4","#ed7d31","#a4a4a4", '#d7d1d1'
                      ]}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom',
                            direction: 'row',
                            justify: true,
                            translateX: 0,
                            translateY: 36,
                            itemsSpacing: 2,
                            itemWidth: 64,
                            itemHeight: 8,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.9,
                            symbolSize: 5,
                        }
                    ]}
                    defs={[
                        {
                            "id": "lines",
                            "type": "patternLines",
                            "spacing": 5,
                            "rotation": 27,
                            "lineWidth": 2,
                            "background": "#ffffff",
                            "color": "#d7d1d1"
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'Planned'
                            },
                            id: 'lines'
                        }
                    ]}
                    axisTop={null}
                    axisRight={null}
                />
            </div>
            <div className="ssn-footer">
                Site Readiness Last Changed By: {selectedSite?.updatedBy || 'None'}
            </div>
        </div>
    )
}