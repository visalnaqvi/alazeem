import Check from "../../public/icons/check.png"
import Link from "next/link";
import Image from "next/image";
import iraqImg from "../../public/iraq.jpeg"
import style from "../../styles/Package.module.css";
import hajjImg from "../../public/images/umrah/1.jpg";
import baitulMuqadasImage from "../../public/BaitulMuqadas.jpeg";
const Card = () => {
    return ( 
        <>
      <Link href="/iraqZiyarat"><a>
        <div className={`${style.packagecard} flex-class`}>
            
                
                {/* <Image className={style.imgwrap} src={iraqImg} alt="img"></Image> */}
            
                <div className={style.top}>
            <h2 className={style.title}>Iraq Ziyarat Package</h2>
            <p className={style.tag}>Includes Meals, Flights, Accommodation, Transfer, Sightseeing</p>
            <div className={style.price}> <p>Strating at just Rs.90,000/-
               Per head</p></div>

              
           </div>
        </div>
        </a>
        </Link>


        <Link href="/umrahPackage"><a>
        <div className={`${style.packagecard} flex-class`}>
            
                
                {/* <Image className={style.imgwrap} src={hajjImg} alt="img"></Image> */}
            
                <div className={style.top}>
            <h2 className={style.title}>Haj/Umrah Packages</h2>
            <p className={style.tag}>Includes Meals, Flights, Accommodation, Transfer, Sightseeing</p>
            <div className={style.price}> <p>Strating at just Rs.83,000/-
               Per head</p></div>

                
           </div>
        </div>
        </a>
        </Link>

        <Link href="/baitulMuqadas"><a>
        <div className={`${style.packagecard} flex-class`}>
            
                
                {/* <Image className={style.imgwrap} src={baitulMuqadasImage} alt="img"></Image> */}
            
                <div className={style.top}>
            <h2 className={style.title}>Baitul Muqadas Packages</h2>
            <p className={style.tag}>Includes Meals, Flights, Accommodation, Transfer, Sightseeing</p>
            <div className={style.price}> <p>Strating at just Rs. 135786 /-
               Per head</p></div>

                
           </div>
        </div>
        </a>
        </Link>
        </>
     );
}
 
export default Card;