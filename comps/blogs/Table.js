import style from "../../styles/Blog.module.css"
import Link from "next/dist/client/link";
const Table = ({content}) => {
    return ( 
        <div className={style.tablewrap}>
        <table className={`${style.p} ${style.table}`}>
            <tr className={style.tr}>
              <th className={style.th}>Package Name</th>
              <th className={style.th}>Price<br></br>(per head)</th>
              <th className={style.th}>Nights</th>
              <th className={style.th}>Facilities</th>
              <th className={style.th}></th>
            </tr>
            {
              content.map((pack)=>(
                <tr key={pack.key} className={style.tr}>
                <td className={style.td}>{pack.title}</td>
                <td className={style.td}>{pack.price}</td>
                <td className={style.td}>{pack.nights}</td>
                <td className={style.td}>{pack.facilities}</td>
                <td className={style.td}>
                  {/* <Link href={`${pack.link}`}><a>
                  <button className={style.button}>
                    View Details
                  </button>
                  </a>
                  </Link> */}
                  <p className={style.contactHead}>CONTACT AT</p>
                  <p className={style.contactnum}>9811136987</p>
                </td>

              </tr>
              ))
            }
           
           
        </table>
        </div>
     );
}
 
export default Table;