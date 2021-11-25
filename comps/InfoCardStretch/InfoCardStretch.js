import Image from "next/image";
import style from "../../styles/InfoCardStretch.module.css"
const InfoCardStretch = ({img , heading , text , alt}) => {
    return ( 
        <div className={`${style.infocardstretch} flex-class`}>
           <div className={style.infocard}>
                <h3 className={style.infocardtitle}>{heading}</h3>
                <p className={style.infocardtext}>
                    {text}
                </p>
            </div>

           <div className={style.image} ><Image src={ img } alt={alt} /></div>
        </div>
     );
}
 
export default InfoCardStretch;