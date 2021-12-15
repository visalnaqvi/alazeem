import style from "../../../styles/Hero.module.css"
import Head from "next/head"
import Article from "../../../comps/Article";
import BoilerBody from "../../../comps/BoilerBody"
import Table from "../../../comps/blogs/Table";
const Ladakh = () => {

    let ladakhPackages=[
        {title:"Thrilling Ladakh - Deluxe - Winter Special",price:"Rs.19,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"1" , link:"/Tour-Packages/Ladakh-Tour-Package"},
        {title:"Ladakh Special (leh)",price:"Rs.17,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"2" , link:"/Tour-Packages/Ladakh-Tour-Package"},
        {title:"Thrilling Ladakh - Premium -Winter Special",price:"Rs.22,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"3" , link:"/Tour-Packages/Ladakh-Tour-Package"},
        {title:"A Week in Frozen Ladakh - Deluxe",price:"Rs.25,000/-",nights:"5 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"4" , link:"/Tour-Packages/Ladakh-Tour-Package"},
        {title:"A Week in Frozen Ladakh - Premium",price:"Rs.26,000/-",nights:"5 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"5" , link:"/Tour-Packages/Ladakh-Tour-Package"},
        
        ]

      return ( 
       
        <>
        <Head>
      <title>Ladakh Tour Package from Al Azeem Tour and Travels</title>
      <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
      <html lang="en"/>
      <meta charset="UTF-8" />
        <meta
      name="description"
      content="We provide the most economical and luxurious Ladakh tour package with travelling, hotel booking and meals. Our Ladakh tour package is fully customizable."
    />
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      </Head>
            <div className={`${style.slide} ${style.Ladakh} bg-class flex-class`}>
            
            <div className={style.content}>
                <h1 className={style.heading}>The Best Ladakh Tour Packages</h1>
                <p className={style.text}>A Better Way To Travel. We are the one stop provider for all your travel needs and requirements</p>
            </div>
            <div className={style.shade}></div>
        </div>

        <Article heading="Exlopre Ladakh Tour Packages" text={["The majestic beauty, imposing mountains, serene lakes, swift rivers, lots of adventure, and what not? There are thousands of reasons to visit Ladakh right now! Ladakh is home to many rare kinds of flora and fauna. Here, you will find rare Tibetan wild ass, nimble ibex, Tibetan antelope, etc. Enjoy the wildlife safaris, spot exotic flora and fauna, scenic monasteries, Feel the thrill of mountain biking and the list goes on." ]}></Article>
        <div className="flex-class" style={{width:"90vw",margin:"auto"}}>
        <Table content={ladakhPackages}></Table>
      </div>
        <BoilerBody></BoilerBody>
        </>
        
     );
}
 
export default Ladakh;