import style from "../../styles/Hero.module.css"
import Head from "next/head"
import Article from "../../comps/Article";
import PackageCard from "../../comps/Packages/PackageCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BoilerBody from "../../comps/BoilerBody"
const Nainital = () => {
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
    const pack1 = {price:"1200",title:"Nainital Package Tour One" , f1:"3 days , 2 nights stay in Nainital" ,f2:"We will book the best hotel with best services and location" , f3:"The most comfortable and econimical options of travel will be available" , f4:"Breakfast , lunch , dinner", link:"/contactus"};
    const pack2 = {price:"2200",title:"Nainital Package Tour Two" , f1:"5 days , 4 nights stay in Nainital" ,f2:"We will book the best hotel with best services and location" , f3:"The most comfortable and econimical options of travel will be available" , f4:"Breakfast , lunch , dinner", link:"/contactus"};
    const pack3 = {price:"3200",title:"Nainital Package Tour Three" , f1:"7 days , 6 nights stay in Nainital" ,f2:"We will book the best hotel with best services and location" , f3:"The most comfortable and econimical options of travel will be available" , f4:"Breakfast , lunch , dinner", link:"/contactus"};
    const pack4 = {price:"4200",title:"Nainital Package Tour Three" , f1:"10 days , 9 nights stay in Nainital" ,f2:"We will book the best hotel with best services and location" , f3:"The most comfortable and econimical options of travel will be available" , f4:"Breakfast , lunch , dinner", link:"/contactus"};
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
 
export default Nainital;