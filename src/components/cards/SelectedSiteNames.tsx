import { ResponsiveBar } from '@nivo/bar'
import { ArrowRight, ArrowUp } from "../../icons/Icons";

interface SelectedSiteNamesProp {
    selectedSite: Site | null
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
                    data={selectedSite ? [{ File: selectedSite?.score?.toFixed(0), Email: selectedSite?.eduScore?.toFixed(0), Phone: selectedSite?.estaScore?.toFixed(0), Planned: selectedSite?.estaScore?.toFixed(0), country: selectedSite?.id + ''}] : []}
                    keys={[ 'File', 'Email', 'Phone', 'Planned' ]}
                    indexBy="id"
                    margin={{ top: 10, right: 130, bottom: 38, left: 60 }}
                    padding={0.3}
                    layout="horizontal"
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    enableLabel={false}
                    isInteractive={false}
                    colors={[ "var(--barColor5)","var(--barColor6)","var(--barColor7)", "var(--barColor8)" ]}
                    theme= {{
                        textColor: "var(--barColor7)",
                    }}
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
                            id: "lines",
                            type: "patternLines",
                            spacing: 5,
                            rotation: 27,
                            lineWidth: 2,
                            background: "var(--white)",
                            color: "var(--barColor8)"
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
                    axisLeft={{ tickSize: 0 }}
                    axisBottom={{ tickSize: 0 }}
                />
            </div>
            <div className="ssn-footer">
                Site Readiness Last Changed By: {selectedSite?.updatedBy || 'None'}
            </div>
        </div>
    )
}