import { useSelector } from 'react-redux'
import AppBar from '../components/AppBar'
import BottomNavigation from '../components/BottomNavigation'


export default function Layout({ children }: any) {
    const menus = useSelector<ConfigState, ConfigState['menus']>((state: any) => state.config.menus)
    const selectedMenu = useSelector<ConfigState, ConfigState['selectedMenu']>((state: any) => state.config.selectedMenu)
    
    return (
        <div className="container">
            <AppBar menus={menus} selectedMenu={selectedMenu} />
            <div className="child">
                {selectedMenu.value === 'myView' ? children : 'Under Construction, Please Wait..'}
            </div>
            <BottomNavigation />
        </div>
    )
}