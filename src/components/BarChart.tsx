import { ResponsiveBar } from '@nivo/bar'

const MyResponsiveBar = ({ data }: any) => (
    <ResponsiveBar
        data={data}
        keys={[ 'Tier 1', 'Tier 2', 'Tier 3', 'Blank' ]}
        indexBy="title"
        margin={{ top: 10, right: 90, bottom: 30, left: 100 }}
        padding={0.5}
        enableLabel={false}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={[ "var(--barColor1)","var(--barColor2)","var(--barColor3)" ,"var(--barColor4)" ]}
        theme= {{
          textColor: 'var(--textColor)',
          axis: {
            domain: {
              line: {
                stroke: "var(--stroke)",
                strokeWidth: 1
              }
            }
          },
        }}
        isInteractive={false}
        enableGridY={false}
        enableGridX={false}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 0
        }}
        legends={[
          {
              dataFrom: 'keys',
              anchor: 'right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 7
          }
      ]}
    />
)

export default MyResponsiveBar;