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
const IraqZiyaratPackage = () => {
  
 
 
  return (
    <>
      
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


     
   
        <div className={styl.hajCardWrap}>
        <h1>Ghaus-ul-Azam Sayyiduna Hazrat Abdul Qadir Jilani </h1>
          <br></br>
          <p className={style.newtext}>Ziyarah basically means to visit the Shrine of the HOLY places like IRAQ .This visit has several etiquette & manners that need to be observed in order for the ziyarat to be successful. The Iraq Ziyarat broadly known for Holi Ziyarat for SHAIKH ABDUL QADIR JILANI (R.A.) Baghdad, HAZRAT ALI (R.A.) NAJAF E ASHRAF, Maidan E KARBALA AND ROZA-E-IMAM HUSSAIN (R.A.) of KARBALA and many more Ziarats given in list below. 
            <br></br><br></br>
	Al Azeem Tour & Travels from Delhi (India) basically renowned and authorized (IATA) travel Agent organising Ziarat Groups for Holi Shrines of Iraq Basically all Ziayarat are in Baghdad, Najaf E Ashraf and Karbalai Maullah mostly these destinations are located around 250 Km from Baghdad. We are also organising Economical Umrah Groups, Groups for Baitul Muqadas
</p>
<br></br><br></br>
<div className={`${styl.infoWrap} ${styl.iraqInfo}`}>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Departure</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>INSHALLAH on 22nd May 2023</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>11 Days Package</p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>BAGHDAD - 2 Nights, NAJAF E ASHRAF - 5 Nights, KARBALAI MAULLAH - 3 Nights</p>
            </div>
            <div className={styl.infoWrapCard}>
                  <p className={styl.infoHead}>Package Cost </p>
                  <div className={styl.underline}></div>
                  <p className={styl.infoText}>Rs. 90,000/-</p>
            </div>
        </div>
          <div className={styl.innerWrapLeft}>
            <table className={styl.table}>
              <tr className={styl.tableHead}>
              
                  <td>Destination</td>
                  <td>Ziyarat</td>
               
              </tr>
             
                <tr className={styl.oddTr}>
                  <td className={styl.tableHeading}>BAGHDAD</td>
                  <td>
                  <ul className={styl.nul}>
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
                  </td>
                </tr>

                <tr className={styl.evenTr}>
                  <td className={styl.tableHeading}>BAGHDAD – ADHAMIYAH -5 KM</td>
                  <td>
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
                  </td>
                </tr>

                <tr className={styl.oddTr}>
                  <td className={styl.tableHeading}>BAGHDAD – AL ALAWE RAILWAY YARD 5 KM</td>
                  <td>
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
                  </td>
                </tr>

                <tr className={styl.evenTr}>
                  <td className={styl.tableHeading}>BAGHDAD – 60TH ROAD – 5 KM</td>
                  <td>
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
                  </td>
                </tr>

                <tr className={styl.evenTr}>
                  <td className={styl.tableHeading}>BAGHDAD – KAZMAIN – 10 KM</td>
                  <td>
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
                  </td>
                </tr>

                <tr className={styl.evenTr}>
                  <td className={styl.tableHeading}>BAGHDAD 60 KM FROM ASTANA</td>
                  <td>
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
                  </td>
                </tr>

                <tr className={styl.evenTr}>
                  <td className={styl.tableHeading}>BAGHDAD – AL MIDAN 5KM FROM ASTANA</td>
                  <td>
                  <ul className={styl.nul}>
                    <li>
                        <div className={styl.img}>
                        <Image src={tick} alt="tick icon"></Image>
                        </div>
                        <p>IMAM AHMED BIN HAMBAL (R.A.)</p>
                    </li>  
                                       
                               
                </ul>                   
                  </td>
                </tr>

                <tr className={styl.evenTr}>
                  <td className={styl.tableHeading}>NAJAF CITY – 220 KM FROM BAGDAD</td>
                  <td>
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
                  </td>
                </tr>

                <tr className={styl.evenTr}>
                  <td className={styl.tableHeading}>SAMARRAH- TJIS ZIYARAT IS EXTRA PAYABLE NOT INCLUDED IN PACKAGE 140KM FROM BAGDAD</td>
                  <td>
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
                  </td>
                </tr>

                <tr className={styl.evenTr}>
                  <td className={styl.tableHeading}>BAGHDAD – THIS ZIYARAT IS EXTRA PAYABLE NOT INCLUDED IN THIS PACKAGE 530 KM FROM BAGHDAD</td>
                  <td>
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
                  </td>
                </tr>
            </table>
        

                
          </div>
    
       
        
        </div>

        <div className={styl.mobileViewIraq}>
       
      <div className={styl.hajCardWrap} id="haj2"> 
      <div className={styl.hajCard}>
        <div className={styl.left}>
       

      
          <div className={styl.innerWrapLeft}>
          <h1>BAGHDAD</h1>
          <ul className={styl.nul}>
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
          <h1>BAGHDAD – ADHAMIYAH -5 KM</h1>
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
          <h1>BAGHDAD – AL ALAWE RAILWAY YARD 5 KM</h1>
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
          <h1>BAGHDAD – 60TH ROAD – 5 KM</h1>
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
          <h1>BAGHDAD – KAZMAIN – 10 KM</h1>
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
          <h1>BAGHDAD 60 KM FROM ASTANA</h1>
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
          <h1>BAGHDAD – AL MIDAN 5KM FROM ASTANA</h1>
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
          <h1>NAJAF CITY – 220 KM FROM BAGDAD</h1>
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
          <h1>AULAD-E- MUSLIM</h1>
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
          <h1>KUFA CITY-180KM SOUTH OF BAGHDAD</h1>
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
          <h1>KARBALAI MUQADDAS-110 KM SOUTH OF BAGHDAD</h1>
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
          <h1>SAMARRAH- TJIS ZIYARAT IS EXTRA PAYABLE NOT INCLUDED IN PACKAGE 140KM FROM BAGDAD</h1>
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
          <h1>BAGHDAD – THIS ZIYARAT IS EXTRA PAYABLE NOT INCLUDED IN THIS PACKAGE 530 KM FROM BAGHDAD</h1>
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
      
    </>
  );
};

export default IraqZiyaratPackage;