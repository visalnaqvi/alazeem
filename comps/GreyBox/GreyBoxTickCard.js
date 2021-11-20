import Check from "../../public/icons/check.png"
import Image  from "next/image";
import style from "../../styles/GreyBox.module.css"
const CheckCard = ({heading, text}) => {
    return (  
    
    <div className="check-card">
        <div  className={`${style.wrap} flex-class`}>
           <div className={style.check}><Image src={Check} alt="Check Tick Icon" /></div>
           <div className={`${style.checkcardheading}`}>{heading}</div>
        </div>
        <p className={style.checkcardtext}>
            {text}
        </p>
  </div>);
}
 
export default CheckCard;