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
                        You're sure to wake up with a roaring appetite after your second day in Amman, so indulge in an authentic Jordanian breakfast. After breakfast Visit to ASHAB-E-KAIF    , PROPHET YOOSHA BIN NOON, ABU UBAIDA BIN AL JARRAH, KING ABDULLAH MOSQUE, DIRAR BIN AL AZWAR, ABDUL REHMAN BIN AUF. After completeing Spiritual Journey then  transfer to Hotel for Dinner and night stay.
                    </p>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </>
    );
}

export default BaitulMuqadas;