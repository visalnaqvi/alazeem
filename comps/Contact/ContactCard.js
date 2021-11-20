import style from "../../styles/Contact.module.css"
const ContactCard = ({heading, line1 , line2}) => {
    return (
          <div className={style.contactcard}>
            <div className={style.card}>
                <p className={style.heading}>{heading}</p>
                <p className={style.text}>{ line1 }</p>
                <p className={style.text}>{line2}</p>
            </div>
            </div>

     );
}
 
export default ContactCard;