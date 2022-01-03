import { HelpCircle, RefreshCW } from '../icons/Icons'

export default function RightInfoBar() {
    return (
        <div className="rib-child">
            <div className="rib-container">
                <div className="rib-acts">
                    <div>
                        <div className="rib-arr-up" />
                        <span className='rib-count rib-green'>5</span>
                    </div>
                    <div>
                        <div className="rib-arr-down" />
                        <span className='rib-count rib-red'>3</span>
                    </div>
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