import InfoCards from "./InfoCard";
import Hotel from "../../public/images/services/hotel.png"
import Visa from "../../public/images/services/visa.png"
import Ticket from "../../public/images/services/ticket.png"
import Passport from "../../public/images/services/hotel.png"
import InfoCardsDown from "./InfoCardDown";
import style from "../../styles/InfoCard.module.css"
const InfoCardWrapper = () => {
    
    return ( 
        <>
            <InfoCards img={ Visa } alt="visa image" heading="Visa Facilitation" text={[<b key="1" className={style.infocardtext}>Visa Facilitation</b>," is a distinguished service at ",<b key="2" className={style.infocardtext}>AL-Azeem Tours and Travels</b>,". Other than being the preferred visa facilitation service provider in India to countries like ",<b key="3" className={style.infocardtext}>Saudi Arabia</b>," and Iraq, our patrons trust us with visa & passport application processing services as an end-to-end solution"]}></InfoCards>
            <InfoCardsDown img={ Passport } alt="passport image" heading="Passport assistance" text="We will take care of all your passport processing. Let us make it easy and efficient for you. So you can enjoy your vacation to the best."></InfoCardsDown>
            <InfoCards img={ Hotel } alt="hotel image" heading="Hotel Bookings" text={["Having a hard time to find a ",<b key="4" className={style.infocardtext}>perfect hotel for you?</b>," Leave it to us we will find the most ",<b key="5" className={style.infocardtext}>econmical and luxrious hotel</b>," for your relaxing and peaceful ",<b key="6" className={style.infocardtext}>vacation with your family.</b>]}></InfoCards>
            <InfoCardsDown img={ Ticket } alt="air plane tickets" heading="Air Ticketing" text={["We will take care of all your ",<b key="7" className={style.infocardtext}>tickets and travelling.</b>," Let it be an ",<b key="8" className={style.infocardtext}>international vacation</b>," or a domestic one. All ",<b key="9" className={style.infocardtext}>travelling tickets</b>," and costs are inculded in your packages"]}></InfoCardsDown>
        </>
     );
}
 
export default InfoCardWrapper;