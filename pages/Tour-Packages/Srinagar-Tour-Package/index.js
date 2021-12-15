import style from "../../../styles/Hero.module.css"
import Head from "next/head"
import Article from "../../../comps/Article";
import BoilerBody from "../../../comps/BoilerBody"
import Table from "../../../comps/blogs/Table";
const Srinagar = () => {
    let srinagarPackages=[{title:"Kashmir Leisure",price:"Rs.9,000/-",nights:"3 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"1" , link:"/Tour-Packages/Srinagar-Tour-Package"},
    {title:"Delightful Kashmir",price:"Rs.12,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"2" , link:"/Tour-Packages/Srinagar-Tour-Package"},
    {title:"Enthralling Kashmir",price:"Rs.15,000/-",nights:"5 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"3" , link:"/Tour-Packages/Srinagar-Tour-Package"},
    {title:"Splendid Kashmir",price:"Rs.12,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"4" , link:"/Tour-Packages/Srinagar-Tour-Package"},
    {title:"Heart Of Kashmir - Standard",price:"Rs.7,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"5" , link:"/Tour-Packages/Srinagar-Tour-Package"},
    
    ]
     return ( 
       
        <>
        <Head>
      <title>Srinagar Tour Package from Al Azeem Tour and Travels</title>
      <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
      <html lang="en"/>
      <meta charset="UTF-8" />
        <meta
      name="description"
      content="We provide the most economical and luxurious Srinagar tour package with travelling, hotel booking and meals. Our Srinagar tour package is fully customizable."
    />
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      </Head>
            <div className={`${style.slide} ${style.Srinagar} bg-class flex-class`}>
            
            <div className={style.content}>
                <h1 className={style.heading}>The Best Srinagar Tour Packages</h1>
                <p className={style.text}>A Better Way To Travel. We are the one stop provider for all your travel needs and requirements</p>
            </div>
            <div className={style.shade}></div>
        </div>

        <Article heading="Exlopre Srinagar Tour Packages" text={["If there is heaven on earth, this is it. Visiting Srinagar will make you fall in love with it. It’s a city that will leave you mesmerized with its beauty. You will remember the memories that you made there long after your visit. With its beautiful view of the Himalayas, snowfalls, and charismatic charm Srinagar made its place on this list. If you love the mountains and adventures then Srinagar is your one-stop place to visit." ]}></Article>
        <div className="flex-class" style={{width:"90vw",margin:"auto"}}>
        <Table content={srinagarPackages}></Table>
      </div>
        <BoilerBody></BoilerBody>
        </>
        
     );
}
 
export default Srinagar;