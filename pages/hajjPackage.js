import style from "../styles/Article.module.css";
import styl from "../styles/Umrah.module.css";
import Image from "next/image";
import tick from "../public/icons/check.png"
import Head from "next/dist/shared/lib/head";
import Script from 'next/script'
import "firebase/firestore"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const HajjPackage = () => {
  
  
 
 
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
          Best Hajj 2023 Packages by AA Travels (Al-Azeem)
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
        

      {/* <div className={styl.quicLinks}>
        <p>Quick Link:<a href="#haj1">HAJ 2023 (16 – 20 Days PACKAGE)</a>
        <a href="#haj2">HAJ 2023 (35 – 40 Days PACKAGE)</a>
        <a href="#umrah">Umrah Packages</a></p>
      </div> */}


       <div className={styl.hajCardWrap} id="haj1"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
        <h1>HAJ 2023 - Tentative Haj 2023 Pkg</h1>
        <p className={styl.tag}>SHORT PERIOD PACKAGE <strong>17/18 Days</strong></p>

        <div className={styl.infoWrap}>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Departure</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>INSHALLAH on 20th / 21st JUNE DEL to JED (Direct Flight) </p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Arrival</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>10 Jul 2023 (JED to DEL)</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Stay</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>21 JUN TO 10 JUL JABAL AL NOUR DISTANCE 5-6 KM</p>
            </div>
        </div>

      
          <div className={styl.innerWrapLeft}>
          <h2>INCLUSIONS</h2>
          <ul className={styl.nul}>
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>Round trip Air fare (DEL/JED/MED-JED/DEL).</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>Surface transport (Jeddah/Makkah/Meena/Arafat/Muzdalfa/Madina/Jeddah) by AC
bus</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>Local Ziarat of Makkah &Madina.* Haj Visa</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>Food (Breakfast, Lunch, Dinner, Morning & Evening Tea).</p>
                    </li>   
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>A packed cane of 5 litre Zam-Zam .</p>
                    </li>  
                    <li key={Math.random()}>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>Laundry facilities (after Haj in Makkah and Madina) </p>
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
            <p style={{fontSize:"20px",margin:"0"}}>26 June to 30 June</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Meena, Arafat & Muzdalfa</p>
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
            <p style={{fontSize:"20px",margin:"0"}}>5 July to 0 July</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Madina Munauwara
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
            <p style={{fontSize:"20px",margin:"0"}}>09th / 10th July</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Departure from Madina to Jeddah</p>
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
            <p style={{fontSize:"20px",margin:"0"}}>10th July Monday</p>
          </div>
          <div className={styl.timelineCardBottom}>
            <p style={{fontSize:"16px",margin:"0"}}>Departure from Jeddah to Delhi</p>
          </div>
        </div>
      </VerticalTimelineElement>
      
              </VerticalTimeline>

              <div className={styl.pricing}>
              <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>ROOM CAPACITY</p>
                  <p className={styl.infoText}>PKG COST (GST not Included)</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>4/5 SHARING</p>
                  <p className={styl.infoText}>₹ 6,95,000 Per Person</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>3 BED SHARING</p>
                  <p className={styl.infoText}>₹ 7,75,000 Per Person</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>2 BED SHARING</p>
                  <p className={styl.infoText}>₹ 8,50,000 Per Person</p>
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

      
    </>
  );
};

export default HajjPackage;
