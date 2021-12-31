
const menus = [
    "MyView",
    "Classic",
    "Account Plan",
    "DM Suit Report",
    "HTML Redirect",
]

export default function AppBar() {
    return (
        <div className="ab-container">
            {menus.map(e => <span key={e} className="ab-menu">{e}</span>)}
        </div>
    )
}