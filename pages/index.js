import Head from "next/head";
import Map from "../comps/map";
import styles from "../styles/Home.module.css";
import Slider from "../comps/Slider";
import Article from "../comps/Article";
import style from "../styles/Article.module.css";
import PackageBody from "../comps/Packages/PackageBody";
import InfoCardWrapper from "../comps/InfoCard/InfoCardWrapper";
import InfoCardStretch from "../comps/InfoCardStretch/InfoCardStretch";
import InfoCardStretchDown from "../comps/InfoCardStretch/InfoCardStretchDown";
import knowledge from "../public/images/whyus/knowledge.webp";
import responsebleteam from "../public/images/whyus/responsebleteam.webp";
import teamwork from "../public/images/whyus/teamwork.webp";
import FeedBack from "../comps/Feedback/feedback";
export default function Home() {
  const headingMain = "Our foundation";
  const textMain = ["We present before you",<strong className={style.articletext} key="1">AL-AZEEM TOUR & TRAVELS as one stop platform for all your travel needs</strong>,
    ".With a focus on customer service, at ",
    <b className={style.articletext} key="2">
      Al-Azeem Tour{" "}
    </b>,
    " we offer a fantastic",
    <strong className={style.articletext} key="3">
      {" "}
      range of trips
    </strong>,
    " to meet your budget , ambitions and expectations. All of us here in the",
    <b className={style.articletext} key="4">
      {" "}
      Al-Azeem
    </b>,
    " team, work tirelessly to ensure that your ",
    <strong className={style.articletext} key="5">
      trip
    </strong>,
    " is carefree, successful and enjoyable experience from start to finish. That means attention to your",
    <strong className={style.articletext} key="6">
      {" "}
      travel plans,
    </strong>,
    " accommodation, specialist inclusions and leisure time as well as to health and safety, financial protection and ",
    <strong className={style.articletext} key="7">
      travel insurance
    </strong>,
    ".Specialist knowledge and experience is only half of the story. What distinguishes ous is our passion for the ",
    <strong className={style.articletext} key="8">
      trips
    </strong>,
    " we organise, for the destinations that we feature. We feature ",
    <strong className={style.articletext} key="9">
      {" "}
      trips around the world
    </strong>,
    "and our latest inclusion is ",
    <b className={style.articletext} key="10">
      tour to Saudi Arabia.
    </b>,
  ];

  return (
    <div className={styles.container}>
      <Head>
      <title>Al Azeem Tour & Travels - Saudi Arabia Tour Packages</title>
      <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
        <meta
      name="description"
      content="Best Tour and Travels Agency in Delhi. Saudi Arabia Tour Package and Hajj Umrah Tour Package available. Hajj Umrah economic tour packages. We have trips available all over India. Features including Hotel Booking , Travel Planning etc"
    />
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      </Head>
      <Slider></Slider>
      <Article
        heading={headingMain}
        text={textMain}
        style={{ textAlign: "justify" }}
      ></Article>
      <PackageBody></PackageBody>
      <Article headingcenter="Our Services"></Article>
      <InfoCardWrapper></InfoCardWrapper>
      <Article headingcenter="Why to choose Us?" textcenter="Since established our primary aim was to provide quality travel services to business and leisure travelers. Supported by strong financial management, impressive customer satisfaction, and constant improvement, AL - AZEEM TOUR & TRAVELS has expanded to cover various facets of the industry. Our experience led to perfection in both our outbound and inbound units."></Article>
      <InfoCardStretch alt="responseble people" img={responsebleteam} heading="Experienced management team" text="Our team is highly experienced and have excellence in handling on filed challenges.They communicate openly with each other, sharing their thoughts, opinions, and ideas with members of their team; as well as taking into consideration what others have to say."></InfoCardStretch>
      <InfoCardStretchDown alt="people working on computer" img={knowledge} heading="In-depth knowledge of the region’s travel needs" text="Let it be choosing a hotle to stay or a mode of travel. We have a good knowledge of every aspect of travelling. Knowing the in and outs of every option we have and what will be the best for for you to make your travel comfortable and smooth." ></InfoCardStretchDown>
      <InfoCardStretch alt="team work" img={teamwork} heading="Wide network with trade, corporate and diplomatic community" text="Our wide network helps us to get the best deal for you. We get the most economical and comfortable option for you."></InfoCardStretch>
      <Map></Map>
      <Article heading="Happy Coustumers"></Article>
    <FeedBack></FeedBack>
    </div>
  );
}
