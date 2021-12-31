import { SELECT_MENU } from './configActionTypes'

const selectMenu = (menu: Menu): ConfigAction => ({
    type: SELECT_MENU,
    payload: menu
})

export {
    selectMenu
}