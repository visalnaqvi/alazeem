import style from "../styles/Article.module.css";
import styl from "../styles/Umrah.module.css";
import Head from "next/dist/shared/lib/head";
import tick from "../public/icons/check.png";
import Image from "next/image";
import umrahCardStyle from "../styles/umrahCard.module.css"
import Script from 'next/script'
const BaitulMuqadas = () => {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Best Tour and Travels Agency in Delhi Laxmi Nagar.Hajj Umrah Tour Package available. Hajj Umrah economic tour packages. Including Hotel Booking , Travel Planning etc.Umrah Package by Al Azeem Tours and Travel"
                />

                <title>
                    Best Baitul Muqadas Package by AA Travels (Al-Azeem)
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

            <div className={styl.baitulMuqadasWrap}>
                <div className={`${styl.displayBox} ${styl.baitulMuqadas}`}>
                </div>
                <br></br><br></br>


                <div className={styl.hajCardWrap}>
                    <h1 style={{ marginBottom: "0px" }} className={style.articletitle}>Baitul Muqaddas</h1>
                    <div className={umrahCardStyle.date}>
                        <p>Departure on: 15 May 2023</p>
                    </div>
                    <h2 style={{ fontWeight: "700", marginTop: "10px" }}>INCLUSIONS</h2>
                    <div className={styl.ulCont}>
                        <ul className={umrahCardStyle.ul}>

                            <li>
                                <div className={umrahCardStyle.img}>
                                    <Image src={tick} alt="tick icon"></Image>
                                </div>
                                <p>10 Nights 11 Days Package</p>
                            </li>

                            <li>
                                <div className={umrahCardStyle.img}>
                                    <Image src={tick} alt="tick icon"></Image>
                                </div>
                                <p>Friday Salah In Masjid Al Aqsa</p>
                            </li>



                        </ul>
                        <ul className={umrahCardStyle.ul}>


                            <li>
                                <div className={umrahCardStyle.img}>
                                    <Image src={tick} alt="tick icon"></Image>
                                </div>
                                <p>Air Tickets, Visa</p>
                            </li>
                            <li>
                                <div className={umrahCardStyle.img}>
                                    <Image src={tick} alt="tick icon"></Image>
                                </div>
                                <p>Hotels, Transport</p>
                            </li>


                        </ul>
                    </div>
                    <br></br>

                    <div className={styl.baitulMuqadasFlexOut}>
                        <div className={styl.baitulMuqadasFlex}>
                            <div className={styl.timelineCard}>
                                <div className={styl.timelineCardTop}>
                                    <p>AMMAN</p>
                                </div>
                                <div className={styl.timelineCardBottom}>
                                    <p>03 Nights</p>
                                </div>
                            </div>
                            <div className={styl.timelineCard}>
                                <div className={styl.timelineCardTop}>
                                    <p className={styl.small}>BAITUL MUQADDAS</p>
                                </div>
                                <div className={styl.timelineCardBottom}>
                                    <p>03 Nights</p>
                                </div>
                            </div>
                        </div>
                        <div className={styl.baitulMuqadasFlex}>
                            <div className={styl.timelineCard}>
                                <div className={styl.timelineCardTop}>
                                    <p>TABA BORDER</p>
                                </div>
                                <div className={styl.timelineCardBottom}>
                                    <p>02 Nights</p>
                                </div>
                            </div>
                            <div className={styl.timelineCard}>
                                <div className={styl.timelineCardTop}>
                                    <p>CAIRO</p>
                                </div>
                                <div className={styl.timelineCardBottom}>
                                    <p>02 Nights</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styl.contact}>
                        <div className={styl.contactBox}>
                            <p className={styl.ctag}>CALL US NOW FOR MORE INFORMATION</p>
                            <p className={styl.chead}>9205184001, 9811042458</p>
                        </div>
                        <div className={styl.baitulMuqadasPrice}>
                            <p>Package Cost : Rs. 135786/-</p>
                        </div>
                    </div>
                </div>
                <br></br>
        <br></br>
        <div className={styl.body}>

          <h1 className={style.articletitle}>DAY 1 - Amman</h1>

          <p className={style.newtext}>
            On arrival of Respected Ziareen to Queen Alia International Airport Jordan, our authorized representative will  welcome of Ziareen and assist them in precedure to transfer to Hotel for Checkin. After rest Delicious and teasty Dinner in Hotel, and Overnight stay in Hotel at Amman.
          </p>
          <br></br>
          <br></br>
          <h2 className={style.articletitle}>
            DAY 2 - Amman
          </h2>
          <p className={style.newtext}>
            You’re sure to wake up with a roaring appetite after your second day in Amman, so indulge in an authentic Jordanian breakfast. After breakfast Visit to ASHAB-E-KAIF    , PROPHET YOOSHA BIN NOON, ABU UBAIDA BIN AL JARRAH, KING ABDULLAH MOSQUE, DIRAR BIN AL AZWAR, ABDUL REHMAN BIN AUF. After completeing Spiritual Journey then  transfer to Hotel for Dinner and night stay.
          </p>
          <br></br>
          <br></br>
          <h3 className={style.articletitle}>
            DAY 3 - Amman
          </h3>
          <p className={style.newtext}>
            Zaireen suggested to wake up early and enjoy breakfast, and then ready to  move to KERAK TO VISIT MOOTHATH MAZAR, JAFAR AL TAYYAR, ZAID BIN HARISA, ABDULLAH IBNE RAWWAH, PROPHET SHOIAB, and then visit to PETRA,  Petra is a famous archaeological site in Jordan's southwestern desert dating to around 300 B.C. . stay in Hotel in Amman (Breakfast, Lunch, Dinner)
          </p>
          <br></br>
          <br></br>
          <h3 className={style.articletitle}>
            DAY 4 - Amman - Palestine
          </h3>

          <p className={style.newtext}>
            After breakfast Check out from the Hotel move  to Israel through Allenby Bridge. The King Hussein Bridge (Allenby) Border crossing terminal is located approximately 57 km from the capital city of Amman and is the closest border to the city to access Isreal, Visit to NABI MUSA MUQAM. SALAH in MASJID-E-AQSA.  Overnight stay in Hotel. (Breakfast/Lunch/Dinner)
          </p>
          <br></br>
          <br></br>

          <h3 className={style.articletitle}>
            DAY 5- Palestine
          </h3>
          <p className={style.newtext}>
            After breakfast visit to TOMB SALMANUAL FARSI, RABIA BASRI, GOLDEN DOME, MASJID-E-AQSA, MASJID-E-BURAK, MEHRAB-E-BIBI MARIYAM, MUQAM-E-HAZRAT ZAKARIYA, UMAR MOSQUE, PROPHET YOUNUS. Stay in Hotel (Breakfast, Lunch, Dinner)
          </p>
          <br></br>
          <br></br>

          <h3 className={style.articletitle}>
            DAY 6 - Palestine
          </h3>
          <p className={style.newtext}>
            After breakfast, visit HEBRON (PROPHET IBRAHIM, BIBI SAARA, PROPHET ISHAQ, BIBI RIFQA). SALAH in MASJID-E-AQSA. After completing these ziyarat then move to dead sea. The Dead Sea also known by other names, is a salt lake bordered by Jordan to the east and the West Bank and Israel to the west. Stay at hotel (Breakfast, Lunch, Dinner)
          </p>
          <br></br>
          <br></br>
          <h3 className={style.articletitle}>
            DAY 7 - Palestine-Amman
          </h3>
          <p className={style.newtext}>
            After breakfast, check out from the hotel. Overnight stay in Amman Hotel.(Breakfast, Lunch and Dinner)
          </p>
          <br></br>
          <br></br>
          <h3 className={style.articletitle}>
            DAY 8 - DEPARTURE
          </h3>
          <p className={style.newtext}>
            After breakfast, pick up from the hotel for Airport for departure (Breakfast).
          </p>
        </div>
            </div>
        </>
    );
}

export default BaitulMuqadas;