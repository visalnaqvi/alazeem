import Link from "next/link";
import style from "../../styles/Footer.module.css"
const FooterUp = () => {

    
    return (
        <div className={`${style.footerup} flex-class`}>
        <div className={style.left}>
            <p className={style.title}>Contact Us for more information</p>
            <p className={style.text}>Our services have evolved and deploy a seamless process, which includes verification, carefully monitored application and appointment processes, 24X7 helpline, fee collection etc. to enhance the experience of every applicant.</p>
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