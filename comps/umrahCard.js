import style from "../styles/umrahCard.module.css";
import tick from "../public/icons/check.png";
import Image from "next/image";
const UmrahCard = ({heading,pricing,styl}) => {
    return ( 
        <div className={style.wrapper}>
            <div className={style.top}>
                <h1 className={style.heading}>{heading}</h1>
                <ul className={style.ul}>
                    <li>
                        <div className={style.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>Hotel 4/5/6 Bed Sharing</p>
                    </li>
                    <li>
                        <div className={style.img}>
                        <Image src={tick} alt="tick icon"></Image></div>
                        <p>All Meals and Laudary</p>
                    </li>
                    <li>
                        <div className={style.img}>
                        <Image src={tick} alt="tick icon"></Image></div>
                        <p>Air Ticket and Visa</p>
                    </li>
                    <li>
                        <div className={style.img}>
                        <Image src={tick} alt="tick icon"></Image></div>
                        <p>Insurance and Ziyarat</p>
                    </li>
                    <li>
                        <div className={style.img}>
                        <Image src={tick} alt="tick icon"></Image></div>
                        <p>Round Trip Transport</p>
                    </li>
                </ul>
            </div>
            <div className={style.middle}>
                <div className={style.left}>
                    <p className={style.heading2}>Makkah Hotel</p>
                    <p className={style.text}>Al Sundus/ similar 600 mtr.</p>
                </div>
                <div className={style.left}>
                    <p className={style.heading2}>Madina Hotel</p>
                    <p className={style.text}>Rehab Al Safwa/ Similar 500 mtr.</p>
                </div>
            </div>
            <div className={style.bottom}>
                <p className={style.semiBold}>At just ₹ {pricing}/-</p>
                <button onClick={()=>{
                    document.querySelector(`.${styl.flightOneWrap}`).style.top = "-100%";
                }} className={style.btn}>View Flight Details</button>
            </div>
        </div>
     );
}
 
export default UmrahCard;