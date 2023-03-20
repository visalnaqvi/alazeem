import { useRouter } from "next/router";
import style from "../../styles/UmrahAdmin.module.css";
import firebase from "firebase/app";
import { useEffect, useState } from "react";
import "firebase/firestore";
const Post = () => {
  const [data, setData] = useState();
  var finalt = [];
  const [final, setFinal] = useState([]);
  const [final2, setFinal2] = useState([]);
  const router = useRouter();
  const { id } = router.query;
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

    db.collection("flightFares")
      .doc(id)
      .onSnapshot((querySnapshot) => {
        setData(querySnapshot.data());
        for (let i = 0; i < querySnapshot.data().FlightsNumandTime.length; i++) {
          var f = [];
          f.push(querySnapshot.data().sector[i]);
          f.push(querySnapshot.data().travelDate[i]);
          f.push(querySnapshot.data().FlightsNumandTime[i]);
          f.push(querySnapshot.data().seat[i]);
          f.push(querySnapshot.data().groupFare[i]);
          finalt.push(f);
        }
        setFinal(finalt);
        setFinal2(finalt);
      });
  }, []);
  function addData() {
    // Add a new document in collection "cities"
    var title = document.getElementById("title").value;
    var flnoArr = [];
    var flnos = document.querySelectorAll(".flno");
    flnos.forEach((f) => {
      flnoArr.push(f.value);
    });
    var sectorArr = [];
    var sectors = document.querySelectorAll(".sector");
    sectors.forEach((f) => {
        sectorArr.push(f.value);
    });
    var tdArr = [];
    var tds = document.querySelectorAll(".td");
    tds.forEach((f) => {
        tdArr.push(f.value);
    });
    var seatArr = [];
    var seats = document.querySelectorAll(".seat");
    seats.forEach((f) => {
        seatArr.push(f.value);
    });
    var gfArr = [];
    var gfs = document.querySelectorAll(".gfs");
    gfs.forEach((f) => {
        gfArr.push(f.value);
    });
    let text = "Click confirm to update table";
    if (confirm(text) == true) {
      db.collection("flightFares")
        .doc(id)
        .update({
            Title: title,
            FlightsNumandTime: flnoArr,
            sector: sectorArr,
            travelDate: tdArr,
            seat: seatArr,
            groupFare: gfArr,
            id: data.id,
        })
        .then(() => {
          console.log("su");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
        
      router.back();
    }
  }
  
  function deleteData() {
    
    let text = "The Package will be permanently deleted.";
    if (confirm(text) == true) {
      db.collection("flightFares")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          router.back();
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    }
  }
 
  function openPop() {
    document.querySelector(".loading").style.top = "0%";
    document.querySelector(".loading").style.display = "flex";
    var flnoArr = [];
    var flnos = document.querySelectorAll(".flno");
    flnos.forEach((f) => {
      flnoArr.push(f.value);
    });
    var sectorArr = [];
    var sectors = document.querySelectorAll(".sector");
    sectors.forEach((f) => {
        sectorArr.push(f.value);
    });
    var tdArr = [];
    var tds = document.querySelectorAll(".td");
    tds.forEach((f) => {
        tdArr.push(f.value);
    });
    var seatArr = [];
    var seats = document.querySelectorAll(".seat");
    seats.forEach((f) => {
        seatArr.push(f.value);
    });
    var gfArr = [];
    var gfs = document.querySelectorAll(".gfs");
    gfs.forEach((f) => {
        gfArr.push(f.value);
    });

    for (let i = 0; i < flnoArr.length; i++) {
      var f = [];
      f.push(sectorArr[i]);
      f.push(tdArr[i]);
      f.push(flnoArr[i]);
      f.push(seatArr[i]);
      f.push(gfArr[i]);
      finalt.push(f);
    }
    console.log(finalt);
    setFinal(finalt);
    setFinal2(finalt);
  }
  function addFlight() {
    // Add a new document in collection "cities"
    
    var filghtNew = document.querySelector(".flnoNew");
    var sectorNew = document.querySelector(".sectorNew");
    var tdNew = document.querySelector(".tdNew");
    var seatNew = document.querySelector(".seatNew");
    var gfNew = document.querySelector(".gfNew");
    setFinal([
      ...final,
      [sectorNew.value,tdNew.value,filghtNew.value,seatNew.value,gfNew.value]
    ]
    )
    filghtNew.value = "Filght Number"
    sectorNew.value = "Sector"
    tdNew.value = "Travel Date"
    seatNew.value = "Seat"
    gfNew.value = "Group Fares"
    document.querySelector(".loading").style.top = "-200%";
    document.querySelector(".loading").style.display = "none";
  }
  return (
    <>
      {data && (
        
        <div>
          <br></br>
          <br></br>
          <br></br>
        <label className={style.label} htmlFor="title">
                Title
              </label>
              <input
                className={style.input}
                id="title"
                type="text"
                defaultValue={data.Title}
              ></input>
              <br></br>
              <br></br>
              <br></br>
          <div className={style.tablewrap}>
            <p className={style.heading}>Available Flights</p>
            <div className={style.rowWrap}>
              <div className={style.input}>Sector</div>
              <div className={style.input}>Travel Date</div>
              <div className={style.input}>Flight No. & Time</div>
              <div className={style.input}>Seats</div>
              <div className={style.input}>Group Fare</div>
            </div>
            <div className="tableGene">
              {final &&
                final.map((e) => (
                  <div key={Math.random()} id={e[4]} className="wrap">
                    <div className={`${style.rowWrap} flightrows`}>
                      <input
                        className={`${style.input} sector`}
                        type="text"
                        defaultValue={e[0]}
                      ></input>
                      <input
                        className={`${style.input} td`}
                        type="text"
                        defaultValue={e[1]}
                      ></input>
                      <input
                        className={`${style.input} flno`}
                        type="text"
                        defaultValue={e[2]}
                      ></input>
                      <input
                        className={`${style.input} seat`}
                        type="text"
                        defaultValue={e[3]}
                      ></input>
                       <input
                        className={`${style.input} gfs`}
                        type="text"
                        defaultValue={e[4]}
                      ></input>
                    </div>
                    <button
                    onClick={() => {
                      
                      setFinal(
                        final.filter(a =>{
                          return a[0]!==e[0]
                        }
                         
                        )
                      );
                    }}   
                      className={`${style.subsubBtn} delteBtns`}
                    >
                      Delete
                    </button>
                  </div>
                ))}
            </div>

            <button className={style.subBtn} onClick={openPop}>
              Add More Flight
            </button>
          </div>
          <div className={`${style.loading} loading`}>
            <div className={style.loadingWrapper}>
              <div className={`${style.rowWrap} flightrows`}>
                <input
                  className={`${style.input} sectorNew`}
                  type="text"
                  defaultValue="Sector"
                ></input>
                <input
                  className={`${style.input} tdNew`}
                  type="text"
                  defaultValue="Travel Date"
                ></input>
                <input
                  className={`${style.input} flnoNew`}
                  type="text"
                  defaultValue="Flight No. & Time"
                ></input>
                <input
                  className={`${style.input} seatNew`}
                  type="text"
                  defaultValue="Seat"
                ></input>
                <input
                  className={`${style.input} gfNew`}
                  type="text"
                  defaultValue="Goup Fare"
                ></input>
              </div>
              <br></br>
              <br></br>
              <button onClick={addFlight} className={style.submit}>Done</button>
            </div>
          </div>
          <button className={style.submit} onClick={addData}>
            Submit Data
          </button>
          <button className={style.submit} onClick={deleteData}>
            Delete Package
          </button>
        </div>
      )}
    </>
  );
};

export default Post;
