import Article from "../Article";
import ContactCard from "./ContactCard";
import Map from "../map";
import style from "../../styles/Contact.module.css"
import styleh from "../../styles/Hero.module.css"
const ContactUs = () => {
    return ( <>
        <div className={`${styleh.slide} ${styleh.contactus} bg-class flex-class`}>
            
            <div className={styleh.content}>
                <p className={styleh.heading}>LETS GET IN TOUCH</p>
                <p className={styleh.text}>A More Better Way To Travel.We are the one stop provider for all your travel needs and requirements</p>
            </div>
            <div className={styleh.shade}></div>
        </div>
        <Article heading="Contact Al Azeem" text="Please don't hesitate to contact us by phone or by using the form below. We are ready to address any questions or concerns you may have about our process, partners, or any issues you may be experiencing."></Article>
        <div className={`${style.cardholder} flex-class wrap`} style={{width:"100%", flexWrap:"wrap"}}>
            <ContactCard heading="Timmings" line1="Monday - Saturday" line2="10 A.M. to 7 A.M."></ContactCard>
            <ContactCard heading="Address" line1="1/53, Ist Floor,Lalita Park," line2="Laxmi Nagar, Delhi-92"></ContactCard>
            <ContactCard heading="Contact" line1="+919811042458" line2="+919811136987"></ContactCard>
        </div>
        <Map></Map>
        <br />
        <br />
        <br />
    </> );
}
 
export default ContactUs;