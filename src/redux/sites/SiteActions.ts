import * as SiteActionTypes from './SiteActionTypes'

export function selectSite(site: Site) {
    return ({
        type: SiteActionTypes.SELECT_SITE,
        payload: site
    })
}