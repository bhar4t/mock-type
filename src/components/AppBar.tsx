import { useDispatch } from 'react-redux'
import { selectMenu } from '../redux/configs/configAction'

interface AppBarProps {
    menus: Menu[]
    selectedMenu: Menu
}

export default function AppBar({ menus, selectedMenu }: AppBarProps): JSX.Element {
    const dispatch = useDispatch<DispatchConfigType>()
    const clickHandler = (menu: Menu) => dispatch(selectMenu(menu))

    return (
        <div className="ab-container">
            {menus.map(({value, label}: Menu) =>
                <span
                    key={value}
                    onClick={(evt: any) => clickHandler({value, label})}
                    className={`ab-menu${value === selectedMenu.value ? '-selected' : ''}`}
                >
                    {label}
                </span>)}
        </div>
    )
}