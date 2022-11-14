import Head from "next/head";
import Headings from "../comps/blogs/Headings";
import style from "../styles/Blog.module.css"
import Article from "../comps/Article"
import Img1 from "../public/images/aboutus/aboutimg2.png";
import InfoCardStretch from "../comps/InfoCardStretch/InfoCardStretch";
import styles from "../styles/Hero.module.css";
import SliderSingle from "../comps/Packages/SliderSingle";
import firebase from 'firebase/app';
import Script from 'next/script'
import { useEffect, useState } from "react";
import "firebase/firestore";


const AboutUs = () => {
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
    
      db.collection("fares").orderBy("id","desc").onSnapshot((querySnapshot) => {
        const inpack = [];
        querySnapshot.forEach((doc) => {
          inpack.push(doc.data());
        });
        setPack(inpack);
      });    
    }, [db])
    return ( <>
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
      content="Best Tour and Travels Agency in Delhi. Saudi Arabia Tour Package and Hajj Umrah Tour Package available. We are your economic vaccation planners. We have trips available all over India. Features including Hotel Booking , Travel Planning etc"
    />
      <title>Al Azeem Tour & Travels - Affordable Flight Tickets</title>
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
        <div className={`${styles.body} body`}>
        {pckages && pckages.forEach((p)=>{
          console.log(p);
        document.querySelector('.body').innerHTML += p.html;
        console.log("1");
      })}
        {/* <Headings h1="New Delhi to Dammam (via Dubai)"></Headings>
        <div className={style.tablewrap}>
        <table className={`${style.p} ${style.table}`}>
            <tr className={style.tr}>
              <th className={style.th}>Airlines</th>
              <th className={style.th}>Flight No.(Rs)</th>
              <th className={style.th}>Fare Rs.</th>
              <th className={style.th}>Dates</th>
              <th className={style.th}>Dep Time & Sector</th>
              <th className={style.th}>Arri Time & Sector</th>
              <th className={style.th}>Seats</th>
            </tr>
            
            <tr className={style.tr}>
            <td className={style.td}>FLYDUBAI</td>
            <td className={style.td}>FZ-452</td>
            <td className={style.td}>25,500</td>
            <td className={style.td}>21 JAN</td>
            <td className={style.td}>DEL 11:50</td>
            <td className={style.td}>DXB 14:15</td>
            <td className={style.td}>15</td>

            </tr>

            <tr className={style.tr}>
            <td className={style.td}>FLYDUBAI</td>
            <td className={style.td}>FZ-8135</td>
            <td className={style.td}></td>
            <td className={style.td}>21 JAN</td>
            <td className={style.td}>DXB 18:10</td>
            <td className={style.td}>DMM 18:30</td>
            <td className={style.td}></td>
            </tr>

           

           
            
            <tr className={style.tr}>
            <td className={style.td}>FLYDUBAI</td>
            <td className={style.td}>FZ-452</td>
            <td className={style.td}>25,500</td>

            <td className={style.td}>27 JAN</td>
            <td className={style.td}>DEL 11:50</td>
            <td className={style.td}>DXB 14:15</td>
            <td className={style.td}>15</td>

            </tr>

            <tr className={style.tr}>
            <td className={style.td}>FLYDUBAI</td>
            <td className={style.td}>FZ-8135</td>
            <td className={style.td}></td>
            <td className={style.td}>27 JAN</td>
            <td className={style.td}>DXB 18:10</td>
            <td className={style.td}>DMM 18:30</td>
            <td className={style.td}></td>
            </tr>

            <tr className={style.tr}>
            <td className={style.td}>FLYDUBAI</td>
            <td className={style.td}>FZ-452</td>
            <td className={style.td}>25,500</td>

            <td className={style.td}>28 JAN</td>
            <td className={style.td}>DEL 11:50</td>
            <td className={style.td}>DXB 14:15</td>
            <td className={style.td}>15</td>

            </tr>

            <tr className={style.tr}>
            <td className={style.td}>FLYDUBAI</td>
            <td className={style.td}>FZ-8135</td>
            <td className={style.td}></td>
            <td className={style.td}>28 JAN</td>
            <td className={style.td}>DXB 18:10</td>
            <td className={style.td}>DMM 18:30</td>
            <td className={style.td}></td>
            </tr>

        </table></div>
        <br></br>
<br></br>
<br></br>
<br></br>
<br></br> */}
{/*         
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
<br></br> */}
        {/* <Headings h1="New Delhi to Riyadh"></Headings>
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
<br></br> */}
        

        {/* <Headings h1="New Delhi to Dammam"></Headings>
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
<br></br> */}

        {/* <Headings h1="Lucknow to Riyadh"></Headings>
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
<br></br> */}


        {/* <Headings h1="New Delhi to Dammam (via Dubai)"></Headings>
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
<br></br> */}

        {/* <Headings h1="New Delhi to Jeddah (via Dubai)"></Headings>
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
<br></br>      */}

        {/* <Headings h1="New Delhi to Jeddah (via Dubai)"></Headings>
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
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
</div> */}
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