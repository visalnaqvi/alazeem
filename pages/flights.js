import Head from "next/head";
import Headings from "../comps/blogs/Headings";
import style from "../styles/Blog.module.css"
import Article from "../comps/Article"
import Img1 from "../public/images/aboutus/aboutimg2.png";
import InfoCardStretch from "../comps/InfoCardStretch/InfoCardStretch";
import styles from "../styles/Hero.module.css";
import SliderSingle from "../comps/Packages/SliderSingle";
import firebase from 'firebase/app';
import { useEffect, useState } from "react";

const AboutUs = () => {
    const infoText = "We believe in open and honest communications - and no hidden agendas. We believe that everyone will do the right thing and act with integrity and fairness We respect each others time and effort We treat others the way we want to be treated We are always here to help each other experience the best in travel"
    const InfoHeading = "In order to promote and reward excellence in travel, our community is guided by the following core values:"
    const headingMain = 'Our foundation';
    const textMain ="We present before you AL-AZEEM TOUR & TRAVELS as one stop platform for all your travel needs..With a focus on customer service, at Al-Azeem Tour we offer a fantastic range of trips to meet your budget,ambitions and expectations. All of us here in the Al-Azeem team, work tirelessly to ensure that your trip is acarefree, successful and enjoyable experience from start to finish. That means attention to your travel plans,accommodation, specialist inclusions and leisure time as well as to health and safety, financial protection andtravel insurance.Specialist knowledge and experience is only half of the story. What distinguishes ous is our passion for thetrips we organise, for the destinations that we feature:"
    const firstParaHeading = "What we do";
    const firstParaText = "We are very excited to introduce AL - AZEEM TOUR & TRAVELS. as the one stop provider for all your travel needs and requirements. We label ourselves as leading, innovative, and highly efficient and look forward to demonstrate these qualities at the earliest possible chance. Since established our primary aim was to provide quality travel services to business and leisure travelers. The agency continued to grow and branch out its interests to rise as one of the exponents in the travel industry. At Al Azeem, we excel at helping you get your vacation planned. Not just any vacation, but exceptional vacations filled with inspiring and life-enriching experiences.";
    const ourvaluesheading = "Our values and community";
    const ourvaluestext = "Our community is one in which discerning travelers seek the best in quality, authenticity and value, and travel companies strive to deliver the same. The best travel specialists receive the recognition they deserve and consequently get more business. Travelers and travel specialists come to Al Azeem to help each other experience the very best in travel - from both their perspectives.";
    // const [pckages, setPack] = useState();
    // const config={
    //   apiKey: "AIzaSyBwGQoCe0wTlR61fueDKA0yA4n5xmMfPrg",
    //   authDomain: "buttons-2dc4a.firebaseapp.com",
    //   databaseURL: "https://buttons-2dc4a-default-rtdb.firebaseio.com",
    //   projectId: "buttons-2dc4a",
    //   storageBucket: "buttons-2dc4a.appspot.com",
    //   messagingSenderId: "241629842019",
    //   appId: "1:241629842019:web:6c248c713e6a27cd494656",
    //   measurementId: "G-QK6TC8JTHZ"
    // }
    
    // if(!firebase.apps.length){
    //   firebase.initializeApp(config)
      
    // }else{ firebase.app() };
    // const db = firebase.firestore()
    // useEffect(()=>{
    
    // db.collection("packages")
    // .onSnapshot((querySnapshot) => {
    //       const inpack = []
    //       querySnapshot.forEach((doc) => {
    //           inpack.push(doc.data());
    //           });
    //           setPack(inpack)
    // })
    
    // }, [])
    return ( <>
      <Head>
      <title>Al Azeem Tour & Travels - Affordable Flight Tickets</title>
      <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
        <meta
      name="description"
      content="Best Tour and Travels Agency in Delhi. Saudi Arabia Tour Package and Hajj Umrah Tour Package available. We are your economic vaccation planners. We have trips available all over India. Features including Hotel Booking , Travel Planning etc"
    />
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      </Head>
      <div className={`${style.wrapperd} dflex-class`}>
      <div className={style.dleft}>
      <div className={`${styles.slide} ${styles.flight} bg-class flex-class`}>
            
            <div className={styles.content}>
                <p className={styles.heading}>100% Best Rates Guaranteed</p>
                <p className={styles.text}>A Better Way To Travel.We are the one stop provider for all your travel needs and requirements</p>
            </div>
            <div className={styles.shade}></div>
        </div>
        


        <br></br>
<br></br>
<br></br>
<br></br>
<br></br>
        <div className={styles.body}>
        <Headings h1="International  tickets from Lucknow"></Headings>
        <div className={style.tablewrap}>
        <table className={`${style.p} ${style.table}`}>
            <tr className={style.tr}>
              <th className={style.th}>Airlines</th>
              <th className={style.th}>Fare Rs.</th>
              <th className={style.th}>Sector</th>
              <th className={style.th}>Dates</th>
              <th className={style.th}>Dep. Time</th>
              <th className={style.th}>Arrival Time</th>
            </tr>
            
            <tr className={style.tr}>
            <td className={style.td}>VISTARA</td>
            <td className={style.td}>15,500</td>
            <td className={style.td}>DEL DXB</td>
            <td className={style.td}>19/20 JAN</td>
            <td className={style.td}>21.45</td>
            <td className={style.td}>00.30</td>

            </tr>

            <tr className={style.tr}>
            <td className={style.td}>AIR INDIA EXPRESS </td>
            <td className={style.td}>20,000</td>
            <td className={style.td}>VNS SHJ</td>
            <td className={style.td}>21/27 JAN</td>
            <td className={style.td}>16.15</td>
            <td className={style.td}>19.00</td>

            </tr>

    
           
        </table>
        </div>
        <br></br>
<br></br>
<br></br>
<br></br>
<br></br>
        <Headings h1="New Delhi to Riyadh"></Headings>
        <div className={style.tablewrap}>
        <table className={`${style.p} ${style.table}`}>
            <tr className={style.tr}>
              <th className={style.th}>Airlines</th>
              <th className={style.th}>Flight No.</th>
              <th className={style.th}>Dates</th>
              <th className={style.th}>Dep Time & Sector</th>
              <th className={style.th}>Arri Time & Sector</th>
              <th className={style.th}>Seats</th>
            </tr>
            
            <tr className={style.tr}>
            <td className={style.td}>GOAIR</td>
            <td className={style.td}>G8-1521</td>
            <td className={style.td}>21 JAN</td>
            <td className={style.td}>DEL 22:50</td>
            <td className={style.td}>RUH 1:10</td>
            <td className={style.td}>7</td>

            </tr>

            <tr className={style.tr}>
              <td className={style.td}>GOAIR</td>
              <td className={style.td}>G8-1521</td>
              <td className={style.td}>22 JAN</td>
              <td className={style.td}>DEL 22:50</td>
              <td className={style.td}>RUH 1:10</td>
              <td className={style.td}>15</td>
            </tr>

            <tr className={style.tr}>
              <td className={style.td}>GOAIR</td>
              <td className={style.td}>G8-1521</td>
              <td className={style.td}>28 JAN</td>
              <td className={style.td}>DEL 22:50</td>
              <td className={style.td}>RUH 1:10</td>
              <td className={style.td}>10</td>
            </tr>

            <tr className={style.tr}>
              <td className={style.td}>GOAIR</td>
              <td className={style.td}>G8-1521</td>
              <td className={style.td}>29 JAN</td>
              <td className={style.td}>DEL 22:50</td>
              <td className={style.td}>RUH 1:10</td>
              <td className={style.td}>10</td>
            </tr>
             
           
           
        </table>
        </div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
        

        <Headings h1="New Delhi to Dammam"></Headings>
        <div className={style.tablewrap}>
        <table className={`${style.p} ${style.table}`}>
            <tr className={style.tr}>
              <th className={style.th}>Airlines</th>
              <th className={style.th}>Flight No.(Rs)</th>
              <th className={style.th}>Dates</th>
              <th className={style.th}>Dep Time & Sector</th>
              <th className={style.th}>Arri Time & Sector</th>
              <th className={style.th}>Seats</th>
            </tr>
            
            <tr className={style.tr}>
            <td className={style.td}>GOAIR</td>
            <td className={style.td}>G8-1521</td>
            <td className={style.td}>21 JAN</td>
            <td className={style.td}>DEL 22:50</td>
            <td className={style.td}>RUH 1:10</td>
            <td className={style.td}>7</td>

            </tr>

            <tr className={style.tr}>
              <td className={style.td}>GOAIR</td>
              <td className={style.td}>G8-1533</td>
              <td className={style.td}>25 JAN</td>
              <td className={style.td}>DEL 21:30</td>
              <td className={style.td}>DMM 23:15</td>
              <td className={style.td}>6</td>
            </tr>
           
        </table></div>

        <br></br>
<br></br>
<br></br>
<br></br>
<br></br>

        <Headings h1="Lucknow to Riyadh"></Headings>
        <div className={style.tablewrap}>
        <table className={`${style.p} ${style.table}`}>
            <tr className={style.tr}>
              <th className={style.th}>Airlines</th>
              <th className={style.th}>Flight No.(Rs)</th>
              <th className={style.th}>Dates</th>
              <th className={style.th}>Dep Time & Sector</th>
              <th className={style.th}>Arri Time & Sector</th>
              <th className={style.th}>Seats</th>
            </tr>
            
            <tr className={style.tr}>
            <td className={style.td}>GOAIR</td>
            <td className={style.td}>G8-1522</td>
            <td className={style.td}>29 JAN</td>
            <td className={style.td}>LKO 9:25</td>
            <td className={style.td}>RUH 12:10</td>
            <td className={style.td}>5</td>

            </tr>

            <tr className={style.tr}>
              <td className={style.td}>GOAIR</td>
              <td className={style.td}>G8-1522</td>
              <td className={style.td}>31 JAN</td>
              <td className={style.td}>LKO 9:25</td>
              <td className={style.td}>RUH 12:10</td>
              <td className={style.td}>9</td>
            </tr>

        </table></div>
        <br></br>
<br></br>
<br></br>
<br></br>
<br></br>


        <Headings h1="New Delhi to Dammam (via Dubai)"></Headings>
        <div className={style.tablewrap}>
        <table className={`${style.p} ${style.table}`}>
            <tr className={style.tr}>
              <th className={style.th}>Airlines</th>
              <th className={style.th}>Flight No.(Rs)</th>
              <th className={style.th}>Dates</th>
              <th className={style.th}>Dep Time & Sector</th>
              <th className={style.th}>Arri Time & Sector</th>
              <th className={style.th}>Seats</th>
            </tr>
            
            <tr className={style.tr}>
            <td className={style.td}>FLYDUBAI</td>
            <td className={style.td}>FZ-452</td>
            <td className={style.td}>21 JAN</td>
            <td className={style.td}>DEL 11:50</td>
            <td className={style.td}>DXB 14:15</td>
            <td className={style.td}>15</td>

            </tr>

            <tr className={style.tr}>
            <td className={style.td}>FLYDUBAI</td>
            <td className={style.td}>FZ-8135</td>
            <td className={style.td}>21 JAN</td>
            <td className={style.td}>DXB 18:10</td>
            <td className={style.td}>DMM 18:30</td>
            <td className={style.td}></td>
            </tr>

        </table></div>
        <br></br>
<br></br>
<br></br>
<br></br>
<br></br>

        <Headings h1="New Delhi to Jeddah (via Dubai)"></Headings>
        <div className={style.tablewrap}>
        <table className={`${style.p} ${style.table}`}>
            <tr className={style.tr}>
              <th className={style.th}>Airlines</th>
              <th className={style.th}>Flight No.(Rs)</th>
              <th className={style.th}>Dates</th>
              <th className={style.th}>Dep Time & Sector</th>
              <th className={style.th}>Arri Time & Sector</th>
              <th className={style.th}>Seats</th>
            </tr>
            
            <tr className={style.tr}>
            <td className={style.td}>FLYDUBAI</td>
            <td className={style.td}>FZ-452</td>
            <td className={style.td}>18 JAN</td>
            <td className={style.td}>DEL 11:50</td>
            <td className={style.td}>DXB 14:15</td>
            <td className={style.td}>15</td>

            </tr>

            <tr className={style.tr}>
            <td className={style.td}>FLYDUBAI</td>
            <td className={style.td}>FZ-8261</td>
            <td className={style.td}>19 JAN</td>
            <td className={style.td}>DXB 8:05</td>
            <td className={style.td}>JED 10:15</td>
            <td className={style.td}></td>
            </tr>

        </table></div>

        <br></br>
<br></br>
<br></br>
<br></br>
<br></br>     

        <Headings h1="New Delhi to Jeddah (via Dubai)"></Headings>
        <div className={style.tablewrap}>
        <table className={`${style.p} ${style.table}`}>
            <tr className={style.tr}>
              <th className={style.th}>Airlines</th>
              <th className={style.th}>Flight No.(Rs)</th>
              <th className={style.th}>Dates</th>
              <th className={style.th}>Dep Time & Sector</th>
              <th className={style.th}>Arri Time & Sector</th>
              <th className={style.th}>Seats</th>
            </tr>
            
            <tr className={style.tr}>
            <td className={style.td}>FLYDUBAI</td>
            <td className={style.td}>FZ-452</td>
            <td className={style.td}>27 JAN</td>
            <td className={style.td}>DEL 11:50</td>
            <td className={style.td}>DXB 14:15</td>
            <td className={style.td}>15</td>

            </tr>

            <tr className={style.tr}>
            <td className={style.td}>FLYDUBAI</td>
            <td className={style.td}>FZ-8261</td>
            <td className={style.td}>28 JAN</td>
            <td className={style.td}>DXB 8:05</td>
            <td className={style.td}>JED 10:15</td>
            <td className={style.td}></td>
            </tr>

        </table>

</div>
        </div>
        </div>
        {/* <div className={style.right}>
          <div className={style.heroWrapper}>
          {pckages && <SliderSingle packages = {pckages}></SliderSingle>}  
          </div>
        </div> */}

        <br></br>
<br></br>
<br></br>
<br></br>
<br></br>
</div>

    </> );
}
 
export default AboutUs;