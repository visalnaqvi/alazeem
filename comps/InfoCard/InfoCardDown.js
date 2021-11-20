import style from "../../styles/InfoCard.module.css"
import Image from "next/image";
const InfoCardsDown = ({img , heading , text , alt}) => {
    return (
        <>
         <div className={`${style.infocardwrap} ${style.down} wrap flex-class`}>
         <div className={style.image}><Image src={img} alt={alt}/></div>

      <div className={style.infocard}>
        <h1 className={style.infocardtitle}>{ heading }</h1>
        <p className={style.infocardtext}>
          { text }
        </p>
        <br />
      </div>
     
    </div>
    </>
   );
}
 
export default InfoCardsDown;