import { useSelector } from 'react-redux'
import Activities from './cards/Activities'
import Priorities from './cards/Priorities'
import ChartView from './cards/ChartView'
import SiteNames from './cards/SiteNames'
import SelectedSiteNames from './cards/SelectedSiteNames'

export default function CardContainer() {
    const sites = useSelector<SitesState, SitesState['sites']>((state: any) => state.site.sites);
    const selectedSite = useSelector<SitesState, SitesState['site']>((state: any) => state.site.site)

    return (
        <div className="cc-container">
            <div className="cc-child">
                <Activities />
                <Priorities />
            </div>
            <div className="cc-child">
                <ChartView />
                <SiteNames sites={sites} selectedSite={selectedSite} />
                <SelectedSiteNames selectedSite={selectedSite}/>
            </div>
        </div>
    )
}