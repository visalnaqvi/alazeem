import style from "../../styles/Hero.module.css"
import Head from "next/head"
import Article from "../../comps/Article";
import PackageCard from "../../comps/Packages/PackageCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BoilerBody from "../../comps/BoilerBody"
const Shimla = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 2500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
      };
    const pack1 = {price:"1200",title:"Shimla Package Tour One" , f1:"3 days , 2 nights stay in shimla" ,f2:"We will book the best hotel with best services and location" , f3:"The most comfortable and econimical options of travel will be available" , f4:"Breakfast , lunch , dinner", link:"/contactus"};
    const pack2 = {price:"2200",title:"Shimla Package Tour Two" , f1:"5 days , 4 nights stay in shimla" ,f2:"We will book the best hotel with best services and location" , f3:"The most comfortable and econimical options of travel will be available" , f4:"Breakfast , lunch , dinner", link:"/contactus"};
    const pack3 = {price:"3200",title:"Shimla Package Tour Three" , f1:"7 days , 6 nights stay in shimla" ,f2:"We will book the best hotel with best services and location" , f3:"The most comfortable and econimical options of travel will be available" , f4:"Breakfast , lunch , dinner", link:"/contactus"};
    const pack4 = {price:"4200",title:"Shimla Package Tour Three" , f1:"10 days , 9 nights stay in shimla" ,f2:"We will book the best hotel with best services and location" , f3:"The most comfortable and econimical options of travel will be available" , f4:"Breakfast , lunch , dinner", link:"/contactus"};
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
        <Slider style={{width:"90vw",marginBottom:"50px", margin:"0 auto"}} {...settings}>
            <PackageCard packh={pack1}></PackageCard>
            <PackageCard packh={pack2}></PackageCard>
            <PackageCard packh={pack3}></PackageCard>
            <PackageCard packh={pack4}></PackageCard>
        </Slider>
        <BoilerBody></BoilerBody>
        </>
     );
}
 
export default Shimla;