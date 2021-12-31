import {
    Calendar,
    FileText,
    Film,
    Home,
    MoreHorizontal,
    Sunset,
    User,
    Users
} from '../icons/Icons'

const navs = [
    { icon: <Home />, label: "Home" },
    { icon: <Users />, label: "My Account" },
    { icon: <Calendar />, label: "My Schedule" },
    { icon: <Film />, label: "Interactive Visual" },
    { icon: <FileText />, label: "Survey Contacts" },
    { icon: <User />, label: "Account Plan" },
    { icon: <Sunset />, label: "Events" },
    { icon: <MoreHorizontal />, label: "More" }
]

export default function BottomNavigation() {
    return (
        <div className="bn-container">
            {
                navs.map(e => (
                    <span key={e.label} className="bn-nav">
                        {e.icon}
                        <span>{e.label}</span>
                    </span>
                ))
            }
        </div>
    )
}