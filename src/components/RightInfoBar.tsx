import { HelpCircle, RefreshCW } from '../icons/Icons'

export default function RightInfoBar() {
    return (
        <div className="rib-child">
            <div className="rib-container">
                <div className="rib-acts">
                    <div><div className="rib-arr-up" /><span style={{ color: '#5a8e18', fontWeight: 700, fontSize: '4vh', width: '100%', display: 'flex', justifyContent: 'center' }}>5</span></div>
                    <div><div className="rib-arr-down" /><span style={{ color: '#c00000', fontWeight: 700, fontSize: '4vh', width: '100%', display: 'flex', justifyContent: 'center' }}>3</span></div>
                </div>
                <div className="rib-detail">
                    <span>Sync:</span><br />
                    <div className="rib-btn-container">
                        <div className="fullwidth">
                            <div className='rib-date'>12/31/2020</div>
                            <span className="rib-ico"><RefreshCW /></span>
                            <span className="rib-ico"><HelpCircle /></span>
                        </div>
                        <img className="rib-img" src="logo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}