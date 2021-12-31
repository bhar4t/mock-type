interface Menu {
    value: string,
    label: string
}

type ConfigState = {
    menus: Menu[]
    selectedMenu: Menu
}

type ConfigAction = {
    type: string
    payload: Menu | Menu[]
}

type DispatchConfigAction = (args: ConfigAction) => ConfigAction