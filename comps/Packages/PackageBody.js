import Article from "../Article";
import GreyBox from "../GreyBox/GreyBox";
import PackageSlider from "./PackageSlider";
import { useEffect, useState } from "react";
import firebase from 'firebase/app';
import style from "../../styles/Article.module.css"
import "firebase/firestore"
const PackageBody = ({packages}) => {

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
    
    db.collection("packages")
    .onSnapshot((querySnapshot) => {
            const inpack = []
            querySnapshot.forEach((doc) => {
                inpack.push(doc.data());
                });
                setPack(inpack)
    })

}, [])
    const headingTour = "Featured Travel Plans"
    const textTours = ['We are naturally head of the class when it comes to ',<strong key="1" className={style.articletext}>luxury travel planning</strong>,' because we do more homework than anyone else.']
    return ( 
        <>
                    <Article heading={headingTour} text={ textTours } style={{textAlign : "justify"}}></Article>
        <GreyBox></GreyBox>
        <br /><br />
            <div className="sub-packages flex-class wrap" style={{width:"100%"}}>
            
         
         {pckages && <PackageSlider packages = {pckages}></PackageSlider>}
         
                    
                   
              

            </div>

        </>
     );
}
 
export default PackageBody;