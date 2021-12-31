import { useDispatch } from 'react-redux'
import { ArrowRight, ArrowUp, Link } from "../../icons/Icons"
import { selectSite } from '../../redux/sites/SiteActions';

interface SiteNamesProp {
    sites: Site[]
    selectedSite: Site
}

export default function SiteNames({ sites, selectedSite }: SiteNamesProp) {
    const dispatch = useDispatch<DispatchSiteType>()
    const clickHandler = (site: any) => dispatch(selectSite(site));

    return (
        <div className="sn-container">
            <table className="sn-table">
                <thead>
                    <tr className="sn-htr">
                        {["Site Name", "Medical Tier", "Score", "EDU Score", "ESTA Score", "Link"]
                            .map((e, i, self) => <td key={e} className={self.length - 1 === i ? "sn-htd" : ""}>{e}</td>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        sites.map(function (e: Site, i: any): any {
                                return (
                                    <tr key={`site-${i}`} onClick={(evt: any) => clickHandler(e)} className={`sn-btr${e === selectedSite ? '-selected' : ''}`}>
                                        <td className={`sn-btd${e === selectedSite ? '-selected' : ''}`}>{e.name}</td>
                                        <td className={`sn-btd${e === selectedSite ? '-selected' : ''}`}>{e.tier}</td>
                                        <td className={`sn-btd${e === selectedSite ? '-selected' : ''}`}><div className="sn-indicator">{e.score} {e.angle === 'right' ? <ArrowRight /> : <ArrowUp />}</div></td>
                                        <td className={`sn-btd${e === selectedSite ? '-selected' : ''}`}><div className="sn-indicator">{e.eduScore} {e.angle === 'right' ? <ArrowRight /> : <ArrowUp />}</div></td>
                                        <td className={`sn-btd${e === selectedSite ? '-selected' : ''}`}><div className="sn-indicator">{e.estaScore} {e.angle === 'right' ? <ArrowRight /> : <ArrowUp />}</div></td>
                                        <td className="sn-btd sn-btd-link"><Link size={10} /></td>
                                    </tr>
                                );
                            })
                    }
                </tbody>
            </table>
        </div>
    )
}