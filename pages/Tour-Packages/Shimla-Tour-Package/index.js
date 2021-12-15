import style from "../../../styles/Hero.module.css"
import Head from "next/head"
import Article from "../../../comps/Article";
import BoilerBody from "../../../comps/BoilerBody"
import Table from "../../../comps/blogs/Table";
const Shimla = () => {
    let shimlaPackages=[
        {title:"Thrilling Shimla - Deluxe - Winter Special",price:"Rs.19,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"1" , link:"/Tour-Packages/Ladakh-Tour-Package"},
        {title:"Shimla Special (leh)",price:"Rs.17,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"2" , link:"/Tour-Packages/Ladakh-Tour-Package"},
        {title:"Thrilling Shimla - Premium -Winter Special",price:"Rs.22,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"3" , link:"/Tour-Packages/Ladakh-Tour-Package"},
        {title:"A Week in Frozen Shimla - Deluxe",price:"Rs.25,000/-",nights:"5 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"4" , link:"/Tour-Packages/Ladakh-Tour-Package"},
        {title:"A Week in Frozen Shimla - Premium",price:"Rs.26,000/-",nights:"5 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"5" , link:"/Tour-Packages/Ladakh-Tour-Package"},
        
        ]
    return ( 
       
        <>
        <Head>
      <title>Shimla Tour / Trip Package - Al Azeem Tour and Travels</title>
      <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
        <meta
      name="description"
      content="We provide the most economical and luxurious shimla tour package with all your needs from travelling to hotel booking and meals including breakfast , lunch , dinner all are covered. Our shimla tour package is fully customizable."
    />
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      </Head>
            <div className={`${style.slide} ${style.shimla} bg-class flex-class`}>
            
            <div className={style.content}>
                <h1 className={style.heading}>Shimla Tour / Trip Package </h1>
                <p className={style.text}>A Better Way To Travel.We are the one stop provider for all your travel needs and requirements</p>
            </div>
            <div className={style.shade}></div>
        </div>

        <Article heading="Shimla - The Queen of Hills" text={[<b key="1">Shimla is capital and also the largest city of himachal pradesh</b> ,<b key="2">. The best time to visit Shimla</b>, "is during May to June and December to January when romance and beauty are baked into every inch of the soil here. Clear blue skies in summer, sprinkles of powdery snow in the winter, the spicy and earthy scent carried by pines, firs, cedars and oak trees. Old Elizabethan architecture, town squares, charming cafes and loving locals. ",<b key="3">Shimla</b>," is truly a vacationer’s paradise. And for your comfortable visit we have perfect ",<b key="4">shimla tour package</b>," more affordable , economic and luxurious than anywhere else." ]}></Article>
        <div className="flex-class" style={{width:"90vw",margin:"auto"}}>
        <Table content={shimlaPackages}></Table>
      </div>

        <BoilerBody></BoilerBody>
        </>
     );
}
 
export default Shimla;