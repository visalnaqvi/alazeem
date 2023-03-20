import Slider from "../comps/SlideUmrah";
import style from "../styles/Article.module.css";
import styl from "../styles/Umrah.module.css";
import Image from "next/image";
import tick from "../public/icons/check.png"
import Head from "next/dist/shared/lib/head";
import { useEffect, useState } from "react";
import UmrahPackageCollector from "../comps/UmrahPackageCollector";
import firebase from 'firebase/app';
import fs from "../styles/Footer.module.css"
import Script from 'next/script'
import "firebase/firestore"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
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

db.collection("umrahPackages").orderBy("id","desc")
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
      <div className={styl.displayBox}>
      </div>
        

      <div className={styl.quicLinks}>
        <p>Quick Link:<a href="#haj1">HAJ 2023 (16 – 20 Days PACKAGE)</a>
        <a href="#haj2">HAJ 2023 (35 – 40 Days PACKAGE)</a>
        <a href="#umrah">Umrah Packages</a></p>
      </div>


       <div className={styl.hajCardWrap} id="haj1"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
        <h1>HAJ 2023 - Tentative Haj 2023 Pkg</h1>
        <p className={styl.tag}>SHORT PERIOD PACKAGE <strong>16 – 20 Days</strong></p>

        <div className={styl.infoWrap}>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Departure</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>INSHALLAH on 21st June 2023 DEL – JED (Direct Flight) </p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Arrival</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>06 Jul 2023 (MED JED DEL OR MED RUH DEL / JED DEL)</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Stay</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>21 JUN TO 02 JUL JABAL AL NOUR DISTANCE 5-6 KM</p>
            </div>
        </div>

      
          <div className={styl.innerWrapLeft}>
          <h2>INCLUSIONS</h2>
          <ul className={styl.nul}>
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>HAJ KIT</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>AIR TICKET ECONOMY CLASS</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>BREAK FAST, LUNCH, DINNER</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>LOCAL TRANSPORT JED AIRPORT TO MAKKA, MADINA, AIRPORT AND LOCAL ZIYARAT MAKKA MADINA</p>
                    </li>   
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>VISA WITH INSURANCE</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>LAUNDRY </p>
                    </li>   
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>ACCOMODATION SHARING BASIS 4 TO 5 PERSON ACCORDING TO HOTEL ARRANGEMENT</p>
                    </li>       
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>HAJ ARCAN UNDER THE GUIDANCE OF ULEMA</p>
                    </li>            
                </ul>

                <h2>PKG EXCULDE</h2>
          <ul className={styl.nul}>
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>QURBANI</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>ANY OTHER EXPENSES WHICH IS NOT MENTIONED IN PACKAGE</p>
                    </li>            
                </ul>
                <h2>DOCUMENTS REQUIRED</h2>
          <ul className={styl.nul}>
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>PASSPORT MINIMUM VALIDILTY ONE YEAR VALIDITY</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>BOTH DOSES VACCINATION CERTIFICATE</p>
                    </li>    
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>4 PASSPORT SIZE PHOTOGRAPH WITH WHITE BACKGORUND</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>PAN CARD</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>ADHAR CARD</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>AGE BELOW 12 YEARS NOT ALLOWED</p>
                    </li>          
                </ul>
          </div>
    
       
        
        </div>
        <div className={styl.right}>
        <h2>5 DAYS Haj PERIOD SCHEDULE</h2>
              <VerticalTimeline lineColor={ "#00C981" } layout={ '1-column-left' }>
      <VerticalTimelineElement
        className={styl.verticalTimelineElement}
        position="right"
        style={{overflow:"hidden",height:"70px",margin:"0",marginBottom:"30px"}}
        contentArrowStyle={{borderRightColor:"#00C981"}}
        contentStyle={ {borderRadius:"4px",background:"#f8f8f8",padding:"0px"} }
        iconStyle={{ background: '#00C981', color: '#fff',height:"10px",width:"10px",marginLeft:"15px" }}
      >
        <div className={styl.timelineCard}>
          <div className={styl.timelineCardTop}>
            <p style={{fontSize:"20px",margin:"0"}}>25 June</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Mina Camp</p>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        style={{overflow:"hidden",height:"100px",margin:"0",marginBottom:"30px"}}
        className={styl.verticalTimelineElement}
        position="right"
        contentArrowStyle={{borderRightColor:"#00C981"}}
        contentStyle={ {paddingLeft:"0px",borderRadius:"4px",background:"#f8f8f8",padding:"0px",lineHeight:"0px"} }
        iconStyle={{ background: '#00C981', color: '#fff',height:"10px",width:"10px",marginLeft:"15px" }}
      >
        <div className={styl.timelineCard}>
          <div className={styl.timelineCardTop}>
            <p style={{fontSize:"20px",margin:"0"}}>27 June</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Arafat camp Night At Muzdalifah Maidan 
    </p>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={styl.verticalTimelineElement}
        style={{overflow:"hidden",height:"70px",margin:"0",marginBottom:"30px"}}
        position="right"
        contentArrowStyle={{borderRightColor:"#00C981"}}
        contentStyle={ {paddingLeft:"0px",borderRadius:"4px",background:"#f8f8f8",padding:"0px",lineHeight:"0px"} }
        iconStyle={{ background: '#00C981', color: '#fff',height:"10px",width:"10px",marginLeft:"15px" }}
      >
        <div className={styl.timelineCard}>
          <div className={styl.timelineCardTop}>
            <p style={{fontSize:"20px",margin:"0"}}>28 - 29 JUNE</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Mina Camp</p>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={styl.verticalTimelineElement}
        position="right"
        style={{overflow:"hidden",height:"70px",margin:"0",marginBottom:"30px"}}
        contentArrowStyle={{borderRightColor:"#00C981"}}
        contentStyle={ {paddingLeft:"0px",borderRadius:"4px",background:"#f8f8f8",padding:"0px",lineHeight:"0px"} }
        iconStyle={{ background: '#00C981', color: '#fff',height:"10px",width:"10px",marginLeft:"15px" }}
      >
        <div className={styl.timelineCard}>
          <div className={styl.timelineCardTop}>
            <p style={{fontSize:"20px",margin:"0"}}>30 JUNE - 1 JUL</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Jabal Al Nour 5-6 KM</p>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={styl.verticalTimelineElement}
        style={{overflow:"hidden",height:"70px",margin:"0",marginBottom:"30px"}}
        position="right"
        contentArrowStyle={{borderRightColor:"#00C981"}}
        contentStyle={ {paddingLeft:"0px",borderRadius:"4px",background:"#f8f8f8",padding:"0px",lineHeight:"0px"} }
        iconStyle={{ background: '#00C981', color: '#fff',height:"10px",width:"10px",marginLeft:"15px" }}
      >
        <div className={styl.timelineCard}>
          <div className={styl.timelineCardTop}>
            <p style={{fontSize:"20px",margin:"0"}}>2 JULY</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Transfer to Madina Hotel Near Haram 200 Mtr. Distance</p>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={styl.verticalTimelineElement}
        position="right"
        style={{overflow:"hidden",height:"100px",margin:"0",marginBottom:"30px"}}
        contentArrowStyle={{borderRightColor:"#00C981"}}
        contentStyle={ {paddingLeft:"0px",borderRadius:"4px",background:"#f8f8f8",padding:"0px",lineHeight:"0px"} }
        iconStyle={{ background: '#00C981', color: '#fff',height:"10px",width:"10px",marginLeft:"15px" }}
      >
        <div className={styl.timelineCard}>
          <div className={styl.timelineCardTop}>
            <p style={{fontSize:"20px",margin:"0"}}>6th JULY</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Departure Madina to Delhi</p>
          </div>
        </div>
      </VerticalTimelineElement>
              </VerticalTimeline>

              <div className={styl.pricing}>
              <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>ROOM CAPACITY</p>
                  <p className={styl.infoText}>PKG COST</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>4/5 SHARING</p>
                  <p className={styl.infoText}>₹ 6,50,000 Per Person</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>3 BED SHARING</p>
                  <p className={styl.infoText}>₹ 7,30,000 Per Person</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>2 BED SHARING</p>
                  <p className={styl.infoText}>₹ 7,65,000 Per Person</p>
            </div>
              </div>
        </div>
        <div className={styl.contact}>
         
            <p className={style.ctag}>CALL US NOW FOR MORE INFORMATION</p>
            <p className={styl.chead}>9205184001, 9811042458</p>
         
        </div>
     
      </div>
    
        
      </div>




      <div className={styl.hajCardWrap} id="haj2"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
        <h1>HAJ 2023 - Tentative Haj 2023 Pkg</h1>
        <p className={styl.tag}>SHIFTING PACKAGE <strong>35 – 40 Days</strong></p>

        <div className={styl.infoWrap}>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Departure</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>INSHALLAH on 21st June 2023 DEL – JED (Direct Flight)</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Arrival</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>28 Jul 2023 (MED – JED – DEL / MED – RUH - DEL / JED DEL)</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Stay</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>21 JUN TO 02 JUL JABAL AL NOUR DISTANCE 5-6 KM</p>
            </div>
        </div>

      
          <div className={styl.innerWrapLeft}>
          <h2>INCLUSIONS</h2>
          <ul className={styl.nul}>
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>HAJ KIT</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>AIR TICKET ECONOMY CLASS</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>BREAK FAST, LUNCH, DINNER</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>LOCAL TRANSPORT JED AIRPORT TO MAKKA, MADINA, AIRPORT AND LOCAL ZIYARAT MAKKA MADINA</p>
                    </li>   
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>VISA WITH INSURANCE</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>LAUNDRY </p>
                    </li>   
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>ACCOMODATION SHARING BASIS 4 TO 5 PERSON ACCORDING TO HOTEL ARRANGEMENT</p>
                    </li>       
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>HAJ ARCAN UNDER THE GUIDANCE OF ULEMA</p>
                    </li>            
                </ul>

                <h2>PKG EXCULDE</h2>
          <ul className={styl.nul}>
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>QURBANI</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>ANY OTHER EXPENSES WHICH IS NOT MENTIONED IN PACKAGE</p>
                    </li>            
                </ul>
                <h2>DOCUMENTS REQUIRED</h2>
          <ul className={styl.nul}>
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>PASSPORT MINIMUM VALIDILTY ONE YEAR VALIDITY</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>BOTH DOSES VACCINATION CERTIFICATE</p>
                    </li>    
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>4 PASSPORT SIZE PHOTOGRAPH WITH WHITE BACKGORUND</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>PAN CARD</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>ADHAR CARD</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>AGE BELOW 12 YEARS NOT ALLOWED</p>
                    </li>          
                </ul>
          </div>
    
       
        
        </div>
        <div className={styl.right}>
        <h2>5 DAYS Haj PERIOD SCHEDULE</h2>
              <VerticalTimeline lineColor={ "#00C981" } layout={ '1-column-left' }>
      <VerticalTimelineElement
        className={styl.verticalTimelineElement}
        position="right"
        style={{overflow:"hidden",height:"70px",margin:"0",marginBottom:"30px"}}
        contentArrowStyle={{borderRightColor:"#00C981"}}
        contentStyle={ {borderRadius:"4px",background:"#f8f8f8",padding:"0px"} }
        iconStyle={{ background: '#00C981', color: '#fff',height:"10px",width:"10px",marginLeft:"15px" }}
      >
        <div className={styl.timelineCard}>
          <div className={styl.timelineCardTop}>
            <p style={{fontSize:"20px",margin:"0"}}>25 June</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Mina Camp</p>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        style={{overflow:"hidden",height:"100px",margin:"0",marginBottom:"30px"}}
        className={styl.verticalTimelineElement}
        position="right"
        contentArrowStyle={{borderRightColor:"#00C981"}}
        contentStyle={ {paddingLeft:"0px",borderRadius:"4px",background:"#f8f8f8",padding:"0px",lineHeight:"0px"} }
        iconStyle={{ background: '#00C981', color: '#fff',height:"10px",width:"10px",marginLeft:"15px" }}
      >
        <div className={styl.timelineCard}>
          <div className={styl.timelineCardTop}>
            <p style={{fontSize:"20px",margin:"0"}}>27 June</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Arafat camp Night At Muzdalifah Maidan 
    </p>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={styl.verticalTimelineElement}
        style={{overflow:"hidden",height:"70px",margin:"0",marginBottom:"30px"}}
        position="right"
        contentArrowStyle={{borderRightColor:"#00C981"}}
        contentStyle={ {paddingLeft:"0px",borderRadius:"4px",background:"#f8f8f8",padding:"0px",lineHeight:"0px"} }
        iconStyle={{ background: '#00C981', color: '#fff',height:"10px",width:"10px",marginLeft:"15px" }}
      >
        <div className={styl.timelineCard}>
          <div className={styl.timelineCardTop}>
            <p style={{fontSize:"20px",margin:"0"}}>28 - 30 JUNE</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Mina Camp</p>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={styl.verticalTimelineElement}
        position="right"
        style={{overflow:"hidden",height:"70px",margin:"0",marginBottom:"30px"}}
        contentArrowStyle={{borderRightColor:"#00C981"}}
        contentStyle={ {paddingLeft:"0px",borderRadius:"4px",background:"#f8f8f8",padding:"0px",lineHeight:"0px"} }
        iconStyle={{ background: '#00C981', color: '#fff',height:"10px",width:"10px",marginLeft:"15px" }}
      >
        <div className={styl.timelineCard}>
          <div className={styl.timelineCardTop}>
            <p style={{fontSize:"20px",margin:"0"}}>30 JUNE - 2  JUL</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Jabal Al Nour 5-6 KM</p>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={styl.verticalTimelineElement}
        style={{overflow:"hidden",height:"70px",margin:"0",marginBottom:"30px"}}
        position="right"
        contentArrowStyle={{borderRightColor:"#00C981"}}
        contentStyle={ {paddingLeft:"0px",borderRadius:"4px",background:"#f8f8f8",padding:"0px",lineHeight:"0px"} }
        iconStyle={{ background: '#00C981', color: '#fff',height:"10px",width:"10px",marginLeft:"15px" }}
      >
        <div className={styl.timelineCard}>
          <div className={styl.timelineCardTop}>
            <p style={{fontSize:"20px",margin:"0"}}>3 /4  - 18th JULY</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Shifting Makka Hotel , Near Haram Distance 600 Mtr.</p>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={styl.verticalTimelineElement}
        position="right"
        style={{overflow:"hidden",height:"100px",margin:"0",marginBottom:"30px"}}
        contentArrowStyle={{borderRightColor:"#00C981"}}
        contentStyle={ {paddingLeft:"0px",borderRadius:"4px",background:"#f8f8f8",padding:"0px",lineHeight:"0px"} }
        iconStyle={{ background: '#00C981', color: '#fff',height:"10px",width:"10px",marginLeft:"15px" }}
      >
        <div className={styl.timelineCard}>
          <div className={styl.timelineCardTop}>
            <p style={{fontSize:"20px",margin:"0"}}>19 JULY</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Departure Madina Hotel Near Haram 200 Mtr Distance</p>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={styl.verticalTimelineElement}
        position="right"
        style={{overflow:"hidden",height:"100px",margin:"0",marginBottom:"30px"}}
        contentArrowStyle={{borderRightColor:"#00C981"}}
        contentStyle={ {paddingLeft:"0px",borderRadius:"4px",background:"#f8f8f8",padding:"0px",lineHeight:"0px"} }
        iconStyle={{ background: '#00C981', color: '#fff',height:"10px",width:"10px",marginLeft:"15px" }}
      >
        <div className={styl.timelineCard}>
          <div className={styl.timelineCardTop}>
            <p style={{fontSize:"20px",margin:"0"}}>28 July</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Departure to Delhi</p>
          </div>
        </div>
      </VerticalTimelineElement>
              </VerticalTimeline>

              <div className={styl.pricing}>
              <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>ROOM CAPACITY</p>
                  <p className={styl.infoText}>PKG COST</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>4/5 SHARING</p>
                  <p className={styl.infoText}>₹ 6,50,000 Per Person</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>3 BED SHARING</p>
                  <p className={styl.infoText}>₹ 7,30,000 Per Person</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>2 BED SHARING</p>
                  <p className={styl.infoText}>₹ 7,65,000 Per Person</p>
            </div>
              </div>
        </div>
        <div className={styl.contact}>
         
            <p className={style.ctag}>CALL US NOW FOR MORE INFORMATION</p>
            <p className={styl.chead}>9205184001, 9811042458</p>
         
        </div>
     
      </div>
    
        
      </div>














<div id="umrah">
<h1 className={styl.urhamHead}>Umrah Packages</h1>
      {pckages && <UmrahPackageCollector packages = {pckages}></UmrahPackageCollector>}
      </div>
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
