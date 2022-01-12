interface Site {
    id: number
    name: string
    tier: string
    angle: string
    score: number
    eduScore: number
    estaScore: number
    link: string
    updatedBy: string
}

type SitesState = {
    sites: Site[]
    site: Site | null
}

type SiteAction = {
    type: string
    payload: Site
}

type DispatchSiteType = (args: SiteAction) => SiteAction