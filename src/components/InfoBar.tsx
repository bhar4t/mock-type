import RightInfoBar from './RightInfoBar'
import LeftInfoBar from './LeftInfoBar'

export default function InfoBar() {
    return (
        <div className="ib-container">
            <LeftInfoBar />
            <RightInfoBar />
        </div>
    )
}