import style from "../../../styles/Hero.module.css"
import Head from "next/head"
import Article from "../../../comps/Article";
import BoilerBody from "../../../comps/BoilerBody"
import Table from "../../../comps/blogs/Table";
const Nainital = () => {
    let nanitalPackages=[{title:"Weekend Gateways - Nanital",price:"Rs 2,999",nights:"3 Nights",facilities:"Meals , Accommodation , Volvo , Transfer , Sightseeing" , key:"1" , link:"/Tour-Packages/Mcleodganj-Tour-Package"},]

    return ( 
       
        <>
        <Head>
      <title>Nainital Tour / Trip Package - Al Azeem Tour and Travels</title>
      <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
        <meta
      name="description"
      content="We provide the most economical and luxurious Nainital tour package with all your needs from travelling to hotel booking and meals including breakfast , lunch , dinner all are covered. Our Nainital tour package is fully customizable."
    />
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      </Head>
            <div className={`${style.slide} ${style.nainital} bg-class flex-class`}>
            
            <div className={style.content}>
                <h1 className={style.heading}>Nainital Tour / Trip Package </h1>
                <p className={style.text}>A Better Way To Travel.We are the one stop provider for all your travel needs and requirements</p>
            </div>
            <div className={style.shade}></div>
        </div>

        <Article heading="Explore Nainital Tour Packages" text={[<b key="1">Nainital is a charming hill station located at the foothills of the Kumaon ranges in Uttarakhand</b>, " Located close to Dehradun and Delhi, it is the most visited hill station in North India. Nainital is a perfect weekend getaway from Delhi and the nearby places. ",<b key="3">Nainital</b>," experiences a pleasant climate throughout the year, making it a popular hill station for families, couples and even solo ",<b key="3">travellers</b>,". It is easily accessible from nearby major cities by road and is ideal for a 2-day visit. ",<b key="6">The Naina Lake is the centre of Nainital</b>,"with Mall Road on one side, Thandi Sadak on the other side, and the bus stand opposite it. And for you to visit ",<b key="8">nainital</b>," in the best way we have ",<b key="4">Nainital tour package</b>," more affordable , economic and luxurious than anywhere else." ]}></Article>
        <div className="flex-class" style={{width:"90vw",margin:"auto"}}>
        <Table content={nanitalPackages}></Table>
      </div>
        <BoilerBody></BoilerBody>
        </>
     );
}
 
export default Nainital;