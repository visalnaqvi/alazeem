import style from "../styles/Article.module.css";
import styl from "../styles/Umrah.module.css";
import tick from "../public/icons/check.png";
import umrahStyles from "../styles/umrahCard.module.css";
import Head from "next/dist/shared/lib/head";
import { useEffect, useState } from "react";
import UmrahPackageCollector from "../comps/UmrahPackageCollector";
import whatsApp from "../public/whatsapp-svgrepo-com.svg"
import bady from "../public/images/umrah/bady2.jpeg"
import phone from "../public/phone-svgrepo-com.svg"
import Image from "next/image";
import firebase from 'firebase/app';
import fs from "../styles/Footer.module.css"
import Script from 'next/script'
import "firebase/firestore"
import 'react-vertical-timeline-component/style.min.css';
import Link from 'next/link';
import { BsFillTelephoneFill } from 'react-icons/bs'
import Article from "../comps/Article";
const UmrahPackage = () => {

  const [pckages, setPack] = useState();

  const config = {
    apiKey: "AIzaSyBwGQoCe0wTlR61fueDKA0yA4n5xmMfPrg",
    authDomain: "buttons-2dc4a.firebaseapp.com",
    databaseURL: "https://buttons-2dc4a-default-rtdb.firebaseio.com",
    projectId: "buttons-2dc4a",
    storageBucket: "buttons-2dc4a.appspot.com",
    messagingSenderId: "241629842019",
    appId: "1:241629842019:web:6c248c713e6a27cd494656",
    measurementId: "G-QK6TC8JTHZ"
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(config)

  } else { firebase.app() };
  const db = firebase.firestore()
  useEffect(() => {

    db.collection("umrahPackages").orderBy("timeStamp", "desc")
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
          content="Umrah package,
          Best umrah package,
          Cheapest umrah package,
          Umrah package from Delhi,
          December umrah packages,
          Jan umrah packages,
          Feb umrah packages,
          Ramzan umrah package,
          Cheapest Ramzan umrah package,
          Best Ramzan umrah package,
          Ramzan umrah package from Delhi,
          March umrah package,
          April umrah package,
          May umrah package,
          June umrah package,
          July umrah package,
          August umrah package,
          Sept umrah packages,
          Oct umrah package,
          Nov umrah package,
          Dec umrah packages,
          Cheapest Air fare to Jeddah,
          Umrah visa,
          Cheapest umrah visa,
          Best umrah operator,
          Haj package,
          best umrah packages from sri nagar,
best umrah packages from Lucknow,
umrah packages from Sri Nagar,
umrah packages from Lucknow,
Haj packages 2023,
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
      <div className={styl.newpkgwrap}>
        <div className={styl.displayBox}>
        </div>
      </div>


      {/* <div className={styl.quicLinks}>
        <p>Quick Link:<a href="/hajjPackage">HAJ 2023 (16 – 20 Days PACKAGE)</a>
          <a href="/hajjPackage#haj2">HAJ 2023 (35 – 40 Days PACKAGE)</a>
          <a href="#umrah">Umrah Packages</a></p>
      </div> */}



      <div className={styl.newpkgwrap}>



        {/* <div className={styl.hajjpkgtableinumrah}>
          <p className={styl.hajjnewpkgHeading}>HAJ 2023 Tentative Pkg</p>
          <p className={styl.hajjnewpkgSubHeading}>SHIFTING PACKAGE 35 – 40 Days</p>
          <div className={styl.greenUnderline}></div>
          <div className={styl.hajjnewpkgInfo}>
            <div className={styl.hajjnewpktinfocard}>
              <p><span>Departure :</span><br></br> INSHALLAH on 21st June 2023 (DEL – JED (Direct Flight)</p>
            </div>
            <div className={styl.hajjnewpktinfocard}>
              <p><span>Arrival  :</span><br></br> 28 Jul 2023 (MED – JED – DEL / MED – RUH - DEL / JED DEL)</p>
            </div>
          </div>


          <div className={styl.overflowX}>
            <table className={styl.table}>
              <tr className={styl.tableHeadHajj}>

                <td>Room Capacity</td>
                <td>4/5 Bed Sharing</td>
                <td>3 Bed Sharing</td>
                <td>2 Bed Sharing</td>

              </tr>

              <tr className={styl.oddTr}>
                <td>Package Cost</td>
                <td>6,50,000/-</td>
                <td>7,30,000/-</td>
                <td>7,65,000/-</td>
              </tr>
            </table>
          </div>
          <p className={styl.hajjnewpkgSubHeadingWarn}>(G.S.T. 5% And 5% TCS Extra and any Other Tax by Saudi Govt. Is applicable.)</p>

          <Link href="/hajjPackage#haj2"><a><button className={styl.newpkgbutton}>Click For More Details</button></a></Link>
        </div>

        <div className={styl.hajjpkgtableinumrah}>
          <p className={styl.hajjnewpkgHeading}>HAJ 2023 Tentative Pkg</p>
          <p className={styl.hajjnewpkgSubHeading}>17/18 Days Package</p>
          <div className={styl.greenUnderline}></div>
          <div className={styl.hajjnewpkgInfo}>
            <div className={styl.hajjnewpktinfocard}>
              <p><span>Departure :</span><br></br> INSHALLAH on 20th/ 21stJUNE 2023 (By Saudi Airlines or Any other airlines)</p>
            </div>
            <div className={styl.hajjnewpktinfocard}>
              <p><span>Arrival  :</span><br></br> 9th / 10th July 2023 </p>
            </div>
          </div>

          <div className={styl.overflowX}>
            <table className={styl.table}>
              <tr className={styl.tableHeadHajj}>

                <td>Room Capacity</td>
                <td>4/5 Bed Sharing</td>
                <td>3 Bed Sharing</td>
                <td>2 Bed Sharing</td>
                <td>Additional Services
                </td>

              </tr>

              <tr className={styl.oddTr}>
                <td>Package Cost</td>
                <td>6,95,000/-</td>
                <td>7,75,000/-</td>
                <td>8,50,000/-</td>
                <td style={{ textAlign: "center", verticalAlign: "middle" }} rowSpan={3}>43000/-
                  (Business Class If Required By Guest)
                </td>
              </tr>

              <tr className={styl.oddTr}>
                <td>GST & TCS <br></br> (5% +5%)</td>
                <td>69500/-</td>
                <td>77500/-</td>
                <td>85000/-</td>
              </tr>

              <tr className={styl.oddTr}>
                <td>Total Cost</td>
                <td>7,64,500/-</td>
                <td>8,52,500/-</td>
                <td>9,35,000/-</td>
              </tr>
            </table>
          </div>
          <p className={styl.hajjnewpkgSubHeadingWarn}>(G.S.T. 5% And 5% TCS Extra and any Other Tax by Saudi Govt. Is applicable.)</p>


          <Link href="/hajjPackage#haj1"><a><button className={styl.newpkgbutton}>Click For More Details</button></a></Link>
        </div> */}

        {/* <div className={styl.newziyaratpkg}>
          <div className={styl.newziyaratpkgwrapper}>
            <p className={styl.newziyaratpkgheading}>
              Iraq Ziyarat (10 Nights 11 Days)
            </p>
            <div className={styl.newiraqpkguls}>
              <div className={styl.newirajpkglefttul}>
                <p className={styl.newziyaratpkgsubheading}>Schedule</p>
                <ul className={umrahStyles.ul}>

                  <li>
                    <div className={umrahStyles.img}>
                      <Image src={tick} alt="tick icon"></Image>
                    </div>
                    <p>Baghdad / Kazmain Shareef 5 Nights</p>
                  </li>
                  <li>
                    <div className={umrahStyles.img}>
                      <Image src={tick} alt="tick icon"></Image>
                    </div>
                    <p>Karbala E Maullah 3 Nights</p>
                  </li>
                  <li>
                    <div className={umrahStyles.img}>
                      <Image src={tick} alt="tick icon"></Image>
                    </div>
                    <p>Najaf E Ashraf 2 Nights</p>
                  </li>

                </ul>
              </div><div>
                <p className={styl.newziyaratpkgsubheading}>Schedule</p>
                <ul className={umrahStyles.ul}>

                  <li>
                    <div className={umrahStyles.img}>
                      <Image src={tick} alt="tick icon"></Image>
                    </div>
                    <p>Air Ticket & Visa</p>
                  </li>
                  <li>
                    <div className={umrahStyles.img}>
                      <Image src={tick} alt="tick icon"></Image>
                    </div>
                    <p>Hotels Near Roza</p>
                  </li>
                  <li>
                    <div className={umrahStyles.img}>
                      <Image src={tick} alt="tick icon"></Image>
                    </div>
                    <p>AC Transportation </p>
                  </li>
                  <li>
                    <div className={umrahStyles.img}>
                      <Image src={tick} alt="tick icon"></Image>
                    </div>
                    <p>All Indian Meals</p>
                  </li>
                  <li>
                    <div className={umrahStyles.img}>
                      <Image src={tick} alt="tick icon"></Image>
                    </div>
                    <p>Ziyarat</p>
                  </li>


                </ul>
              </div>
            </div>
          </div>
          <div className={styl.newirajpkgfooter}>
            <div className={styl.newirajpkgprice}><p className={styl.newirajpkgpricespan} >Pkg Cost</p><p> Rs. 90,000/-</p></div>
            <div className={styl.newiraqcontact}>
              <div className={styl.newiraqpkgicon}>
                <BsFillTelephoneFill></BsFillTelephoneFill>
              </div>
              <p className={styl.newirajpkgbtntext}>Call Us Now 9205184001</p>
            </div>
          </div>
        </div> */}

      </div>
    
        {/* <div className={styl.hajjPkgContainer}>
        <div className={styl.hajjPkgBox}>
          <div className={styl.HajjBoxLeft}>
            <h3>HAJ 2023 - Tentative Haj 2023 Pkg</h3>
            <p className={styl.tag}>SHORT PERIOD PACKAGE <strong>17/18 Days</strong></p>
            <div className={styl.details}>
              <div className={styl.detailsLeft}>
                <p>Departure 21st June 2023</p>
                <div className={styl.circle}></div>
                <p>Arrival 10 Jul 2023</p>
              </div>
              <div className={styl.detailsRight}>
                <Link href="/hajjPackage#haj1"><a><button>More Details</button></a></Link>
              </div>
            </div>
          </div>

        </div>
        <div className={styl.hajjPkgBox}>
          <div className={styl.HajjBoxLeft}>
            <h3>HAJ 2023 - Tentative Haj 2023 Pkg</h3>
            <p className={styl.tag}>SHIFTING PACKAGE <strong>35 – 40 Days</strong></p>
            <div className={styl.details}>
              <div className={styl.detailsLeft}>
                <p>Departure 21st June 2023</p>
                <div className={styl.circle}></div>
                <p>Arrival 28 Jul 2023</p>
              </div>
              <div className={styl.detailsRight}>
                <Link href="/hajjPackage#haj2"><a><button>More Details</button></a></Link>
              </div>
            </div>
          </div>

        </div>
      </div> */}

        {/* <div className={styl.hajjpkgtableinumrah}>
        <table className={styl.table}>
          <tr className={styl.tableHead}>

            <td colSpan={2} className={styl.tableHeading}>Feature</td>
            <td>Tentative Haj 2023 Shifting Package</td>
            <td>Short Term Economy Class</td>

          </tr>

          <tr className={styl.oddTr}>
            <td colSpan={2} className={styl.tableHeading}>Number of Days</td>
            <td>35/40 Days</td>
            <td>17/18 days</td>
          </tr>

          <tr className={styl.evenTr}>
            <td style={{ verticalAlign: "middle" }} rowSpan={3} className={`${styl.tableHeading} ${styl.pricingHajjInTable}`}>Pricing</td>
            <td className={styl.tableHeading}>4/5 Sharing</td>
            <td>6,50,000/-</td>
            <td>6,95,000/-</td>
          </tr>

          <tr className={styl.evenTr}>
            <td className={styl.tableHeading}>3 Beds in a room</td>
            <td>7,30,000/-</td>
            <td>7,75,000/-</td>
          </tr>

          <tr className={styl.evenTr}>
            <td className={styl.tableHeading}>2 Beds in a room</td>
            <td>7,65,000/-</td>
            <td>8,50,000/-</td>
          </tr>

          <tr className={styl.oddTr}>
            <td colSpan={2} className={styl.tableHeading}>Departure from Delhi</td>
            <td>21st June 2023 DEL to JED (Direct Flight)</td>
            <td> 20th/21st JUNE DEL to JED (Direct Flight)</td>
          </tr>

          <tr className={styl.evenTr}>
            <td colSpan={2} className={styl.tableHeading}>Package Includes</td>
            <td><Link href="/hajjPackage#haj2"><a style={{ fontWeight: "600", color: "blue", textDecoration: "underline" }}>Click More Details</a></Link></td>
            <td><Link href="/hajjPackage#haj1"><a style={{ fontWeight: "600", color: "blue", textDecoration: "underline" }}>Click More Details</a></Link></td>
          </tr>

          <tr className={styl.oddTr}>
            <td colSpan={2} className={styl.tableHeading}>Package Does not Includes</td>
            <td><Link href="/hajjPackage#haj2"><a style={{ fontWeight: "600", color: "blue", textDecoration: "underline" }}>Click More Details</a></Link></td>
            <td><Link href="/hajjPackage#haj1"><a style={{ fontWeight: "600", color: "blue", textDecoration: "underline" }}>Click More Details</a></Link></td>
          </tr>
        </table>
      </div> */}

        {/* <div className={`${styl.hajjpkgtableinumrah} ${styl.dsiplayonMobile}`}>
        <table className={styl.table}>
          <tr className={styl.tableHead}>

            <td className={styl.tableHeading}>Feature</td>
            <td>Tentative Haj 2023 Shifting Package</td>
            <td>Short Term Economy Class</td>

          </tr>

          <tr className={styl.oddTr}>
            <td className={styl.tableHeading}>Number of Days</td>
            <td>35/40 Days</td>
            <td>17/18 days</td>
          </tr>

          <tr className={styl.evenTr}>
            <td className={styl.tableHeading}>4/5 Sharing</td>
            <td>6,50,000/-</td>
            <td>6,95,000/-</td>
          </tr>

          <tr className={styl.evenTr}>
            <td className={styl.tableHeading}>3 Beds in a room</td>
            <td>7,30,000/-</td>
            <td>7,75,000/-</td>
          </tr>

          <tr className={styl.evenTr}>
            <td className={styl.tableHeading}>2 Beds in a room</td>
            <td>7,65,000/-</td>
            <td>8,50,000/-</td>
          </tr>

          <tr className={styl.oddTr}>
            <td className={styl.tableHeading}>Departure from Delhi</td>
            <td>21st June 2023 DEL to JED (Direct Flight)</td>
            <td> 20th/21st JUNE DEL to JED (Direct Flight)</td>
          </tr>

          <tr className={styl.evenTr}>
            <td className={styl.tableHeading}>Package Includes</td>
            <td><Link href="/hajjPackage#haj2"><a style={{ fontWeight: "600", color: "blue", textDecoration: "underline" }}>Click More Details</a></Link></td>
            <td><Link href="/hajjPackage#haj1"><a style={{ fontWeight: "600", color: "blue", textDecoration: "underline" }}>Click More Details</a></Link></td>
          </tr>

          <tr className={styl.oddTr}>
            <td className={styl.tableHeading}>Package Does not Includes</td>
            <td><Link href="/hajjPackage#haj2"><a style={{ fontWeight: "600", color: "blue", textDecoration: "underline" }}>Click More Details</a></Link></td>
            <td><Link href="/hajjPackage#haj1"><a style={{ fontWeight: "600", color: "blue", textDecoration: "underline" }}>Click More Details</a></Link></td>
          </tr>
        </table>
      </div> */}





        <div id="umrah">
          <h1 className={styl.urhamHead}>Umrah Packages</h1>
          {pckages && <UmrahPackageCollector packages={pckages}></UmrahPackageCollector>}
          <div style={{width:"50%"}}>
          <div style={{height:"100%", borderRadius: "10px", backgroundColor: "#00665A", padding:"0px" }} className={`${fs.footerup} flex-class`}>
         
        </div>
          </div>
        </div>

        <h1 className={styl.urhamHead}>Iraq Ziyarat Packages</h1>
      <div className={styl.newziyaratpkg}>
      <div className={umrahStyles.wrapMain}>
        {/* <div className={style.cross}></div> */}
        <div className={umrahStyles.wrapper}>

          <div className={`${umrahStyles.top} ${umrahStyles.iraq}`}>
            <h1 className={umrahStyles.heading}>Iraq Ziyarat (10 Nights 11 Days)</h1>
            <div className={umrahStyles.date}>
              <p>Departure on: 12 July 2023</p>
            </div>
            <ul className={umrahStyles.ul}>
              {/* <div className={styl.newiraqpkguls}>
                <div className={styl.newirajpkglefttul}>
                  <p className={styl.newziyaratpkgsubheading}>Schedule</p>
                  <ul className={umrahStyles.ul}>

                    <li>
                      <div className={umrahStyles.img}>
                        <Image src={tick} alt="tick icon"></Image>
                      </div>
                      <p>Baghdad / Kazmain Shareef 5 Nights</p>
                    </li>
                    <li>
                      <div className={umrahStyles.img}>
                        <Image src={tick} alt="tick icon"></Image>
                      </div>
                      <p>Karbala E Maullah 3 Nights</p>
                    </li>
                    <li>
                      <div className={umrahStyles.img}>
                        <Image src={tick} alt="tick icon"></Image>
                      </div>
                      <p>Najaf E Ashraf 2 Nights</p>
                    </li>

                  </ul>
                </div><div className={styl.hideonmobile}>
                  <p className={styl.newziyaratpkgsubheading}>Services</p>
                  <ul className={umrahStyles.ul}>

                    <li>
                      <div className={umrahStyles.img}>
                        <Image src={tick} alt="tick icon"></Image>
                      </div>
                      <p>Air Ticket & Visa</p>
                    </li>
                    <li>
                      <div className={umrahStyles.img}>
                        <Image src={tick} alt="tick icon"></Image>
                      </div>
                      <p>Hotels Near Roza</p>
                    </li>
                    <li>
                      <div className={umrahStyles.img}>
                        <Image src={tick} alt="tick icon"></Image>
                      </div>
                      <p>AC Transportation </p>
                    </li>
                    <li>
                      <div className={umrahStyles.img}>
                        <Image src={tick} alt="tick icon"></Image>
                      </div>
                      <p>All Indian Meals</p>
                    </li>
                    <li>
                      <div className={umrahStyles.img}>
                        <Image src={tick} alt="tick icon"></Image>
                      </div>
                      <p>Ziyarat</p>
                    </li>


                  </ul>
                </div>
              </div> */}
                    <li>
                        <div className={umrahStyles.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>Baghdad / Kazmain 5 Nights</p>
                    </li>
                    <li>
                        <div className={umrahStyles.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>Najaf 2 Nights, Karbala 3 Nights</p>
                    </li>
                    <li>
                        <div className={umrahStyles.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>Air Ticket & Visa</p>
                    </li>
                    <li>
                        <div className={umrahStyles.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>Hotels Near Roza</p>
                    </li>
                    <li>
                        <div className={umrahStyles.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>AC Transportation</p>
                    </li>
                    <li>
                        <div className={umrahStyles.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>All Indian Meals</p>
                    </li>
        
            </ul>
          </div>

          <div className={umrahStyles.bottom}>
            <p className={umrahStyles.semiBold}>At just ₹ 90,000/-</p>
          <Link href="/iraqZiyarat"><a><button onClick={() => { }} className={umrahStyles.btn}>More Details</button></a></Link>
          </div>
        </div>
        </div>

       

        </div>
   




        <br></br>
        <br></br>
        <div style={{ borderRadius: "10px" }} className={`${fs.footerup} flex-class`}>
          <div className={fs.left}>
            <p className={fs.title}>Contact Us for more information</p>
            <p className={fs.text}>Planning for Umrah? Book your umrah package with us as we provide the highest-quality Umrah packages from India at amazingly reasonable prices, ensuring that all of your travel needs are met to your satisfaction.</p>
            <p className={fs.text} style={{ marginTop: "10px", letterSpacing: "1px", fontSize: "1.2rem" }}><strong>Email:  aatravels1170@gmail.com</strong></p>
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
           <div style={{width:"100%",paddingBottom:"20px"}} className={""}>
            <p className={fs.title}>Umrah Visa</p>
            <p className={fs.text}>90 Days Umrah Visa or subject to change in days as per the Saudi Arabia Govt guidelines. Requirement of E visa Given Below</p>
            <p className={fs.text} style={{ marginTop: "20px", letterSpacing: "1px", fontSize: "1rem", display:"flex" }}><div><Image height={20} width={20} src={tick} alt="tick icon"></Image></div><strong style={{marginLeft:"10px", marginBottom:"10px"}}>Passport minimum 6 Months validity</strong></p>
            <p className={fs.text} style={{ marginTop: "0px", letterSpacing: "1px", fontSize: "1rem", display:"flex" }}><div><Image height={20} width={20} src={tick} alt="tick icon"></Image></div><strong style={{marginLeft:"10px", marginBottom:"10px"}}>2 Passport size photo white background without Specks</strong></p>
            <p className={fs.text} style={{ marginTop: "0px", letterSpacing: "1px", fontSize: "1rem", display:"flex" }}><div><Image height={20} width={20} src={tick} alt="tick icon"></Image></div><strong style={{marginLeft:"10px", marginBottom:"10px"}}>Vaccination Certificate (both Doses)</strong></p>
            <p className={fs.text} style={{ marginTop: "0px", letterSpacing: "1px", fontSize: "1rem", display:"flex" }}><div><Image height={20} width={20} src={tick} alt="tick icon"></Image></div><strong style={{marginLeft:"10px", marginBottom:"10px"}}>Aadhar card</strong></p>
          </div>
          {/* <h1 className={style.articletitle}>Umrah Visa</h1>
          <p className={style.newtext}>    90 Days Umrah Visa or subject to change in days as per the Saudi Arabia Govt guidelines. Requirement of E visa Given Below </p>
          <p className={style.newtext}>
              <ul>
                <li>Passport minimum 6 Months validity</li>
                <li>2 Passport size photo white background without Specks</li>
                <li>Vaccination Certificate (both Doses)</li>
                <li>Aadhar card</li>
              </ul>
          </p> */}
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
          {/* <div className={styl.bodyImagemb2}></div> */}
          <Image src={bady} ></Image>
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
        <div style={{ zIndex: "10", display: "flex", position: "fixed", bottom: "13px", right: "13px" }}>

          <a target="blank" href="tel:+919205184001"><button
            style={{
              backgroundColor: "#2192FF",
              padding: "15px",
              border: "none",
              display: "flex",
              justifyContent: "center",
              zIndex: "10",
              alignItems: "center",
              borderRadius: "100%"
            }}><Image width={40} height={40} src={phone} alt="dkc"></Image></button></a>
          <a target="blank" href="https://wa.me/9811042458"><button
            style={{
              backgroundColor: "#25D366",
              marginLeft: "10px",
              padding: "15px",
              zIndex: "10",
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100%"
            }}><Image width={40} height={40} src={whatsApp} alt="dkc"></Image></button></a>
        </div>
      </>
      );
};

      export default UmrahPackage;
