import CheckCard from "./GreyBoxTickCard";
import Image from "next/image";
import style from "../../styles/GreyBox.module.css"
import PopUp from "../../public/images/pop-up.jpeg"
const GreyBoxIn = () => {
    return ( 
    
        <div className={`${style.greyboxcard} flex-class wrap`}>
<div className={style.greyboximg}>
                <Image src={PopUp} alt="Trip to Saudi Arabia via Kathmandu" /></div>
                <div className={`${style.content} flex-class column`}>
                  <CheckCard heading={[<h2 className={style.checkcardheading} key="1">Hotel Booking</h2>]} text="All hotel booking from day 1 till the last will be taken cared by us."></CheckCard>
                  <br />
                  <CheckCard heading={[<h2 className={style.checkcardheading} key="1">Corporate Travel</h2>]} text="The best travelling options will be choosed on the bases of comfort and efficiency."></CheckCard>
                  <br />
                  <CheckCard heading={[<h2 className={style.checkcardheading} key="1">Visa & Passport assistance</h2>]} text="We will asste you to get your passport and visa cleard."></CheckCard>
                  <br />
                  <CheckCard heading={[<h2 className={style.checkcardheading} key="1">Kathmandu PCR Test</h2>]} text="Everyone will have to take PCR test at Kathmandu."></CheckCard>
                  <br />
                  <CheckCard heading="Breakfast , Lunch , Dinner" text="We will take care of all your meals."></CheckCard>
                  <br />
                  <CheckCard heading="Economic Price" text="All these services and many more at just Rs. 70,000/- per person"></CheckCard>
              
                </div>

            </div>
           
     );
}
 
export default GreyBoxIn;