import Slider from "../comps/SlideUmrah";
import style from "../styles/Article.module.css";
import Footer from "../comps/Footer/Footer";
import styl from "../styles/Umrah.module.css";
import Article from "../comps/Article";
import Head from "next/dist/shared/lib/head";
const UmrahPackage = () => {
    const headingMain = "Al-Azeem Tours and Travel";
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
    return ( 
    <>
    <Head>
      <title>YOUR GUIDE TO UMRAH RITUALS - Umrah Package by AA Travels (Al-Azeem)</title>
      <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
        <meta
      name="description"
      content="Best Tour and Travels Agency in Delhi.Hajj Umrah Tour Package available. Hajj Umrah economic tour packages. We have trips available all over India. Features including Hotel Booking , Travel Planning etc.Umrah Package by Al Azeem Tours and Travel"
    />
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      </Head>
    <Slider></Slider>
    <br></br>
    <br></br>
    <br></br>
    <div className={styl.mainUp}>
    <div className={styl.leftMainUp}>
    <h1 className={style.articletitlecenter}>Umrah Package</h1>
    <ul>
        <li className={style.articletextcenter}>Hotel 4/5/6 Bed Sharing</li>
        <li className={style.articletextcenter}>All Meals and Laudary</li>
        <li className={style.articletextcenter}>Air Ticket and Visa</li>
        <li className={style.articletextcenter}>Insurance and Ziyarat</li>
        <li className={style.articletextcenter}>Round Trip Transport</li>
    </ul>
    <br></br>
    <h2 style={{fontSize:"1.6rem",fontWeight:"500"}} className={style.articletitlecenter}>Makkah Hotel</h2>
    <p className={style.articletextcenter}>Al Sundus/ similar 600 mtr.</p>
    <br></br>
    <h2 style={{fontSize:"1.6rem",fontWeight:"500"}} className={style.articletitlecenter}>Madina Hotel</h2>
    <p className={style.articletextcenter}>Rehab Al Safwa/ Similar 500 mtr.</p>
    </div>
    <div className={styl.bodyImage}>

    </div>
</div>
<br></br>
<br></br>
<Footer></Footer>
<br></br>
<br></br>
<div className={styl.body}>
<h1 className={style.articletitle}>WHAT IS UMRAH?</h1>

<p className={style.newtext}><strong>Umrah</strong> is a beautiful spiritual journey taken by every single <strong>Muslim</strong> to acknowledge <strong>Allah (Subhanahu Wa Ta&#x02019;ala &#x2212; Glory to him, the exalted)</strong> as the harbinger of peace and to commune with him to purge the impurities within. Any pilgrim who proceeds on this journey, goes along the path to <strong>purifying</strong> their soul, heart mind and body from the sins committed in the past to be distinguished from others on Resurrection day.<br></br>
Essentially, the <strong>Umrah</strong> means &#x02018; a visit&#x02019; to the <strong>Holy Kaaba</strong> (the Sacred House of God) in Arabic and can be performed by anyone, anytime of the year; unlike <strong>Hajj</strong>, which is an obligatory pilgrimage to <strong>Makkah</strong>, performed every year within the first 10 days of the Islamic month of <strong>Dhul Hijjah</strong>.</p>
<div className={styl.bodyImagemb}></div>
<br></br><br></br>
<h2 className={style.articletitle}>UMRAH RITUALS &#x2212; HOW TO PERFORM UMRAH</h2>
<p  className={style.newtext}>The acts of faith performed by all <strong>pilgrims</strong> during their spiritual journey to the <strong>Holy Kaaba</strong> are collectively known as the <strong>Umrah rituals</strong>.
Depending on whether one wishes to perform <strong>Hajj</strong> after the commencement of <strong>Umrah rituals</strong>, there are two types of <strong>Umrah: Al Umrah Al Mufradah (optional before Hajj)</strong> and <strong>Umrah Al Tammatu (obligatory before Hajj).</strong><br></br>
Following are the four acts of <strong>Umrah Al Mufradah</strong> that involve fulfilling some religious duties and rituals, each anchoring the pilgrim in the right moment towards complete atonement.
</p>
<div className={styl.bodyImagemb2}></div>
<br></br><br></br><br></br>
<h3 className={style.articletitle}>IHRAM FROM MIQAT &#x2212; THE INTENTION TO PERFORM UMRAH</h3>
<p  className={style.newtext}>Before pilgrims wish to enter the Al Masjid Al Haram (the sacred boundary of Makkah) and move across to perform <strong>Umrah,</strong> they should wear Ihram in order to make haram and traverse the five different areas of Miqats in the Haram boundary:

</p>
<br></br>
<ul  className={`${style.newtext} ${styl.ul}`}>
    <li><span>Dhu&#x02019;l Hulaifah (Abbyar Ali)</span> is for pilgrims coming from or through Madina</li>
    <li><span>Al-Juhfah (near Rabigh)</span> is for pilgrims coming from or through Syria, Morocco, or Egypt.</li>
    <li><span>Qarn-al manazil (As-Sail Al-Kabeer)</span> is for pilgrims coming from or through Najd or Taif.</li>
    <li><span>Yalamlam (Sa&#x02019;adiyah)</span> is for pilgrims coming from or through India, Pakistan or Yemen.</li>
    <li><span>Dhat `Irq</span> is for pilgrims coming from or through Iraq.</li>
</ul>
<br></br>
<p className={style.newtext}>Prior to visiting the sacred boundary of <strong>Makkah</strong>, pilgrims are mandated to assume a state of <strong>Ihram,</strong> which is the combined sacred act of Niyyah and Talbiyah necessary to perform Umrah. Niyyah is the innate intention to perform an act of worship, while Talbiyah is a special prayer said in supplication.</p>

<br></br>
<br></br><br></br>
<h3 className={style.articletitle}>TAWAF &#x2212; CIRCUMAMBULATION OF THE HOLY KAABA IN WORSHIP</h3>

<p className={style.newtext}>After assuming a state of Ihram, the Muhrim performs the obligatory act of <strong>Tawaf in the Al Masjid Al Haram.</strong> The Muhrim must stop reciting the Talbiyah and start circumambulation the holy Kaaba seven times (as a reminder of the angels that circumambulate the celestial realms of <strong>Allah&#x02019;s house, al-Bayt al-Ma&#x02019;mur).</strong></p>
<br></br>
<p className={style.newtext}> They must circumambulate the <strong>Masjid Al Haram</strong> by starting from the Black Stone and completing it there at with the sincere intention of seeking closeness to <strong>Allah</strong>. The worship is validated only if the pilgrim recites the prescribed du&#x02019;aa (supplication) during each one of the seven circumambulations.</p>
<br></br>

<p className={style.newtext}>The last circumambulation ends exactly where the first one began, to ensure that the pilgrim completed all seven rounds without moving or falling behind a single step or more. And with the seventh round of circumambulation and performance of eight Istilam, the state of Tawaf concludes.</p>
<br></br>
<p className={style.newtext}>Upon completion of <strong>Tawaf,</strong> pilgrims can go behind Maqam Ibrahim (the station of Ibrahim) and perform <strong>Salat of Tawaf</strong> to offer the two short rak&#x02019;aa&#x02019;s and thereafter drink the holy Zamzam water from Well of Zamzam in the basement of the Sacred Mosque while supplicating to <strong>Allah.</strong></p>
<br></br>
<br></br>
<br></br>
<h3 className={style.articletitle}>SA&#x02019;IY &#x2212; WALKING SEVEN TIMES BETWEEN THE HILLS OF SAFA AND MARWAH IN WORSHIP</h3>
<p className={style.newtext}>
Umrah pilgrims intending to make Sa&#x02019;iy must make their way out of the Al Masjid Al Haram towards the Masaa&#x02019; (the place of Sa&#x02019;iy) which commemorates the struggle Prophet Abraham&#x02019;s wife Hazarat Hajra went through to search for water for her son in between the hills of Safa in the south and Marwah in the North. In essence, Sa&#x02019;iy is a great way to spend some time on self-reflection and self-realisation.
Pilgrims start Sa&#x02019;iy by going up the hill of Safa to see the holy Kaaba from the Safa door. 
</p>
<br></br>
<p className={style.newtext}>
The procedure continues with pilgrims going from Safa to Marwah and returning back to Safa, until the they complete seven laps in total. Each round is nearly 450m long. The seventh round will end at Marwah.
</p>
<br></br>
<br></br>
<br></br>
<h3 className={style.articletitle}>HALQ (SHAVING THE HEAD) OR TAQSIR (CLIPPING OR SHORTENING OF THE HAIR FOR MEN AND WOMEN)</h3>
<p className={style.newtext}>
Finally, the last step of your journey, shaving or clipping the hair in Mina. Men should get their head completely shaved, or get their hair clipped. While women are forbidden to shave their heads and only allowed to have a lock or strand of their hair clipped. The act of cutting the hair symbolizes one&#x02019;s detachment from physical appearances and complete subjection to <strong>Allah</strong>.
</p>
<br></br>
<p className={style.newtext}>
All the prohibitions imposed on the conduct of pilgrims by <strong>Irham</strong> are lifted, upon completion of this last obligatory ritual. They can then remove Ihram sheets and change into their regular clothes.
</p>
<br></br>
</div>
<Article
        heading={headingMain}
        text={textMain}
        style={{ textAlign: "justify" }}
      ></Article>
    </> );
}
 
export default UmrahPackage;