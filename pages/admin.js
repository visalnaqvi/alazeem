import Head from "next/head";
import Headings from "../comps/blogs/Headings";
import style from "../styles/Blog.module.css";
import styles from "../styles/Hero.module.css";
import firebase from "firebase/app";
import "firebase/firestore";
import admin from "../styles/Admin.module.css"
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [pckages, setPack] = useState();
  const config = {
    apiKey: "AIzaSyBwGQoCe0wTlR61fueDKA0yA4n5xmMfPrg",
    authDomain: "buttons-2dc4a.firebaseapp.com",
    databaseURL: "https://buttons-2dc4a-default-rtdb.firebaseio.com",
    projectId: "buttons-2dc4a",
    storageBucket: "buttons-2dc4a.appspot.com",
    messagingSenderId: "241629842019",
    appId: "1:241629842019:web:6c248c713e6a27cd494656",
    measurementId: "G-QK6TC8JTHZ",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  } else {
    firebase.app();
  }
  const db = firebase.firestore();
  useEffect(() => {
    db.collection("fares").onSnapshot((querySnapshot) => {
      const inpack = [];
      querySnapshot.forEach((doc) => {
        inpack.push(doc.data());
      });
      setPack(inpack);
    });

    const box = document.querySelectorAll(".thebox");
    const input = document.querySelector(".input");
    const change = document.querySelector(".change");
    var elem;
    change.addEventListener("click", () => {
      elem.innerText = input.value;
    });
    box.forEach((b) => {
      b.addEventListener("click", (e) => {
        input.value = e.target.innerText;
        elem = e.target;
      });
    });


    
    
  }, [db]);
  function addData() {
    // Add a new document in collection "cities"
    const status = document.querySelector(".status");
    db.collection("fares")
      .doc()
      .set({
        html: document.querySelector('.thebox').innerHTML,
      })
      .then(() => {
        status.style.top = '0%';
        console.log(status)
        console.log(status.style.top)
        setTimeout(()=>{
          status.style.top = '-100%';
          console.log(status)
          console.log(status.style.top)
  
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


      <div className={`${styles.slide} ${styles.flight} bg-class flex-class`}>
        <div className={styles.content}>
          <p className={styles.heading}>100% Best Rates Guaranteed</p>
          <p className={styles.text}>
            A Better Way To Travel.We are the one stop provider for all your
            travel needs and requirements
          </p>
        </div>
        <div className={styles.shade}></div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className={`${styles.body} body`}>
      <div className={`${admin.status} status`}>Submitted Successfully</div>

        <p className={admin.head}>New Table</p>
        <div className="flex-class">
        <input className={`${admin.input} input`} type="text" placeholder="Heading"></input>
        <button className={`${admin.change} change`}>Submit</button>
        </div>
        <div className={`${admin.thebox} thebox`}>
          <Headings h1="New Delhi to Jeddah (via Dubai)"></Headings>
          <div className={style.tablewrap}>
            <table className={`${style.p} ${style.table} demo`}>
              <thead>
                <tr className={style.tr}>
                  <th className={style.th}>Airlines</th>
                  <th className={style.th}>Flight No.</th>
                  <th className={style.th}>Dates</th>
                  <th className={style.th}>Dep Time & Sector</th>
                  <th className={style.th}>Arri Time & Sector</th>
                  <th className={style.th}>Seats</th>
                </tr>
              </thead>
              <tbody>
                <tr className={style.tr}>
                  <td className={style.td}>FLYDUBAI</td>
                  <td className={style.td}>FZ-452</td>
                  <td className={style.td}>27 JAN</td>
                  <td className={style.td}>DEL 11:50</td>
                  <td className={style.td}>DXB 14:15</td>
                  <td className={style.td}>15</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
            <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
          </div>
        </div>

        <div className="flex-class">
          <button
            onClick={() => {
              const table = document.querySelectorAll(".demo tbody")[0];
              const NoOfColumns = document.querySelectorAll(".demo tr")[0].childNodes;
              console.log(NoOfColumns);

              var HTML = `<tr class=${style.tr}>`;

              NoOfColumns.forEach((c) => {
                HTML += `<td class=${style.td}>Data</td>`;
              });

              table.innerHTML += HTML + "</tr>";
            }}
          >
            Add Row{" "}
          </button>

          <button
            onClick={() => {
              const FirstTR = document.querySelectorAll(".demo tr")[0];
              FirstTR.innerHTML += `<th class=${style.th}>Item</th>`;
              console.log(FirstTR.innerHTML);

              const RestTR = document.querySelectorAll(".demo tbody tr");
              RestTR.forEach((tr) => {
                tr.innerHTML += `<td class=${style.td}>data</td>`;
              });
            }}
          >
            Add Column --
          </button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={addData}>Save</button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      {pckages && pckages.forEach((p)=>{
        // document.querySelector('.body').innerHTML += "<table>"+p.html+"</table>";
        
      })}
    </>
  );
};

export default AboutUs;
