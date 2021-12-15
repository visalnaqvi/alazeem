import Check from "../../public/icons/check.png"
import Link from "next/link";
import Image from "next/image";
import style from "../../styles/Package.module.css";
import img from "../../public/images/cities/shimla.jpg"
const Card = ({packh}) => {
    console.log(packh.link)
    return ( 
      <Link href={`${packh.link}`}><a>
        <div className={`${style.packagecard} flex-class`}>
            
                
                <img className={style.imgwrap} src={packh.image} alt="img"></img>
            
                <div className={style.top}>
            <h2 className={style.title}>{packh.title}</h2>
            <p className={style.tag}>Includes Meals, Flights, Accommodation, Transfer, Sightseeing</p>
            <div className={style.price}> <p>Strating at just Rs.{packh.price}/-
               Per head</p></div>

                {/* <div className="package-card-text">
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
                </div> */}
           {/* <Link href={`${packh.link}`}><a><button className={style.button}>Learn More</button></a></Link> */}
           </div>
        </div>
        </a>
        </Link>
     );
}
 
export default Card;