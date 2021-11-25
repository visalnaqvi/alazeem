import style from "../../styles/InfoCard.module.css"
import Image from "next/image";
const InfoCards = ({img , heading , text , alt }) => {
    return (
        <>
         <div className={`${style.infocardwrap} flex-class`}>
      <div className={style.infocard}>
        <h3 className={style.infocardtitle}>{ heading }</h3>
        <p className={style.infocardtext}>
          { text }
        </p>
        <br />
      </div>
      <div className={style.image}><Image src={img} alt={alt}/></div>    </div>
    </>
   );
}
 
export default InfoCards;