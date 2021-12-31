import { HelpCircle, RefreshCW } from '../icons/Icons'

export default function RightInfoBar() {
    return (
        <div className="rib-child">
            <div className="rib-container">
                <div className="rib-acts">
                    <div className="rib-arr-up" />
                    <div className="rib-arr-down" />
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