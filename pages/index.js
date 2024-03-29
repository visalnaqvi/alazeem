import Head from "next/head";
import styles from "../styles/Home.module.css";
import Slider from "../comps/Slider";
import Article from "../comps/Article";
import style from "../styles/Article.module.css";
import PackageBody from "../comps/Packages/PackageBody";
import BoilerBody from "../comps/BoilerBody";
import Image from "next/dist/client/image";
import { useEffect , useState } from "react";
import Link from "next/dist/client/link";
import popImg from "../public/images/close_small_figma.svg"
import Script from 'next/script'
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


  const [topPos , settopPos] = useState("-110vh")
 
    useEffect(()=>{
        setTimeout(()=>{
            settopPos("0vh")
        },3000)
    },[])
  return (
    <div className={styles.container}>
      <Head>
      <meta
          name="keywords"
          content="Air ticketing agency in Delhi,
          Travel agency in Laxmi Nagar,
          Cheapest air ticketing agency in Delhi,
          Turkey visa proving agency,
          Dubai visa travelling agency,
          Thailand Visa services,
          Holiday packages for Kashmir,
          Holiday package for Manali,
          Holiday package for Kerala,
          Holiday package for Goa,
          Holiday package for Dubai,
          Holiday package for Thailand,
          Holiday package for Bankok,
          Umrah packages,
          Cheapest umrah package,
          Best Delhi Jedda group fare,
          Umrah package service,
          Best umrah package,
          Best umrah package from delhi,
          Best umrah packahe for Jaipur,
          Best umrah package from Mumbai,
          Cheapest group fare from Mumbai to jedda,
          Cheapest group fare from Jaipur to jedda,
          "
        />
        <meta
      name="description"
      content="Best Tour and Travels Agency in Delhi. INnternational and Domestic Flight Ticketing, Visa Assistance, Holiday Packages and Hajj Umrah Tour Package available. Hajj Umrah economic tour packages. We have trips available all over India. Features including Hotel Booking , Travel Planning etc"
    />
      <title>Al Azeem Tour 	&#x00026; Travels - INT./DOM. Flight Ticketing, Visa Assistance, Holiday Packages</title>
      <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
        
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      </Head>
      <Script strategy="lazyOnload" src={'https://www.googletagmanager.com/gtag/js?id=G-DT357YR96S'} />

<Script strategy="lazyOnload" id="analytics">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DT357YR96S', {
        page_path: window.location.pathname,
        });
    `}
</Script>       <div style={{top:topPos}} className={`${styles.popup} `}>
    <div className={styles.popupimg}>
            </div>
            <div onClick={()=>{settopPos("-110vh")}} className={`${styles.close} close`}>
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
