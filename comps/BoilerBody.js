import Article from "./Article";
import InfoCardWrapper from "./InfoCard/InfoCardWrapper";
import InfoCardStretch from "./InfoCardStretch/InfoCardStretch";
import InfoCardStretchDown from "./InfoCardStretch/InfoCardStretchDown";
import Map from "./map";
import FeedBack from "./Feedback/feedback";
import knowledge from "../public/images/whyus/knowledge.webp";
import responsebleteam from "../public/images/whyus/responsebleteam.webp";
import teamwork from "../public/images/whyus/teamwork.webp";

const BoilerBody = () => {
    return ( <>
          <Article headingcenter="Our Services"></Article>
      <InfoCardWrapper></InfoCardWrapper>
      <Article headingnormal="Why to choose Us?" textcenter={["Since established our primary aim was to provide quality ",<b key="1">tour and travel package</b>," services to business and ", <b key="2">leisure travelers</b>,". Supported by strong financial management, impressive customer satisfaction, and constant improvement, ",<b key="3">AL - AZEEM TOUR & TRAVELS</b>," has expanded to cover various facets of the industry. Our experience led to perfection in both our outbound and inbound units. All our ", <b key="4">tour packages</b>," are designed and planed keeping in mind your needs and comfortability. We will choose the best options available in market . And take care of all your needs."]}></Article>
      <InfoCardStretch alt="responseble people" img={responsebleteam} heading="Experienced management team" text={["Our team is highly experienced and have excellence in handling on ",<b key="5">tour challenges</b>,".They communicate openly with each other, sharing their thoughts, opinions, and ideas with members of their team; as well as taking into consideration what others have to say."]}></InfoCardStretch>
      <InfoCardStretchDown alt="people working on computer" img={knowledge} heading="In-depth knowledge of the region’s travel needs" text="Let it be choosing a hotle to stay or a mode of travel. We have a good knowledge of every aspect of travelling. Knowing the in and outs of every option we have and what will be the best for for you to make your travel comfortable and smooth." ></InfoCardStretchDown>
      <InfoCardStretch alt="team work" img={teamwork} heading="Wide network with trade, corporate and diplomatic community" text="Our wide network helps us to get the best deal for you. We get the most economical and comfortable option for you."></InfoCardStretch>
      <Map></Map>
      <Article headingcenter="Happy Coustumers"></Article>
    <FeedBack></FeedBack>

    </> );
}
 
export default BoilerBody;