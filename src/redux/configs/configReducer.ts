import { SELECT_MENU } from "./configActionTypes"

const initialState: ConfigState = {
    menus: [
        {
            value: 'myView',
            label: "MyView",
        },
        {
            value: 'classic',
            label: "Classic",
        },
        {
            value: 'accountPlan',
            label: "Account Plan",
        },
        {
            value: 'dmSuitReport',
            label: "DM Suit Report",
        },
        {
            value: 'htmlRedirect',
            label: "HTML Redirect",
        },
    ],
    selectedMenu: {
        value: 'myView',
        label: "MyView",
    }
}

const configReducer = (state: ConfigState = initialState, action: ConfigAction) => {
    switch(action.type) {
        case SELECT_MENU: 
            return {
                ...state,
                selectedMenu: action.payload
            }
        default: 
            return state
    }
}

export default configReducer