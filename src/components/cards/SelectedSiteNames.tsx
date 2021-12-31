import { ResponsiveBar } from '@nivo/bar'
import { ArrowRight, ArrowUp } from "../../icons/Icons";

const data = [
    {
      "country": "AD",
      "hot dog": 180,
      "hot dogColor": "hsl(92, 70%, 50%)",
      "burger": 68,
      "burgerColor": "hsl(245, 70%, 50%)",
      "sandwich": 10,
      "sandwichColor": "hsl(114, 70%, 50%)",
      "kebab": 176,
      "kebabColor": "hsl(281, 70%, 50%)"
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
                    data={data}
                    keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
                    indexBy="country"
                    margin={{ top: 10, right: 130, bottom: 25, left: 60 }}
                    padding={0.3}
                    layout="horizontal"
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'nivo' }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom',
                            direction: 'row',
                            justify: true,
                            translateX: 0,
                            translateY: 36,
                            itemsSpacing: 6,
                            itemWidth: 64,
                            itemHeight: 10,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 8,
                        }
                    ]}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    axisTop={null}
                    axisRight={null}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
                />
            </div>
            <div className="ssn-footer">
                Site Readiness Last Changed By: {selectedSite?.updatedBy || 'None'}
            </div>
        </div>
    )
}