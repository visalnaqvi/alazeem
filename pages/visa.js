import styleh from "../styles/Hero.module.css"
import style from "../styles/Visa.module.css"
import txtstyle from "../styles/Article.module.css"
const Visa = () => {
    return ( 
        <>
            <div className={`${styleh.slide} ${styleh.visa} bg-class flex-class`}>
            
            <div className={styleh.content}>
                <p className={styleh.heading}>VISA ASSISTANCE</p>
                <p className={styleh.text}>Get the best Visa assistance from AA Travels. We take care of all your needs.</p>
            </div>
            <div className={styleh.shade}></div>
        </div>
        <div className={style.note}>
            <p>For visa Assistance Call S K Gupta</p>
            <div className={style.btnHolder}>
                <div className={style.btn}>+91 9811136987</div>
                <div className={style.btn}>+91 9205184001</div>
            </div>
        </div>
        <div className={style.body}>
        <h1 className={txtstyle.articletitle}>Dubai Visa Assistance</h1>

        <p className={txtstyle.newtext}>
        Dubai is the best tourist destination in present days, we are the authorized travel agent  accredited by IATA. We proved the best visa services in best rate for 30 days tourist visa, 60 days tourist visa ,  single Entry and Multiple entry visa, INSTANT AND EXPRESS visa  also provide. We are the best travel agent in Delhi provide the Dubai visa in cheapest rate in minimum time  SHARJAH VISA ALSO AVAILABLE .
        </p>
        <br></br>
        <p className={txtstyle.newtext}>
        We are also authorized for Saudi Arabia (UAE) tourist visa for 60 days and 90 days and family visit visa, Saudi Govt also providing Business Visa also. we provide Visa for Umrah also.       
        </p>
        <br></br>
        <div className={style.table}>
            <table>
                <thead>
                    <tr>
                        <td>Visa</td>
                        <td>Pricing</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>30 Days Dubai / Sharjah Tourist Visa</td>
                        <td>6600/ Per Person</td>
                    </tr>
                    <tr className={style.odd}>
                        <td>60 Days Dubai / Sharjah Tourist Visa</td>
                        <td>12000/- Per person</td>
                    </tr>
                    <tr >
                        <td>Umrah Visa </td>
                        <td>18500/- Per Passport</td>
                    </tr>
                    <tr className={style.odd}>
                        <td>Saudi Arab Tourist Visa 30 Days</td>
                        <td>As per Applicable (Age wise)</td>
                    </tr>
                    <tr>
                        <td>Saudi Arab Tourist Visa 60 Days</td>
                        <td>As per Applicable (Age wise)</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h1 className={txtstyle.articletitle}>Turkey Visa Assistance</h1>

        <p className={txtstyle.newtext}>
        Turkey is one of the most beautiful tourist countries in the world where tourists come from everywhere. We are authorized agent for the turkey tourist visa. turkey is also called Turkiye.  For best services rates for please contact with us
        </p>
        <br></br>
        <h1 className={txtstyle.articletitle}>Thailand Visa Assistance</h1>

        <p className={txtstyle.newtext}>
        Thailand is hottest tourist places from many years. Thailand provide visa on arrival also in 2000 Baht. But from India for tourist visa its is cheaper in 4000/ per person including service charges. We are the best travel agent in Delhi provide instant visa.
        </p>
        <br></br>
        <p className={txtstyle.newtext}>
        We are also giving visa services and documents assistance for UK visa, Schengen Visa, US Visa, and other counties. visa polices and these countries change on regularly basis. Normally UK visa take 2 minimum 2 months for granting visa.     
        </p>
        </div>
        <br></br>
        <br></br>
        </>
     );
}
 
export default Visa;