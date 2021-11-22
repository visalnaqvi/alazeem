import Check from "../../public/icons/check.png"
import Link from "next/link"
import Image from "next/image";
import style from "../../styles/Package.module.css"
const Card = ({packh}) => {
    console.log(packh.link)
    return ( 
      
        <div className={`${style.packagecard} flex-class`}>
            <div className="top">
                <p className={style.packagecardtitle}>Rs. {packh.price} /-</p>
                <div className="gray">Per head</div>
                <h2 className={style.username}>{packh.title}</h2>
                <div className="package-card-text">
                    <div className={`${style.start} flex-class`}>
                        <div className={style.check}><Image  src={Check} alt="check tick icon"/></div>
                        <div className={style.left}><p>{packh.f1}</p></div>
                    </div>
                    <div className={`${style.start} flex-class`}>
                        <div className={style.check}><Image  src={Check} alt="check tick icon"/></div>
                        <div className={style.left}><p>{packh.f2}</p></div>
                    </div>
                    <div className={`${style.start} flex-class`}>
                        <div className={style.check}><Image  src={Check} alt="check tick icon"/></div>
                        <div className={style.left}><p>{packh.f3}</p></div>
                    </div>
                    <div className={`${style.start} flex-class`}>
                        <div className={style.check}><Image  src={Check} alt="check tick icon"/></div>
                        <div className={style.left}><p>{packh.f4}</p></div>
                    </div>
                </div>
            </div>
           <Link href={`${packh.link}`}><a><button className={style.button}>Learn More</button></a></Link>
        </div>
     );
}
 
export default Card;