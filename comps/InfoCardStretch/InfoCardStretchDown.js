import Image from "next/image";
import style from "../../styles/InfoCardStretch.module.css"
const InfoCardStretchDown = ({img , heading , text , alt}) => {
    return ( 
        <div className={`${style.infocardstretch} ${style.down} flex-class`}>
           <div className={style.image} ><Image src={ img } alt={alt} /></div>
            <div className={style.infocard}>
                <h1 className={style.infocardtitle}>{heading}</h1>
                <p className={style.infocardtext}>
                    {text}
                </p>
            </div>
        </div>
     );
}
 
export default InfoCardStretchDown;