import FooterUp from "./FooterUp";
import style from "../../styles/Footer.module.css"
const Footer = () => {
    return ( <>
        <FooterUp></FooterUp> 
        <div className={style.footerbottom}>
            <p>Al-Azeem Tours and Travel 2023</p>
        </div>
    </> );
}
 
export default Footer;