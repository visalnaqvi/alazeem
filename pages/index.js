import Head from "next/head";
import styles from "../styles/Home.module.css";
import Slider from "../comps/Slider";
import Article from "../comps/Article";
import style from "../styles/Article.module.css";
import PackageBody from "../comps/Packages/PackageBody";
import BoilerBody from "../comps/BoilerBody";
import Image from "next/dist/client/image";
import { useEffect } from "react";
import popImg from "../public/images/close_small_figma.svg"
export default function Home() {
  const headingMain = "Our foundation";
  const textMain = ["We present before you ",<strong className={style.articletext} key="1">AL-AZEEM TOUR & TRAVELS as one stop platform for all your travel needs</strong>,
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


  useEffect(() => {
    const popup = document.querySelector(".popup");
    const close = document.querySelector(".close");
    setTimeout(()=>{
      popup.style.top = 0
    },3000)

    close.addEventListener("click",()=>{
      popup.style.top = "-110vh"
    })

  },[]);
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
      <div className={`${styles.popup} popup`}>
            <div className={styles.popupimg}>
            </div>
            <div className={`${styles.close} close`}>
              <Image width={100} height={100} src={popImg} alt=""></Image>
            </div>
      </div>
      <Slider></Slider>
      <Article
        heading={headingMain}
        text={textMain}
        style={{ textAlign: "justify" }}
      ></Article>
      <PackageBody></PackageBody>
      <BoilerBody></BoilerBody>
    </div>
  );
}
