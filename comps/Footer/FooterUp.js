import Link from "next/link";
import style from "../../styles/Footer.module.css"
const FooterUp = () => {

    
    return (
        <div className={`${style.footerup} flex-class`}>
        <div className={style.left}>
            <p className={style.title}>Contact Us for more information</p>
            <p className={style.text}>Planning for Umrah? Book your umrah package with us as we provide the highest-quality Umrah packages from India at amazingly reasonable prices, ensuring that all of your travel needs are met to your satisfaction.</p>
        </div>
        <div className={`${style.right} flex-class`}>
        <Link href="/contactus">
        <a><button className={style.button} onClick={()=>{
            window.scrollTo(0,0);
        }}>
            CONTACT US
        </button></a>
        </Link>
        </div>
    </div> 
    );
}
 
export default FooterUp;