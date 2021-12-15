import style from "../../../styles/Hero.module.css"
import Head from "next/head"
import Article from "../../../comps/Article";
import BoilerBody from "../../../comps/BoilerBody"
import Table from "../../../comps/blogs/Table";
const Andaman = () => {
    let andamamPackages=[{title:"Andaman - Xmas & New Year Special",price:"Rs.30,000/-",nights:"5 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"1", link:"/Tour-Packages/Andaman-Tour-Package"},
    {title:"Fascinating Andaman With Photoshoot And Glass Bottom Ride",price:"Rs.15,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"2", link:"/Tour-Packages/Andaman-Tour-Package"},
    {title:"Andaman Delight",price:"Rs.5,000/-",nights:"3 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"3", link:"/Tour-Packages/Andaman-Tour-Package"},
    {title:"Dazzling Andaman With Photoshoot, Glass Bottom Boat Ride",price:"Rs.22,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"4", link:"/Tour-Packages/Andaman-Tour-Package"},
    {title:"Mini Andaman",price:"Rs.11,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"5", link:"/Tour-Packages/Andaman-Tour-Package"},
    
    ]
    
    return ( 
       
        <>
        <Head>
      <title>Andaman Tour Package from Al Azeem Tour and Travels</title>
      <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
      <html lang="en"/>
      <meta charset="UTF-8" />
        <meta
      name="description"
      content="We provide the most economical and luxurious Andaman tour package with travelling, hotel booking and meals. Our Andaman tour package is fully customizable."
    />
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      </Head>
            <div className={`${style.slide} ${style.Andaman} bg-class flex-class`}>
            
            <div className={style.content}>
                <h1 className={style.heading}>The Best Andaman Tour Packages</h1>
                <p className={style.text}>A Better Way To Travel. We are the one stop provider for all your travel needs and requirements</p>
            </div>
            <div className={style.shade}></div>
        </div>

        <Article heading="Exlopre Andaman Tour Packages" text={["Visit the land of beautiful beaches, underwater diving, the scenery under the ocean will leave you in amaze and you will want to come for more. If you say yourself an aqua lover this is the place for you. You will love the aqua life, underwater and enjoy exploring the ocean and doing numerous activities around the island." ]}></Article>
        <div className="flex-class" style={{width:"90vw",margin:"auto"}}>
        <Table content={andamamPackages}></Table>
      </div>
        <BoilerBody></BoilerBody>
        </>
        
     );
}
 
export default Andaman;