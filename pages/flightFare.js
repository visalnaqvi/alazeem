import "firebase/firestore"
import firebase from 'firebase/app';
import PackageTableCollector from "../comps/PackageTableCollector";
import { useEffect, useState } from "react";
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

db.collection("flightFares")
.onSnapshot((querySnapshot) => {
        const inpack = []
        querySnapshot.forEach((doc) => {
            inpack.push(doc.data());
            });
            setPack(inpack)
})

}, [])
    return ( <div>{
       pckages && 
            <PackageTableCollector packages = {pckages}></PackageTableCollector>
}
<br></br>
<br></br>
        </div>
     );
}
 
export default FlightFares;