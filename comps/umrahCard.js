import style from "../styles/umrahCard.module.css";
import tick from "../public/icons/check.png";
import Image from "next/image";
import close from "../public/icons/close_big.svg";
const UmrahCard = ({packh}) => {
    var final = [];
    var tags = packh.Tags
    var hotels = packh.Hotels  
    var flightnum = packh.Flights
    var len = flightnum.length
    var dd = packh.DD
    var dp = packh.Departure
    var at = packh.Arrival
    for (let i = 0; i < len; i++) {
          var f = []
          f.push(flightnum[i]);
          f.push(dd[i]);
          f.push(dp[i]);
          f.push(at[i]);
          final.push(f);
      }
    return ( 
        <>
        <div className={style.wrapper}>
            <div className={style.top}>
                <h1 className={style.heading}>{packh.Title}</h1>
                <ul className={style.ul}>
                {tags.map((tag)=>(
                    <li key={Math.random()}>
                        <div className={style.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>{tag}</p>
                    </li>
            ))}
                    
                </ul>
            </div>
            <div className={style.middle}>
                <div className={style.left}>
                    <p className={style.heading2}>Makkah Hotel</p>
                    <p className={style.text}>{hotels[0]}</p>
                </div>
                <div className={style.left}>
                    <p className={style.heading2}>Madina Hotel</p>
                    <p className={style.text}>{hotels[1]}</p>
                </div>
            </div>
            <div className={style.bottom}>
                <p className={style.semiBold}>At just ₹ {packh.Price}/-</p>
                <button onClick={()=>{
                    document.getElementById(`${packh.id}`).style.top = "0%";
                    document.getElementById(`${packh.id}`).style.display = "flex";
                }} className={style.btn}>View Flight Details</button>
            </div>
        </div>
        <div id={packh.id} className={`${style.flightOneWrap} flOne`}>
        <div
          className={style.close}
          onClick={() => {
            document.getElementById(`${packh.id}`).style.top =
              "-200%";
              document.getElementById(`${packh.id}`).style.display =
              "none"
              
          }}
        >
          <Image width={70} height={70} src={close} alt="a"></Image>
        </div>
        <div className={style.flightOne}>
          <table border="0" style={{ border: "none" }}>
            <thead className={style.tableHead}>
              <tr>
              <td className={style.cell}>Flight Number</td>
                <td className={style.cell}>Date & Destination</td>
                <td className={style.cell}>Departure</td>
                <td className={style.cell}>Arrival</td>
               
              </tr>
            </thead>
            {final.map((tag)=>(
                    <tr key={Math.random()}>
                    <td className={style.cell}>{tag[0]}</td>
                    <td className={style.cell}>{tag[1]}</td>
                    <td className={style.cell}>{tag[2]}</td>
                    <td className={style.cell}>{tag[3]}</td>
                  </tr>
            ))}
          </table>
        </div>
      </div>
      </>
     );
}
 
export default UmrahCard;