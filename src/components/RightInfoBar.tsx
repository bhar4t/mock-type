import { HelpCircle, RefreshCW } from '../icons/Icons'

export default function RightInfoBar() {
    return (
        <div style={{ display: 'flex', justifyContent: 'normal', alignItems: 'center', height: '100%', width: '100%' }}>
            <div style={{ flex: 2, borderRight: 'solid #d5d4d6 1px', height: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <div className="rib-arr-up" />
                <div className="rib-arr-down" />
            </div>
            <div style={{ flex: 1, height: '100%', padding: '2px 4px' }}>
                <span>Sync:</span><br />
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <div style={{ width: '100%' }}>
                        <div style={{ color: '#e95b5a', textDecoration: 'underline' }}>12/31/2020</div>
                        <span style={{ opacity: 0.5, padding: '6px 12px' }}><RefreshCW /></span>
                        <span style={{ opacity: 0.5, padding: '6px 12px' }}><HelpCircle /></span>
                    </div>
                    <img src="logo.png" style={{ height: 'auto', width: '4vw', padding: '0px 4px' }} alt="" />
                </div>
            </div>
        </div>
    )
}