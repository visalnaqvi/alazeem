import style from "../../styles/Feedback.module.css"
import Image from "next/image";
const FeedBackCard = ({img , name , review}) => {
    return ( <div className={style.card}>
        <div className={style.feedbackcard}>
            <div className={style.image}><Image src={ img } alt="Profile Pic" /></div>
            <div className={style.username}>{name}</div>
            <div className={style.userreview}>
                    { review }
            </div>
      </div>
    </div> );
}
 
export default FeedBackCard;