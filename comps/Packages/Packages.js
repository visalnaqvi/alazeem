import PackageBody from "./PackageBody";
import style from "../../styles/PackagesHero.module.css"
const Packages = () => {

   
    return ( <>
    <div className={`${style.slide} bg-class flex-class`}>
            
            <div className={style.content}>
                <p className={style.heading}>Handcrafted Economic Packages</p>
                <p className={style.text}>Get inspired with our sample trips below. You can have any trip tailor made for your private travel. Any number of days. Any departure date. Any experience you want.</p>
            </div>
            <div className={style.shade}></div>
        </div>
        <PackageBody></PackageBody>
    </> );
}
 
export default Packages;