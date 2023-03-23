import Head from "next/head";
import firebase from "firebase/app";
import "firebase/firestore";
import style from "../../styles/UmrahAdmin.module.css";
import Link from "next/link"
import { useEffect, useState } from "react";
const AboutUs = () => {
  const [pckages, setPack] = useState();
  const [IDs,setIDs] = useState();
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
const db = firebase.firestore().collection("umrahPackages");
useEffect(()=>{
db.orderBy("timeStamp","desc")
.onSnapshot((querySnapshot) => {
  let i = 0;
  const inpack = []
  const ids = []
  querySnapshot.forEach((doc) => {
        const idsObj = {timeStamp:"",docId:""}
        inpack.push(doc.data());
        idsObj.timeStamp = doc.data().timeStamp;
        idsObj.docId = doc.id;
        ids.push(idsObj)
      });
      inpack.forEach(t=>{t.index = i++})
      setPack(inpack)
      setIDs(ids)
})

}, [])

function moveUp(index){
  if(index !=0){
    let newTimeStamp = IDs[index-1].timeStamp;
    let currentTimeStamp = IDs[index].timeStamp;
    let cuurentDocId = IDs[index].docId;
    let prevDocId = IDs[index-1].docId;
    db.doc(cuurentDocId).update({timeStamp:newTimeStamp})
          .then(()=>{console.log("Order Updated")})
          .catch((e)=>{console.log("Error Occured in Order Update:",e)});
    db.doc(prevDocId).update({timeStamp:currentTimeStamp})
    .then(()=>{console.log("Order Updated")})
    .catch((e)=>{console.log("Error Occured in Order Update:",e)});
  }
}

function moveDown(index){
  if(index != IDs.length-1){
    let newTimeStamp = IDs[index+1].timeStamp;
    let currentTimeStamp = IDs[index].timeStamp;
    let cuurentDocId = IDs[index].docId;
    let nextDocId = IDs[index+1].docId;
    db.doc(cuurentDocId).update({timeStamp:newTimeStamp})
          .then(()=>{console.log("Order Updated")})
          .catch((e)=>{console.log("Error Occured in Order Update:",e)});
    db.doc(nextDocId).update({timeStamp:currentTimeStamp})
    .then(()=>{console.log("Order Updated")})
    .catch((e)=>{console.log("Error Occured in Order Update:",e)});
  }
}



function addData(){
  
  document.querySelector('.loading').style.top = "0%";
  document.querySelector('.loading').style.display = "flex";
    db
      .add({
        Arrival:["-"],
        DD:["-"],
        Date:"-",
        Departure:["-"],
        Flights:["-"],
        Price: "-",
        Hotels: ["Al Sundus/ similar 600 mtr.","Rehab Al Safwa/ Similar 500 mtr."],
        Tags:["All Meals and Laudary","Air Ticket and Visa","Hotel 4/5/6 Bed Sharing","Insurance and Ziyarat","Round Trip Transport","Flight by Oman Airways"], 
        Title:"Add a new Title",
        timeStamp:Date.now(),
      })
      .then((docRef) => {
        const docId = docRef.id;
        db.doc(docId).update({DocId:docId})
          .then(()=>{console.log("docId Updated")})
          .catch((e)=>{console.log("Error Occured:",e)});
        console.log("Success in Adding New Document and Updating Doc ID")
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      })
  
      setTimeout(()=>{
        document.querySelector('.loading').style.top = "-200%";
        document.querySelector('.loading').style.display = "none";
      },3000)
 
}
  
  return (
    <>
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
      <div className={`${style.loading} loading`}>
        <div className={style.loadingWrapper}>
          <p className={style.loadingTime}>Loading</p>
          <br></br>
          <p className={style.loadingText}>Usually Takes just 5 sec...</p>
        </div>
      </div>
      <table className={style.table}>

      {pckages && pckages.map((tag)=>(
              <tr className={style.tr} key={tag.id}>
                <td>
                    {tag.Title}
                    <div  style={{display:"flex"}}>
                    <div>
                    <Link href={"/adminUmrah/"+tag.DocId}><button>Edit</button></Link>
                   
                    </div>
                    <button onClick={()=>{moveUp(tag.index)}}>MoveUp</button>
                    <button onClick={()=>{moveDown(tag.index)}} style={{width:"100%"}}>MoveDown</button>
                    </div>
                </td>
              </tr>
            ))}
     </table>
     <button onClick={
      addData
      
     } className={style.submit}>Add New</button>
    </>
  );
};

export default AboutUs;
