import { Link, Maximize } from "../../icons/Icons";

const styles = {
    headTd: (index: number) => ({
        paddingLeft: index === 0 ? 12 : 0,
        borderBottom: 'solid var(--shadow) 1px'
    }),
    btr: (zigzag: any, index: number) => ({
        color: 'var(--gray)', fontSize: 11, backgroundColor: zigzag ? index % 2 !== 0 ? "var(--background)" : "var(--white)" : "var(--white)"
    }),
    btd: (length: number, index: number, i: number) => ({
        borderBottom: length - 1 === index ? 'none' : 'solid var(--shadow) 1px',
        paddingLeft: i === 0 ? 12 : 0
    }),
    indicator: (indicator: any) => ({
        marginLeft: 6,
        height: 10,
        width: 14,
        backgroundColor: indicator
    })
}

export default function CustomTable({ data, headers, title, keys, zigzag = false }: any) {
    return (
        <div className="ct-container">
            <div className="ct-title">{title}&nbsp;<Maximize /></div>
            <table className="ct-table">
                <thead>
                    <tr className="ct-htr">
                        {headers.map((ele: any, i: any) => <td key={`th-${i}`} style={styles.headTd(i)}>{ele}</td>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele: { [x: string]: any; indicator: any; name: any; }, index: any) =>
                            <tr key={`tr-${index}`} style={styles.btr(zigzag, index)}>
                                {
                                    keys.map((e: string, i: any) => (
                                        <td key={`td-${i}`} style={styles.btd(data.length, index, i)}>
                                            {e === 'name' && ele.indicator
                                                ?
                                                    <div className="ct-data">{ele.name} <div style={styles.indicator(ele.indicator)} /> </div>
                                                :
                                                e === 'indicator' ? null :  e === 'link' ? <div onClick={(e:any) => { window.open(ele.link, '_blank') }}><Link /></div> : ele[e]
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )  
}