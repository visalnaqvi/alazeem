import style from "../../../styles/Hero.module.css"
import Head from "next/head"
import Article from "../../../comps/Article";
import BoilerBody from "../../../comps/BoilerBody"
import Table from "../../../comps/blogs/Table";
const Agra = () => {


    let agraPackages=[{title:"Mesmerising Agra",price:"Rs.30,000/-",nights:"5 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"1", link:"/Tour-Packages/Agra-Tour-Package"},
    {title:"Premium Agra with Photoshoot",price:"Rs.15,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"2", link:"/Tour-Packages/Andaman-Tour-Package"},
    {title:"Agra Delight",price:"Rs.5,000/-",nights:"3 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"3", link:"/Tour-Packages/Andaman-Tour-Package"},
    {title:"Mini Agra",price:"Rs.11,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"5", link:"/Tour-Packages/Andaman-Tour-Package"},
    
    ]
    return ( 
       
        <>
        <Head>
      <title>Agra Tour Package from Al Azeem Tour and Travels</title>
      <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
      <html lang="en"/>
      <meta charset="UTF-8" />
        <meta
      name="description"
      content="We provide the most economical and luxurious Agra tour package with travelling, hotel booking and meals. Our Agra tour package is fully customizable."
    />
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      </Head>
            <div className={`${style.slide} ${style.agra} bg-class flex-class`}>
            
            <div className={style.content}>
                <h1 className={style.heading}>The Best Agra Tour Packages</h1>
                <p className={style.text}>A Better Way To Travel. We are the one stop provider for all your travel needs and requirements</p>
            </div>
            <div className={style.shade}></div>
        </div>

        <Article heading="Exlopre Agra Tour Packages" text={["Where better to go for a romantic holiday than to the great testament of love, the ", <b key="1">Taj Mahal</b>, "? Built by the grieving Mughal Emperor Shah Jahan in memory of his late wife Mumtaz Mahal, the Taj Mahal's unrivaled beauty explains why it’s regarded as one of the eight wonders of the world. A visit to India wouldn’t be complete without visit the city of ", <b key="6">agra</b>," Other must-experience destinations in " , <b key="7">Agra</b>," are two other UNESCO World Heritage Sites, the sandstone Red Fort and Fatehpur Sikri. And for you to visit in the best way we have ",<b key="4">Agra tour package</b>," more affordable , economic and luxurious than anywhere else." ]}></Article>
        <div className="flex-class" style={{width:"90vw",margin:"auto"}}>
        <Table content={agraPackages}></Table>
      </div>
        <BoilerBody></BoilerBody>
        </>
        
     );
}
 
export default Agra;