import style from "../styles/Hero.module.css"
const Hero = ({ img , heading , text}) => {
    return (
        <div className={`${style.slide} bg-class flex-class`} style={{backgroundImage:img}}>
            
            <div className={style.content}>
                <p className={style.heading}>{ heading }</p>
                <p className={style.text}>{ text }</p>
            </div>
            <div className={style.shade}></div>
        </div>
 );
}
 
export default Hero;