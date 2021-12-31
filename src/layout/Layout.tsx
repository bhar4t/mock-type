import AppBar from '../components/AppBar'
import BottomNavigation from '../components/BottomNavigation'


export default function Layout({ children }: any) {
    return (
        <div className="container">
            <AppBar />
            <div className="child">{children}</div>
            <BottomNavigation />
        </div>
    )
}