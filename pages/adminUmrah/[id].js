import { useRouter } from "next/router";
import style from "../../styles/UmrahAdmin.module.css";
import firebase from "firebase/app";
import { useEffect, useState } from "react";
import "firebase/firestore";
import UmrahCard from "../../comps/umrahCard";
import Image from "next/image";
import close from "../../public/icons/close_big.svg";
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

    db.collection("umrahPackages")
      .doc(id)
      .onSnapshot((querySnapshot) => {
        setData(querySnapshot.data());
        for (let i = 0; i < querySnapshot.data().Flights.length; i++) {
          var f = [];
          f.push(querySnapshot.data().Flights[i]);
          f.push(querySnapshot.data().DD[i]);
          f.push(querySnapshot.data().Departure[i]);
          f.push(querySnapshot.data().Arrival[i]);
          finalt.push(f);
        }
        setFinal(finalt);
        setFinal2(finalt);
      });
  }, []);
  function previewData() {
    // Add a new document in collection "cities"
    var title = document.getElementById("title").value;
    var tagsIn = document.querySelectorAll(".tagsinput");
    var tags = [];
    tagsIn.forEach((t) => {
      tags.push(t.value);
    });
    var hotel1 = document.getElementById("hotel1").value;
    var hotel2 = document.getElementById("hotel2").value;
    var hotels = [hotel1, hotel2];
    var price = document.getElementById("price").value;
    var flnoArr = [];
    var flnos = document.querySelectorAll(".flno");
    flnos.forEach((f) => {
      flnoArr.push(f.value);
    });
    var ddArr = [];
    var dds = document.querySelectorAll(".dd");
    dds.forEach((f) => {
      ddArr.push(f.value);
    });
    var dpArr = [];
    var dps = document.querySelectorAll(".dp");
    dps.forEach((f) => {
      dpArr.push(f.value);
    });
    var atArr = [];
    var ats = document.querySelectorAll(".at");
    ats.forEach((f) => {
      atArr.push(f.value);
    });

    var newData = {
      Hotels: hotels,
      Price: price,
      Title: title,
      Flights: flnoArr,
      DD: ddArr,
      Arrival: atArr,
      Departure: dpArr,
      Tags: tags,
      id: data.id,
    };
    setData(newData);
  }
  function addData() {
    // Add a new document in collection "cities"
    previewData();

    var title = document.getElementById("title").value;
    var tagsIn = document.querySelectorAll(".tagsinput");
    var tags = [];
    tagsIn.forEach((t) => {
      tags.push(t.value);
    });
    var hotel1 = document.getElementById("hotel1").value;
    var hotel2 = document.getElementById("hotel2").value;
    var hotels = [hotel1, hotel2];
    var price = document.getElementById("price").value;
    var flnoArr = [];
    var flnos = document.querySelectorAll(".flno");
    flnos.forEach((f) => {
      flnoArr.push(f.value);
    });
    var ddArr = [];
    var dds = document.querySelectorAll(".dd");
    dds.forEach((f) => {
      ddArr.push(f.value);
    });
    var dpArr = [];
    var dps = document.querySelectorAll(".dp");
    dps.forEach((f) => {
      dpArr.push(f.value);
    });
    var atArr = [];
    var ats = document.querySelectorAll(".at");
    ats.forEach((f) => {
      atArr.push(f.value);
    });
    let text = "Click confirm to update package";
    if (confirm(text) == true) {
      db.collection("umrahPackages")
        .doc(id)
        .set({
          Arrival: atArr,
          DD: ddArr,
          Departure: dpArr,
          Flights: flnoArr,
          Tags: tags,
          Title: title,
          Hotels: hotels,
          Price: price,
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
      db.collection("umrahPackages")
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
  }
  function addFlight() {
    var filghtNew = document.querySelector(".flnoNew");
    var ddNew = document.querySelector(".ddNew");
    var dpNew = document.querySelector(".dpNew");
    var atNew = document.querySelector(".atNew");
    setFinal([
      ...final,
      [filghtNew.value,ddNew.value,dpNew.value,atNew.value]
    ]
    )
    filghtNew.value = "Filght Number"
    ddNew.value = "Date and Destination"
    dpNew.value = "Departure Time"
    atNew.value = "Arrival Time"
    document.querySelector(".loading").style.top = "-200%";
    document.querySelector(".loading").style.display = "none";
  }
  return (
    <>
      {data && (
        <div>
          <div className={style.idWrapper}>
            <div className={style.left}>
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
              <label className={style.label}>Inclusions</label>
              {data.Tags.map((tag) => (
                <input
                  key={tag}
                  className={`${style.input} tagsinput`}
                  id={tag}
                  type="text"
                  defaultValue={tag}
                ></input>
              ))}
              <label className={style.label} htmlFor="hotel1">
                Makkah Hotel
              </label>
              <input
                className={style.input}
                id="hotel1"
                type="text"
                defaultValue={data.Hotels[0]}
              ></input>
              <label className={style.label} htmlFor="hotel2">
                Madina Hotel
              </label>
              <input
                className={style.input}
                id="hotel2"
                type="text"
                defaultValue={data.Hotels[1]}
              ></input>
              <label className={style.label} htmlFor="price">
                Price
              </label>
              <input
                className={style.input}
                id="price"
                type="text"
                defaultValue={data.Price}
              ></input>
            </div>
            <div>
              <UmrahCard packh={data}></UmrahCard>
              <button className={style.preview} onClick={previewData}>
                Preview Data
              </button>
            </div>
          </div>

          <div className={style.tablewrap}>
            <p className={style.heading}>Available Flights</p>
            <div className={style.rowWrap}>
              <div className={style.input}>Flight Number</div>
              <div className={style.input}>Date and Destination</div>
              <div className={style.input}>Departure Time</div>
              <div className={style.input}>Arrival Time</div>
            </div>
            <div className="tableGene">
              {final &&
                final.map((e) => (
                  <div key={e[0] + e[2] + e[3]} id={e[4]} className="wrap">
                    <div className={`${style.rowWrap} flightrows`}>
                      <input
                        className={`${style.input} flno`}
                        type="text"
                        defaultValue={e[0]}
                      ></input>
                      <input
                        className={`${style.input} dd`}
                        type="text"
                        defaultValue={e[1]}
                      ></input>
                      <input
                        className={`${style.input} dp`}
                        type="text"
                        defaultValue={e[2]}
                      ></input>
                      <input
                        className={`${style.input} at`}
                        type="text"
                        defaultValue={e[3]}
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
                  className={`${style.input} flnoNew`}
                  type="text"
                  defaultValue="Flight Number"
                ></input>
                <input
                  className={`${style.input} ddNew`}
                  type="text"
                  defaultValue="Date and Destination"
                ></input>
                <input
                  className={`${style.input} dpNew`}
                  type="text"
                  defaultValue="Departure"
                ></input>
                <input
                  className={`${style.input} atNew`}
                  type="text"
                  defaultValue="Arrival"
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
