import Head from "next/head";
import firebase from "firebase/app";
import "firebase/firestore";
import style from "../../styles/UmrahAdmin.module.css";
import Link from "next/link"
import { useEffect, useState } from "react";
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

db.collection("umrahPackages")
.onSnapshot((querySnapshot) => {
        const inpack = []
        querySnapshot.forEach((doc) => {
            inpack.push(doc);
            });
            setPack(inpack)
})

}, [])
  function addData() {
    // Add a new document in collection "cities"
    const status = document.querySelector(".status");
    db.collection("fares")
      .doc()
      .set({
        html: document.querySelector('.thebox').innerHTML,
        id : len+1,
      })
      .then(() => {
        status.style.top = '0%';
       
        setTimeout(()=>{
          status.style.top = '-100%';
      
        },3000)
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
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

      <table className={style.table}>

      {pckages && pckages.map((tag)=>(
              <tr className={style.tr} key={tag}>
                <td>
                    {tag.data().Title}
                    <Link href={"/adminUmrah/"+tag.id}><button>Edit</button></Link>
                </td>
              </tr>
            ))}
     </table>
    </>
  );
};

export default AboutUs;
