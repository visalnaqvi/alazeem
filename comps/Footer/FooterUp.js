import Link from "next/link";
import fs from "../../styles/Footer.module.css"
const FooterUp = () => {

    
    return (
        <div style={{borderRadius:"10px",backgroundColor:"#00665A"}} className={`${fs.footerup} flex-class`}>
        <div className={fs.left}>
            <p className={fs.title}>Contact Us for more information</p>
            <p className={fs.text}>Planning for Umrah? Book your umrah package with us as we provide the highest-quality Umrah packages from India at amazingly reasonable prices, ensuring that all of your travel needs are met to your satisfaction.</p>
            <p className={fs.text} style={{marginTop:"10px",letterSpacing:"1px",fontSize:"1.2rem"}}><strong>Email:  aatravels1170@gmail.com</strong></p>
        </div>
        <div className={`${fs.right} flex-class`}>
        <div>
        <a href="tel:+919205184001"><div className={`${fs.button} ${fs.ftUmrah}`}>
        +919205184001
        </div></a>
        <a href="tel:+919811042458"><div className={`${fs.button} ${fs.ftUmrah}`}>
        +919811042458 
        </div></a>
        </div>
        </div>
    </div>
    );
}
 
export default FooterUp;