import { useRouter } from 'next/router';
import style from "../../styles/UmrahAdmin.module.css";
import firebase from "firebase/app";
import { useEffect, useState } from "react";
import "firebase/firestore";
import UmrahCard from '../../comps/umrahCard';
const Post = () => {
  const [data, setData] = useState();
  var tempdata;
  const router = useRouter()
  const { id } = router.query
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
const db = firebase.firestore();
// var docRef = db.collection("umrahPackages").doc(id);
// docRef.get().then((doc) => {
//   if (doc.exists) {
//     tempdata = doc.data()
//     setData(tempdata);
//   } else {
//       // doc.data() will be undefined in this case
//       console.log("No such document!");
//   }
// }).catch((error) => {
//   console.log("Error getting document:", error);
// });
useEffect(()=>{
  db.collection("umrahPackages").doc(id)
  .onSnapshot((querySnapshot) => {
          setData(querySnapshot.data());
  })
   
  }, [])
  return (
    <>{data &&
      <div className={style.idWrapper}>
        <div className={style.left}>
         
            <label className={style.label} htmlFor='title'>Title</label>
            <input className={style.input} id='title' type="text" value={data.Title}></input>
            <br></br>
            <label className={style.label}>Inclusions</label>
            {data.Tags.map((tag)=>(
              
                  <input key={tag} className={style.input} id={tag} type="text" value={tag}></input>
               
            ))}
             <label className={style.label} htmlFor='hotel1'>Makkah Hotel</label>
            <input className={style.input} id='hotel1' type="text" value={data.Hotels[0]}></input>
            <label className={style.label} htmlFor='hotel2'>Madina Hotel</label>
            <input className={style.input} id='hotel2' type="text" value={data.Hotels[1]}></input>
            <label className={style.label} htmlFor='price'>Price</label>
            <input className={style.input} id='price' type="text" value={data.Price}></input>
        </div>
        <div>
          <UmrahCard packh={data}></UmrahCard>
        </div>
      </div>
      
    }
    </>
  );
}

export default Post
