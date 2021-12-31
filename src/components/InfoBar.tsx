import RightInfoBar from './RightInfoBar'

export default function InfoBar() {
    return (
        <div className="ib-container">
            <div className="ib-child ib-left"></div>
            <div className="ib-child">
                <RightInfoBar />
            </div>
        </div>
    )
}