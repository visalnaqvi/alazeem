import Slider from "../comps/SlideUmrah";
import style from "../styles/Article.module.css";
import styl from "../styles/Umrah.module.css";
import Head from "next/dist/shared/lib/head";
import { useEffect, useState } from "react";
import UmrahPackageCollector from "../comps/UmrahPackageCollector";
import firebase from 'firebase/app';
import fs from "../styles/Footer.module.css"
import Script from 'next/script'
import "firebase/firestore"
const UmrahPackage = () => {
  
  const [pckages, setPack] = useState();

  const config={
    apiKey: "AIzaSyBwGQoCe0wTlR61fueDKA0yA4n5xmMfPrg",
    authDomain: "buttons-2dc4a.firebaseapp.com",
    databaseURL: "https://buttons-2dc4a-default-rtdb.firebaseio.com",
    projectId: "buttons-2dc4a",
    storageBucket: "buttons-2dc4a.appspot.com",
    messagingSenderId: "241629842019",
    appId: "1:241629842019:web:6c248c713e6a27cd494656",
    measurementId: "G-QK6TC8JTHZ"
}

if(!firebase.apps.length){
    firebase.initializeApp(config)
    
}else{ firebase.app() };
const db = firebase.firestore()
useEffect(()=>{

db.collection("umrahPackages")
.onSnapshot((querySnapshot) => {
        const inpack = []
        querySnapshot.forEach((doc) => {
            inpack.push(doc.data());
            });
            setPack(inpack)
})

}, [])
 
 
  return (
    <>
      <Head>
      <meta
          name="keywords"
          content="umrah, umrah packages, hajj package, hajj umrah packages 2022, economy packages, 1 month ramdam umrah package, tours and travel, affordale umrah package, umrah flight tickets, hotel booking,Umrah package service,
          Best umrah package,
          Best umrah package from delhi,
          Best umrah packahe for Jaipur,
          Best umrah package from Mumbai,
          Cheapest group fare from Mumbai to jedda,
          Cheapest group fare from Jaipur to jedda,
          Cheapest group fare from Mumbai to jedda,
          "
        />
      <meta
          name="description"
          content="Best Tour and Travels Agency in Delhi Laxmi Nagar.Hajj Umrah Tour Package available. Hajj Umrah economic tour packages. Including Hotel Booking , Travel Planning etc.Umrah Package by Al Azeem Tours and Travel"
        />
       
        <title>
          YOUR GUIDE TO UMRAH RITUALS - Umrah Package by AA Travels (Al-Azeem)
        </title>
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
</Script>
      <div className={styl.displayBox}>
      <h1 className={style.articletitle}>Umrah Packages By <br></br> Al Azeem Travels</h1>
      </div>
     
      {pckages && <UmrahPackageCollector packages = {pckages}></UmrahPackageCollector>}
      
      <br></br>
      <br></br>
      <div style={{borderRadius:"10px",backgroundColor:"#00665A"}} className={`${fs.footerup} flex-class`}>
        <div className={fs.left}>
            <p className={fs.title}>Contact Us for more information</p>
            <p className={fs.text}>Planning for Umrah? Book your umrah package with us as we provide the highest-quality Umrah packages from India at amazingly reasonable prices, ensuring that all of your travel needs are met to your satisfaction.</p>
            <p className={fs.text} style={{marginTop:"10px",letterSpacing:"1px",fontSize:"1.2rem"}}><strong>Email:  aatravels1170@gmail.com</strong></p>
        </div>
        <div className={`${fs.right} flex-class`}>
        <div>
        <a href="tel:+919205184001"><div className={`${fs.button} ${fs.ftUmrah}`}>
        +919205184001
        </div></a>
        <a href="tel:+919811042458"><div className={`${fs.button} ${fs.ftUmrah}`}>
        +919811042458 
        </div></a>
        </div>
        </div>
    </div> 
      <br></br>
      <br></br>
      <div className={styl.body}>
        <h1 className={style.articletitle}>WHAT IS UMRAH?</h1>

        <p className={style.newtext}>
          <strong>Umrah</strong> is a super spiritual journey for every single
          Muslim to acknowledge Allah (Subhanahu Wa Ta&apos;ala - Glory to him,
          the exalted) as the indicator of peace and to commune with him to
          purge the impurities within. All pilgrim who proceeds on this holy
          journey, goes along the path to purifying their soul, heart mind and
          body from the sins committed in the past to be distinguished from
          others on Resurrection day. Essentially, the meaning of Umrah is to
          &apos;a visit&apos; to the <strong>Holy Kaaba</strong> (the Sacred
          House of God) in Arabic and can be performed by all muslims, anytime
          in a yearr; unlike <strong>Hajj,</strong> which is an obligatory
          pilgrimage to Makkah, performed in every year within the first 10 days
          of the Islamic month of <strong>Dhul Hijjah.</strong>
        </p>
        <div className={styl.bodyImagemb}></div>
        <br></br>
        <br></br>
        <h2 className={style.articletitle}>
          UMRAH RITUALS - HOW TO PERFORM UMRAH
        </h2>
        <p className={style.newtext}>
          The acts of faith performed by all pilgrims during their spiritual
          journey to the <strong>Holy Kaaba</strong> are collectively known as
          the <strong>Umrah rituals.</strong>
          Following are the four acts of Umrah Al Mufradah that involve
          fulfilling some religious duties and rituals, each anchoring the
          pilgrim in the right moment towards complete atonement.
        </p>
        <div className={styl.bodyImagemb2}></div>
        <br></br>
        <br></br>
        <br></br>
        <h3 className={style.articletitle}>
          IHRAM FROM MIQAT - THE INTENTION TO PERFORM UMRAH
        </h3>
        <p className={style.newtext}>
          Before pilgrims wish to enter the Al Masjid Al Haram (the sacred
          boundary of Makkah) and move across to perform <strong>Umrah</strong>,
          they should wear Ihram in order to make haram and traverse the five
          different areas of Miqats in the Haram boundary:
        </p>
        <br></br>
        <ul className={`${style.newtext} ${styl.ul}`}>
          <li>
            <span>Dhu&#x02019;l Hulaifah (Abbyar Ali)</span> is for pilgrims
            coming from or through Madina
          </li>
          <li>
            <span>Al-Juhfah (near Rabigh)</span> is for pilgrims coming from or
            through Syria, Morocco, or Egypt.
          </li>
          <li>
            <span>Qarn-al manazil (As-Sail Al-Kabeer)</span> is for pilgrims
            coming from or through Najd or Taif.
          </li>
          <li>
            <span>Yalamlam (Sa&#x02019;adiyah)</span> is for pilgrims coming
            from or through India, Pakistan or Yemen.
          </li>
          <li>
            <span>Dhat `Irq</span> is for pilgrims coming from or through Iraq.
          </li>
        </ul>
        <br></br>
        <p className={style.newtext}>
          Prior to visiting the sacred boundary of<strong>Makkah,</strong>{" "}
          pilgrims are mandated to assume a state of Ihram, which is the
          combined sacred act of Niyyah and Talbiyah necessary to perform Umrah.
          Niyyah is the innate intention to perform an act of worship, while
          Talbiyah is a special prayer said in supplication.
        </p>

        <br></br>
        <br></br>
        <br></br>
        <h3 className={style.articletitle}>
          TAWAF - CIRCUMAMBULATION OF THE HOLY KAABA IN WORSHIP
        </h3>

        <p className={style.newtext}>
          After assuming a state of Ihram, the Muhrim performs the obligatory
          act of Tawaf in the Al Masjid Al Haram. The Muhrim must stop reciting
          the Talbiyah and start circumambulation the holy{" "}
          <strong>Kaaba</strong> seven times (as a reminder of the angels that
          circumambulate the celestial realms of Allah&apos;s house, al-Bayt
          al-Ma&apos;mur),
        </p>
        <br></br>
        <p className={style.newtext}>
          They must circumambulate the Masjid Al Haram by starting from the
          Black Stone and completing it there at with the sincere intention of
          seeking closeness to Allah. The worship is validated only if the
          pilgrim recites the prescribed du&apos;aa (supplication) during each
          one of the seven circumambulations.
        </p>
        <br></br>

        <p className={style.newtext}>
          The last circumambulation ends exactly where the first one began, to
          ensure that the pilgrim completed all seven rounds without moving or
          falling behind a single step or more. And with the seventh round of
          circumambulation and performance of eight Istilam, the state of{" "}
          <strong>Tawaf</strong> concludes.
        </p>
        <br></br>
        <p className={style.newtext}>
          Upon completion of <strong>Tawaf,</strong> pilgrims can go behind
          Maqam Ibrahim (the station of Ibrahim) and perform Salat of Tawaf to
          offer the two short rak&apos;aa&apos;s and thereafter drink the holy
          Zamzam water from Well of Zamzam in the basement of the Sacred Mosque
          while supplicating to <strong>Allah.</strong>
        </p>
        <br></br>
        <br></br>
        <br></br>
        <h3 className={style.articletitle}>
          SA&apos;IY - WALKING SEVEN TIMES BETWEEN THE HILLS OF SAFA AND MARWAH
          IN WORSHIP
        </h3>
        <p className={style.newtext}>
          Umrah pilgrims intending to make Sa&apos;iy must make their way out of
          the Al Masjid Al Haram towards the Masaa&apos; (the place of
          Sa&apos;iy) which commemorates the struggle Prophet Abraham&apos;s
          wife Hazarat Hajra went through to search for water for her son in
          between the hills of Safa in the south and Marwah in the North. In
          essence, Sa&apos;iy is a great way to spend some time on
          self-reflection and self-realisation. Pilgrims start Sa&apos;iy by
          going up the hill of Safa to see the holy <strong>Kaaba</strong> from
          the Safa door.
        </p>
        <br></br>
        <p className={style.newtext}>
          The procedure continues with pilgrims going from Safa to Marwah and
          returning back to Safa, until the they complete seven laps in total.
          Each round is nearly 450m long. The seventh round will end at Marwah.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <h3 className={style.articletitle}>
          HALQ (SHAVING THE HEAD) OR TAQSIR (CLIPPING OR SHORTENING OF THE HAIR
          FOR MEN AND WOMEN)
        </h3>
        <p className={style.newtext}>
          Finally, the last step of your journey, shaving or clipping the hair
          in Mina. Men should get their head completely shaved, or get their
          hair clipped. While women are forbidden to shave their heads and only
          allowed to have a lock or strand of their hair clipped. The act of
          cutting the hair symbolizes one&apos;s detachment from physical
          appearances and complete subjection to Allah.
        </p>
        <br></br>
        <p className={style.newtext}>
          All the prohibitions imposed on the conduct of pilgrims by Irham are
          lifted, upon completion of this last obligatory ritual. They can then
          remove Ihram sheets and change into their regular clothes.
        </p>
        <br></br>
      </div>
      
    </>
  );
};

export default UmrahPackage;
