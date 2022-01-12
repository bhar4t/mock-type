import * as SiteActionTypes from './SiteActionTypes'

const initialState: SitesState = {
    sites: [
        {
            id: 1,
            name: "ADVANCED NEUROLOGY SPECIALITS",
            tier: "",
            angle: "right",
            score: 3.25,
            eduScore: 3.25,
            estaScore: 3.25,
            link: "https://example.com",
            updatedBy: "Adam Matthew"
        },
        {
            id: 2,
            name: "ASANTE ROGUE REGIONAL MEDICAL CENTER",
            tier: "",
            angle: "up",
            score: 3.00,
            eduScore: 3.00,
            estaScore: 3.00,
            link: "https://example.com",
            updatedBy: "Matthew"
        },
        {
            id: 3,
            name: "Green Laurence E MO Office",
            tier: "",
            angle: "up",
            score: 2.87,
            eduScore: 2.87,
            estaScore: 2.87,
            link: "https://example.com",
            updatedBy: "John Doe"
        },
        {
            id: 4,
            name: "Idaho Falls Neurological",
            tier: "",
            angle: "right",
            score: 2.38,
            eduScore: 2.38,
            estaScore: 2.38,
            link: "https://example.com",
            updatedBy: "Adam Hobbs"
        },
        {
            id: 5,
            name: "Layton Aging And Alzheimers Disease Center",
            tier: "Tier 1",
            angle: "right",
            score: 3.00,
            eduScore: 3.00,
            estaScore: 3.00,
            link: "https://example.com",
            updatedBy: "Shaw Matthew"
        },
        {
            id: 6,
            name: "Legacy Good Samartan Medical Center",
            tier: "",
            angle: "up",
            score: 3.50,
            eduScore: 3.50,
            estaScore: 3.50,
            link: "https://example.com",
            updatedBy: "John Carter"
        },
    ],
    site: null
}

const siteReducer = (state: SitesState = initialState, action: SiteAction) => {
    switch(action.type) {
        case SiteActionTypes.SELECT_SITE: 
            return {
                ...state,
                site: action.payload
            }
        default: return state;
    }
}

export default siteReducer