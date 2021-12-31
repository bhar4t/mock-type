import { ResponsiveBar } from '@nivo/bar'

const barData = [
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

const MyResponsiveBar = ({ data = barData }) => (
    <ResponsiveBar
        data={data}
        keys={[ 'Tier 1', 'Tier 2', 'Tier 3', 'Blank' ]}
        indexBy="country"
        margin={{ top: 10, right: 100, bottom: 20, left: 50 }}
        padding={0.3}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'green_blue' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                // color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                // color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        // fill={[
        //     {
        //         match: {
        //             id: 'fries'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'sandwich'
        //         },
        //         id: 'lines'
        //     }
        // ]}
        // borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        // axisBottom={{
        //     tickSize: 5,
        //     tickPadding: 5,
        //     tickRotation: 0,
        //     legend: 'country',
        //     legendPosition: 'middle',
        //     legendOffset: 32
        // }}
        // axisLeft={{
        //     tickSize: 5,
        //     tickPadding: 5,
        //     tickRotation: 0,
        //     legend: 'food',
        //     legendPosition: 'middle',
        //     legendOffset: -40
        // }}
        // labelSkipWidth={12}
        // labelSkipHeight={12}
        // labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        // legends={[
        //     {
        //         dataFrom: 'keys',
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 120,
        //         translateY: 0,
        //         itemsSpacing: 2,
        //         itemWidth: 100,
        //         itemHeight: 20,
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 0.85,
        //         symbolSize: 20,
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
        // role="application"
        // ariaLabel="Nivo bar chart demo"
        // barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
)

export default MyResponsiveBar;