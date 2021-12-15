import style from "../../../styles/Hero.module.css"
import Head from "next/head"
import Article from "../../../comps/Article";
import BoilerBody from "../../../comps/BoilerBody"
import Table from "../../../comps/blogs/Table";
const Mcleodganj = () => {
    let mcleodganjPackages=[{title:"Weekend Gateways - Dharamshala",price:"Rs 8,000",nights:"5 Nights",facilities:"Meals , Accommodation , Volvo , Transfer , Sightseeing" , key:"1" , link:"/Tour-Packages/Mcleodganj-Tour-Package"},]

     return ( 
       
        <>
        <Head>
      <title>Mcleodganj Tour Package from Al Azeem Tour and Travels</title>
      <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
      <html lang="en"/>
      <meta charset="UTF-8" />
        <meta
      name="description"
      content="We provide the most economical and luxurious Mcleodganj tour package with travelling, hotel booking and meals. Our Mcleodganj tour package is fully customizable."
    />
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      </Head>
            <div className={`${style.slide} ${style.Mcleodganj} bg-class flex-class`}>
            
            <div className={style.content}>
                <h1 className={style.heading}>The Best Mcleodganj Tour Packages</h1>
                <p className={style.text}>A Better Way To Travel. We are the one stop provider for all your travel needs and requirements</p>
            </div>
            <div className={style.shade}></div>
        </div>

        <Article heading="Exlopre Mcleodganj Tour Packages" text={["Mcleodganj is a town in the middle of the majestic mountains of the Dhauladhar range, Himachal Pradesh the breathtaking view of the mountains is once in a lifetime experience. Triund is a perfect camping site under thousands of stars. Macleodganj Is also famous for its culture. Mcleodganj has various tourist points like waterfalls, sunset points, monasteries, temples." ]}></Article>
        <div className="flex-class" style={{width:"90vw",margin:"auto"}}>
        <Table content={mcleodganjPackages}></Table>
      </div>
        <BoilerBody></BoilerBody>
        </>
        
     );
}
 
export default Mcleodganj;