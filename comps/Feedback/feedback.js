import DP1 from "../../public/images/feedback/dp.webp"
import DP2 from "../../public/images/feedback/dp2.webp"
import DP3 from "../../public/images/feedback/dp3.webp"
import FeedBackCard from "./cards"

const FeedBack = () => {
    return ( <>
        <div className="feedback-wrapper flex-class wrap" style={{width:"100%"}}>
            <FeedBackCard img={DP1} name="Rajiv Raj" review="If there was a 6 star review i would surely give it. Our travel
          planner and his people on the ground made this trip seamless. Even
          with the speed bumps that Covid-19 laid in front of us our trip was
          super easy."></FeedBackCard>

<FeedBackCard img={DP2} name="Jhanvi Kukreja" review="The experience was incredible. Our travel planner customized our
          trip so we could scuba dive a few days in the Red Sea at the end of
          the tour."></FeedBackCard>

<FeedBackCard img={DP3} name="Ayushi Sharma" review="I can't imagine doing it without the expertise that our travel
          planner brought to the table. We felt 100% safe the entire journey.
          The tickets, private transportation were provided by our travel
          company the entire trip.."></FeedBackCard>
        </div>
    </> );
}
 
export default FeedBack;