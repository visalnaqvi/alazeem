import "firebase/firestore"
import firebase from 'firebase/app';
import whatsApp from "../public/whatsapp-svgrepo-com.svg"
import PackageTableCollector from "../comps/PackageTableCollector";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import phone from "../public/phone-svgrepo-com.svg"
const FlightFares = () => {
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

db.collection("flightFares").orderBy("timeStamp","desc")
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
          content="Best fare Delhi to Jeddah,
          Best fare Jeddah to Delhi,
          Best fare Delhi Jeddah Delhi,
          Best fare Delhi to Riyadh,
          Best fare Delhi to Bangkok,
          Best fare Bangkok to Delhi,
          Best fare Delhi to Dubai,
          Best fare Delhi to Sharjah,
          Best fare Delhi to Dammam,
          Best fare Delhi to Oman,
          Best fare Lucknow to Dubai,
          Best fare Lucknow to Sharjah,
          Best fare Lucknow to Jeddah,
          Best fare Lucknow to Riyadh,
          Best fare Lucknow to Oman,
          Best fare Delhi to Mumbai,
          Best fare Mumbai to Jeddah,
          Best fare Mumbai to Riyadh,
          Best Fare Mumbai to Dubai,
          Best fare Mumbai to Sharjah,
          Best fare Mumbai to Dammam,
          Best fare Varanasi to Sharjah,
          Best fare Delhi to Goa,
          Fixed fare Delhi to Dubai,
          Fixed fare Delhi to Jeddah,
          Fixed fare Delhi to Riyadh,
          Fixed fare Delhi to Oman,
          Fixed fare Delhi to Sharjah,
          
          
          
          Cheapest fare Delhi to Jeddah,
          Cheapest fare Jeddah to Delhi,
          Cheapest fare Delhi Jeddah Delhi,
          Cheapest fare Delhi to Riyadh,
          Cheapest fare Delhi to Bangkok,
          Cheapest fare Bangkok to Delhi,
          Cheapest fare Delhi to Dubai,
          Cheapest fare Delhi to Sharjah,
          Cheapest fare Delhi to Dammam,
          Cheapest fare Delhi to Oman,
          Cheapest fare Lucknow to Dubai,
          Cheapest fare Lucknow to Sharjah,
          Cheapest fare Lucknow to Jeddah,
          Cheapest fare Lucknow to Riyadh,
          Cheapest fare Lucknow to Oman,
          Cheapest fare Delhi to Mumbai,
          Cheapest fare Mumbai to Jeddah,
          Cheapest fare Mumbai to Riyadh,
          Cheapest Fare Mumbai to Dubai,
          Cheapest fare Mumbai to Sharjah,
          Cheapest fare Mumbai to Dammam,
          Cheapest fare Varanasi to Sharjah,
          Cheapest fare Delhi to Goa,
          Delhi to Jeddah fare,
          Jeddah to Delhi fare,
          Jeddah Delhi fare,
          Delhi to Riyadh fare,
          Delhi to Bangkok fare,
          Bangkok to Delhi fare,
          Delhi to Dubai fare,
          Delhi to Sharjah fare,
          Delhi to Dammam fare,
          Delhi to Oman fare,
          Lucknow to Dubai fare,
          Lucknow to Sharjah fare,
          Lucknow to Jeddah fare,
          Lucknow to Riyadh fare,
          Lucknow to Oman fare,
          Delhi to Mumbai fare ,
          Mumbai to Jeddah fare,
          Mumbai to Riyadh fare,
          Mumbai to Dubai fare,
          Mumbai to Sharjah fare,
          Mumbai to Dammam fare,
          Varanasi to Sharjah fare,
          Delhi to Goa fare,
          BEST FARE DEL JED,
          BEST FARE DEL SHJ,
          BEST FARE DEL BOM,
          BEST FAREDEL DMM,
          BEST FARE DEL MCT,
          BEST FARE DEL BKK,
          BEST FARE DEL DXB,
          BEST FARE DEL RUH,
          "
        />
      <meta
          name="description"
          content="Best Tour and Travels Agency in Delhi Laxmi Nagar.Hajj Umrah Tour Package available. Hajj Umrah economic tour packages. Including Hotel Booking , Travel Planning etc.Umrah Package by Al Azeem Tours and Travel"
        />
       
        <title>
         Best Cheapest Flight Fares by AA Travels (Al-Azeem)
        </title>
        <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
       
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      </Head>
    <div>
        
        {
       pckages && 
            <PackageTableCollector packages = {pckages}></PackageTableCollector>
}
<br></br>
<br></br>
<div style={{display:"flex",position:"fixed",bottom:"13px",right:"13px"}}>

<a target="blank" href="tel:+919811136987"><button
style={{backgroundColor:"#2192FF",
padding:"15px",
border:"none",
display:"flex",
justifyContent:"center",
alignItems:"center",
borderRadius:"100%"}}><Image width={40} height={40} src={phone} alt="dkc"></Image></button></a>
<a target="blank" href="https://wa.me/919811136987"><button 
style={{backgroundColor:"#25D366",
        marginLeft:"10px",
        padding:"15px",
        border:"none",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:"100%"}}><Image width={40} height={40} src={whatsApp} alt="dkc"></Image></button></a>
</div>

 </div>
 </>);
}
 
export default FlightFares;