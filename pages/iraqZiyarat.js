import style from "../styles/Article.module.css";
import styl from "../styles/Umrah.module.css";
import Image from "next/image";
import tick from "../public/icons/check.png"
import whatsApp from "../public/whatsapp-svgrepo-com.svg"
import phone from "../public/phone-svgrepo-com.svg"
import sty from "../styles/Home.module.css";
import Head from "next/dist/shared/lib/head";
import popImg from "../public/images/close_small_figma.svg"
import { useEffect, useState } from "react";
import UmrahPackageCollector from "../comps/UmrahPackageCollector";
import firebase from 'firebase/app';
import fs from "../styles/Footer.module.css"
import Script from 'next/script'
import "firebase/firestore"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const IraqZiyaratPackage = () => {
    const [topPos , settopPos] = useState("-110vh")
 
    useEffect(()=>{
        setTimeout(()=>{
            settopPos("0vh")
        },2500)
    },[])
  return (
    <>
      <Head>
      <meta
          name="keywords"
          content="Iraq Ziyarat,
          Iraq Ziarat,
          Iraq Ziyarat Travel Agent,
          Iraq Ziyarat Packages,
          Iraq Ziyarat Places,
          Iraq Ziyarat Visa for India,
          Iraq Ziyarat Packages From India,
          Iraq Ziyarat Packages from Delhi,
          Iran Iraq Ziyarat Package,
          Syria Ziyarat package,
          Iraq ziyarat Packages from Delhi,
          Iraq Ziarat Package from Delhi,
          Iran Iraq Ziarat Package from Delhi,
          Shaikh Abdul Qadir Jilani (RA) Ziyarat,
          Ziyarat Ghous E Azam,
          Imam Hussain Roza,
          Imam Hussain shrine Ziyarat,
          Best Ziyarat Package,
          Best Tour Operator,
          Ziyarat kafila from Delhi,
          Iraq Ziyarat packages from Lucknow,
          Iraq Ziyarat Package from Jammu and Srinagar,
          "
        />
      <meta
          name="description"
          content="Best Tour and Travels Agency in Delhi Laxmi Nagar.Hajj Umrah Tour Package available. Hajj Umrah economic tour packages. Including Hotel Booking , Travel Planning etc.Umrah Package by Al Azeem Tours and Travel"
        />
       
        <title>
          Iraq Ziyarat Packages 2023 by AA Travels (Al-Azeem)
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
      <div className={`${styl.displayBox} ${styl.iraqImage}`}>
      </div>
    <div style={{top:topPos}} className={`${sty.popup} `}>
    <div className={`${sty.popupimg} ${sty.popimgiraq}`}>
            </div>
            <div onClick={()=>{settopPos("-110vh")}} className={`${sty.close} close`}>
              <Image width={100} height={100} src={popImg} alt=""></Image>
            </div>
      </div>

     
   
        <div className={styl.hajCardWrap}>
        <h1>Iraq Ziyarat</h1>
          <br></br>
          <p className={style.newtext}>Welcome to Al Azeem Tours and Travel, your gateway to a transformative journey of spiritual enrichment and exploration. Embark on a soul-stirring Ziyarat to Iraq, a sacred pilgrimage encompassing the revered cities of Karbala, Najaf, and Baghdad. Immerse yourself in the profound history and spirituality of these hallowed destinations, where every step echoes with the stories of devotion and sacrifice. 
            <br></br><br></br>
            Our meticulously crafted tour offers a seamless experience, providing comprehensive services including transportation, visa assistance, top-tier accommodations, and authentic dining. With Al Azeem Tours and Travel, your pilgrimage is not just a trip; it's an opportunity to connect with the essence of faith and heritage. Join us on this remarkable journey as we ensure every detail is meticulously managed, allowing you to focus solely on the spiritual significance of your visit.
</p>
<br></br><br></br>
<div className={`${styl.infoWrap} ${styl.iraqInfo}`}>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Departure</p>
                  <div className={styl.underline}></div>
                  <p className={`${styl.infoText} ${styl.pad}`}>10 NOV 2023</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>10 Days Package / 11 Nighta</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>KARBALA - 5 Nights</p>
                  <p className={styl.infoText}>NAJAF - 3 Nights</p>
                  <p className={styl.infoText}>BAGHDAD - 2 Nights</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Package Cost </p>
                  <div className={styl.underline}></div>
                  <p className={`${styl.infoText} ${styl.pad}`}>Rs. 95,000/-</p>
            </div>
        </div>
          <div className={styl.innerWrapLeft}>
          
            <table className={styl.table}>
              <tr className={styl.tableHead}>
              
                  <td>Destination</td>
                  <td>Ziyarat</td>
               
              </tr>
             
                <tr className={styl.oddTr}>
                  <td className={styl.tableHeading}>BAGHDAD &ndash; AL ALAWE RAILWAY YARD 5 KM</td>
                  <td>
                  <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>1. SHAIKH BEHLOL DANA (R.A.)</p>
                    </li>  
                              
                </ul>                    
                  </td>
                </tr>

                <tr className={styl.evenTr}>
                  <td className={styl.tableHeading}>BAGHDAD &ndash; KAZMAIN &ndash; 10 KM</td>
                  <td>
                  <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>2. SAYYED IMAM MOOSA KAZIM (R.A.) (7TH IMAM)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>3. SAYYED IMAM MOHAMMAD TAQI (9TH IMAM)</p>
                    </li>  
                               
                </ul>                   
                  </td>
                </tr>

                <tr className={styl.oddTr}>
                  <td className={styl.tableHeading}>BAGHDAD 60 KM FROM ASTANA</td>
                  <td>
                  <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>4. HAZRAT SALMAN FARSI (R.A.) SALMAN PARK</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>5. HUZAIFA BIN YAMAN (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>6. TAHIR BIN MOHAMMAD AL BAQIR (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>7. ABDUALLAH BIN JABIR AL ANSARI (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>8. DARYA -E- DAJLA</p>
                    </li>   
                   
                             
                </ul>                    
                  </td>
                </tr>

                <tr className={styl.evenTr}>
                  <td className={styl.tableHeading}>BAGHDAD &ndash; AL MIDAN 5KM FROM ASTANA</td>
                  <td>
                  <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>9. IMAM AHMED BIN HAMBAL (R.A.)</p>
                    </li>  
        
                               
                </ul>                   
                  </td>
                </tr>

                <tr className={styl.evenTr}>
                  <td className={styl.tableHeading}>NAJAF CITY &ndash; 220 KM FROM BAGDAD</td>
                  <td>
                  <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>10. HAZRAT ALI (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>11. PROPHET SALEH (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>12. PROPHET HOOD (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>13. WADI-US- SALAAM (World Largest graveyard 14sq KM) ( MANY PROPHETS AND ISLAMIC SCHOLARS RESTING PLACE)</p>
                    </li>  
                               
                </ul>                   
                  </td>
                </tr>

                <tr className={styl.evenTr}>
                  <td className={styl.tableHeading}>AULAD-E- MUSLIM </td>
                  <td>
                  <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>14. SAYED IBRAHIM BIN MUSLIM BIN AQEEL BIN ABU TALIB (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>15. SAYED MOHAMMAD BIN MUSLIM BIN AQEEL (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>16. MOHAMMAD BIN AQEEL</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>17. PROPHET AYUB (A.S.) AND HIS WIFE RAHIMA</p>
                    </li>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>18. SHIFA KA KUWA</p>
                    </li> 
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>19. RADDE SHAMS</p>
                    </li> 
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>20. JANAB-E- AUN AND JANAB-E- MOHAMMAD</p>
                    </li> 
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>21. JANAB-E-HOOR (R.A.)</p>
                    </li> 
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>22. BIRTH PLACE OF PROPHET IBRAHIM (A.S.)</p>
                    </li> 
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>23. WOH MUQAM JAHAN PAR NABI IBRAHIM (A.S.) KO AAG MAIN JALANE KE LIYA LAKDIYA JAMA KI GAYI THI</p>
                    </li> 
                     
                               
                </ul>                   
                  </td>
                </tr>

                <tr className={styl.evenTr}>
                  <td className={styl.tableHeading}>KUFA CITY-180KM SOUTH OF BAGHDAD</td>
                  <td>
                  <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>24. MASJID-E-KUFA</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>25. MIMBER (JIS MIMBER PAR HAZRAT ALI (R.A.) KAY UPAR HAMLA HUA THA)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>26. HAZRAT IMAM BIN MUSLIM BIN AQEEL (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>27. JANAB E HANI BIN URWA (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>28. QABAR MUKHTAR SAQAFI</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>29. TOOFAN-E-NOOH JAHAN SAY SHRU HUA (KUWA)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>30. MUSALLAH-E-NABI ADAM (A.S.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>31. MUSALLAH HAZRAT JIBRAIEL (A.S.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>32. HOUSE OF HAZRAT ALI (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>33. WELL OF HAZRAT ALI(R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>34. JANAB-E-MISAMME TAMMAR(R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>35. SAYYEDA KHATIJA (R.A.) (DAUGHTER OF HAZRAT ALI)</p>
                    </li>  
                                       
                               
                </ul>                   
                  </td>
                </tr>

                <tr className={styl.evenTr}>
                  <td className={styl.tableHeading}>KARBALAI MUQADDAS-110 KM SOUTH OF BAGHDAD</td>
                  <td>
                  <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>36. MAIDAN-E-KARBALA</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>37. NEHAR-E-FARAT</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>38. ROZA-E-IMAM HUSSAIN (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>39. ROZA-E-ABBAS ALAMBARDAR(R.A.)</p>
                    </li>   
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>40. HAZRAT HUSSAIN(R.A.) (SHAHADAT KI JAGAH)</p>
                    </li>   
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>41. ALI AKBAR(R.A.)</p>
                    </li>   
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>42. ALI ASGHAR (R.A.)</p>
                    </li>   
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>43. MUKAM-E-BAZU-E-ABBAS ALAMBARDAR</p>
                    </li>   
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>44. SHUHADA-E- KARBALA KI MAZAR</p>
                    </li>   
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>45. ZAINAB (R.A.) TEKRI</p>
                    </li>             
                </ul>                   
                  </td>
                </tr>

                <tr className={styl.evenTr}>
                  <td className={styl.tableHeading}>SAMARRAH- THIS ZIYARAT IS EXTRA PAYABLE NOT INCLUDED IN PACKAGE 140KM FROM BAGDAD</td>
                  <td>
                  <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>46. IMAM ALI NAQI (R.A.) (10th IMAM)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>47. IMAM HASAN ASKARI (R.A.) (11th IMAM)</p>
                    </li>              
                </ul>                   
                  </td>
                </tr>

                
            </table>
        

                
          </div>
    
       
        
        </div>


        <div className={styl.mobileViewIraq}>

        <p className={style.articletitlecenter}>Included Services</p>
        <div className={`${styl.infoWrap}`}>
        <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Flights</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>Travel With Best International Companies</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Hotels</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>Best International Hotels With Best Services</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Visa</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>VISA Assistance Is Included In Package Free Of Cost</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Transport</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>Best Transport Services Included</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Meals</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>All Day Meals Included</p>
            </div>
        </div>
       
      <div className={styl.hajCardWrap} id="haj2"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
       

      
          <div className={styl.innerWrapLeft}>
          <div className={styl.cardHeading}>
          <h2>BAGHDAD</h2>
          </div>
          <div className={styl.underline}></div>
          <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH ABDUL QADIR JILANI (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH ABDUL JABBAR JILANI (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH MOHAMMAD SALEH (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>MADARSA OF ABDUL QADIR JILANI (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH SULEMAN ABU KHUMRAH ALRIFA (R.A.)</p>
                    </li>   
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH SHAHABUDIN UMAR SUHARWARDI (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH SYED IBRAHIM BAKAR BIN BAKAR (R.A.)</p>
                    </li>   
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH IMAM GAZZALI (R.A.)</p>
                    </li>       
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>MAZAR SHARIF (WHO DAKU JIS NAY GHOUS PAK KE BACHPAN MAIN US SE ASHRFI LOOTI THI)</p>
                    </li>            
                </ul> 

            
          </div>
    
       
        
        </div>
       
     
      </div>
    
        
      </div>


      <div className={styl.hajCardWrap} id="haj2"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
       

      
          <div className={styl.innerWrapLeft}>
          <div className={styl.cardHeading}>
          <h2>BAGHDAD &ndash; ADHAMIYAH -5 KM</h2>
          </div>
          <div className={styl.underline}></div>
          <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH IMAM ABU AZAM HANIFA (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH HASAN NOORI (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH BISHAR BIN HAAFI (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH ABU BAKAR SHIBLI (R.A.)</p>
                    </li>   
                               
                </ul>   

            
          </div>
    
       
        
        </div>
       
     
      </div>
    
        
      </div>

      <div className={styl.hajCardWrap} id="haj2"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
       

      
          <div className={styl.innerWrapLeft}>
          <div className={styl.cardHeading}>
          <h2>BAGHDAD &ndash; AL ALAWE RAILWAY YARD 5 KM</h2>
          </div>
          <div className={styl.underline}></div>
          <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH BEHLOL DANA (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH SIRRI SAQTI (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH JUNAID AL BAGHDADI (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>PROPHET YUSHA BIN NOON(A.S.) COMPANION OF MUSA (A.S.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH IBRAHIM KHAWWAS (R.A.)</p>
                    </li>   
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH JUNOON MISRI (R.A.)</p>
                    </li>  
                             
                </ul>   

            
          </div>
    
       
        
        </div>
       
     
      </div>
    
        
      </div>

      <div className={styl.hajCardWrap} id="haj2"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
       

      
          <div className={styl.innerWrapLeft}>
          <div className={styl.cardHeading}>
          <h2>BAGHDAD &ndash; 60TH ROAD &ndash; 5 KM</h2>
          </div>
          <div className={styl.underline}></div>
          <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHAIKH MAROOF AL KHARKI (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>KUWA SHAIKH MAROOF KHARKI</p>
                    </li>  
                               
                </ul>

            
          </div>
    
       
        
        </div>
       
     
      </div>
    
        
      </div>

      <div className={styl.hajCardWrap} id="haj2"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
       

      
          <div className={styl.innerWrapLeft}>
          <div className={styl.cardHeading}>
          <h2>BAGHDAD &ndash; KAZMAIN &ndash; 10 KM</h2>
          </div>
          <div className={styl.underline}></div>
          <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SAYYED IMAM MOOSA KAZIM (R.A.) (7TH IMAM)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SAYYED IMAM MOHAMMAD TAQI (9TH IMAM)</p>
                    </li>  
                     
                               
                </ul> 
            
          </div>
    
       
        
        </div>
       
     
      </div>
    
        
      </div>

      <div className={styl.hajCardWrap} id="haj2"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
       

      
          <div className={styl.innerWrapLeft}>
          <div className={styl.cardHeading}>
          <h2>BAGHDAD 60 KM FROM ASTANA</h2>
          </div>
          <div className={styl.underline}></div>
          <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>HAZRAT SALMAN FARSI (R.A.) SALMAN PARK</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>HUZAIFA BIN YAMAN (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>TAHIR BIN MOHAMMAD AL BAQIR (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>ABDUALLAH BIN JABIR AL ANSARI (R.A.)</p>
                    </li>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>DARYA -E- DAJLA</p>
                    </li> 
                     
                               
                </ul> 
            
          </div>
    
       
        
        </div>
       
     
      </div>
    
        
      </div>

      <div className={styl.hajCardWrap} id="haj2"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
       

      
          <div className={styl.innerWrapLeft}>
          <div className={styl.cardHeading}>
          <h2>BAGHDAD &ndash; AL MIDAN 5KM FROM ASTANA</h2>
          </div>
          <div className={styl.underline}></div>
          <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>IMAM AHMED BIN HAMBAL (R.A.)</p>
                    </li>  
                                       
                               
                </ul> 
            
          </div>
    
       
        
        </div>
       
     
      </div>
    
        
      </div>

      <div className={styl.hajCardWrap} id="haj2"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
       

      
          <div className={styl.innerWrapLeft}>
          <div className={styl.cardHeading}>
          <h2>NAJAF CITY &ndash; 220 KM FROM BAGDAD</h2>
          </div>
          <div className={styl.underline}></div>
          <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>HAZRAT ALI (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>PROPHET SALEH (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>PROPHET HOOD (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>WADI-US- SALAAM (World Largest graveyard 14sq KM) ( MANY PROPHETS AND ISLAMIC SCHOLARS RESTING PLACE)</p>
                    </li>             
                </ul>        
            
          </div>
    
       
        
        </div>
       
     
      </div>
    
        
      </div>

      <div className={styl.hajCardWrap} id="haj2"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
       

      
          <div className={styl.innerWrapLeft}>
          <div className={styl.cardHeading}>
          <h2>AULAD-E- MUSLIM</h2>
          </div>
          <div className={styl.underline}></div>
          <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SAYED IBRAHIM BIN MUSLIM BIN AQEEL BIN ABU TALIB (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SAYED MOHAMMAD BIN MUSLIM BIN AQEEL (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>MOHAMMAD BIN AQEEL</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>PROPHET AYUB (A.S.) AND HIS WIFE RAHIMA</p>
                    </li>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHIFA KA KUWA</p>
                    </li>     
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>RADDE SHAMS</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>JANAB-E- AUN AND JANAB-E- MOHAMMAD</p>
                    </li>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>JANAB-E-HOOR (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>BIRTH PLACE OF PROPHET IBRAHIM (A.S.)</p>
                    </li>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>WOH MUQAM JAHAN PAR NABI IBRAHIM (A.S.) KO AAG MAIN JALANE KE LIYA LAKDIYA JAMA KI GAYI THI</p>
                    </li>             
                </ul>       
            
          </div>
    
       
        
        </div>
       
     
      </div>
    
        
      </div>

      <div className={styl.hajCardWrap} id="haj2"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
       

      
          <div className={styl.innerWrapLeft}>
          <div className={styl.cardHeading}>
          <h2>KUFA CITY-180KM SOUTH OF BAGHDAD</h2>
          </div>
          <div className={styl.underline}></div>
          <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>MASJID-E-KUFA</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>MIMBER (JIS MIMBER PAR HAZRAT ALI (R.A.) KAY UPAR HAMLA HUA THA)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>HAZRAT IMAM BIN MUSLIM BIN AQEEL (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>JANAB E HANI BIN URWA (R.A.)</p>
                    </li>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>QABAR MUKHTAR SAQAFI</p>
                    </li>     
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>TOOFAN-E-NOOH JAHAN SAY SHRU HUA (KUWA)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>MUSALLAH-E-NABI ADAM (A.S.)</p>
                    </li>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>MUSALLAH HAZRAT JIBRAIEL (A.S.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>HOUSE OF HAZRAT ALI (R.A.)</p>
                    </li>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>WELL OF HAZRAT ALI(R.A.)</p>
                    </li>   
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>JANAB-E-MISAMME TAMMAR(R.A.)</p>
                    </li>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SAYYEDA KHATIJA (R.A.) (DAUGHTER OF HAZRAT ALI)</p>
                    </li>           
                </ul>    
            
          </div>
    
       
        
        </div>
       
     
      </div>
    
        
      </div>

      <div className={styl.hajCardWrap} id="haj2"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
       

      
          <div className={styl.innerWrapLeft}>
          <div className={styl.cardHeading}>
          <h2>KARBALAI MUQADDAS-110 KM SOUTH OF BAGHDAD</h2>
          </div>
          <div className={styl.underline}></div>
          <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>MAIDAN-E-KARBALA</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>NEHAR-E-FARAT</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>ROZA-E-IMAM HUSSAIN (R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>ROZA-E-ABBAS ALAMBARDAR(R.A.)</p>
                    </li>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>HAZRAT HUSSAIN(R.A.) (SHAHADAT KI JAGAH)</p>
                    </li>     
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>ALI AKBAR(R.A.)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>ALI ASGHAR (R.A.)</p>
                    </li>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>MUKAM-E-BAZU-E-ABBAS ALAMBARDAR</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SHUHADA-E- KARBALA KI MAZAR</p>
                    </li>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>ZAINAB (R.A.) TEKRI</p>
                    </li>   
                             
                </ul>     
            
          </div>
    
       
        
        </div>
       
     
      </div>
    
        
      </div>

      <div className={styl.hajCardWrap} id="haj2"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
       

      
          <div className={styl.innerWrapLeft}>
          <div className={styl.cardHeading}>
          <h2>SAMARRAH- TJIS ZIYARAT IS EXTRA PAYABLE NOT INCLUDED IN PACKAGE 140KM FROM BAGDAD</h2>
          </div>
          <div className={styl.underline}></div>
          <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>IMAM ALI NAQI (R.A.) (10th IMAM)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>IMAM HASAN ASKARI (R.A.) (11th IMAM)</p>
                    </li>  
                      
                             
                </ul> 
            
          </div>
    
       
        
        </div>
       
     
      </div>
    
        
      </div>

      <div className={styl.hajCardWrap} id="haj2"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
       

      
          <div className={styl.innerWrapLeft}>
          <div className={styl.cardHeading}>
          <h2>BAGHDAD &ndash; THIS ZIYARAT IS EXTRA PAYABLE NOT INCLUDED IN THIS PACKAGE 530 KM FROM BAGHDAD</h2>
          </div>
          <div className={styl.underline}></div>
          <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>ANAS BIN MALIK (R.A.)(COMPANION OF THE PROPHET)</p>
                    </li>  
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>KHWAJA HASAN BASRI (R.A.)</p>
                    </li> 
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>SAYYED SHAIKH AHMAD KABIR RIFAI (R.A.)</p>
                    </li>  
                      
                             
                </ul> 
            
          </div>
    
       
        
        </div>
       
     
      </div>
    
        
      </div>







      </div>
      <div style={{zIndex:"10", display:"flex",position:"fixed",bottom:"13px",right:"13px"}}>

<a target="blank" href="tel:+919205184001"><button
style={{backgroundColor:"#2192FF",
padding:"15px",
border:"none",
display:"flex",
justifyContent:"center",
zIndex:"10",
alignItems:"center",
borderRadius:"100%"}}><Image width={40} height={40} src={phone} alt="dkc"></Image></button></a>
<a target="blank" href="https://wa.me/919205184001"><button 
style={{backgroundColor:"#25D366",
        marginLeft:"10px",
        padding:"15px",
        zIndex:"10",
        border:"none",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:"100%"}}><Image width={40} height={40} src={whatsApp} alt="dkc"></Image></button></a>
</div>
    </>
  );
};

export default IraqZiyaratPackage;
