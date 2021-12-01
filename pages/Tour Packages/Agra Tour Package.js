import style from "../../styles/Hero.module.css"
import Head from "next/head"
import Article from "../../comps/Article";
import PackageCard from "../../comps/Packages/PackageCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BoilerBody from "../../comps/BoilerBody"
const Agra = () => {
    document.documentElement.lang = 'en-us';
    const settings = {
        dots: true,
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
    const pack1 = {price:"1200",title:"3 Day Agra Package Tour" , f1:"3 days , 2 nights stay in Agra" ,f2:"We will book the best hotel with best services and location" , f3:"The most comfortable and econimical options of travel will be available" , f4:"Breakfast , lunch , dinner", link:"/contactus"};
    const pack2 = {price:"2200",title:"5 Day Agra Package Tour" , f1:"5 days , 4 nights stay in Agra" ,f2:"We will book the best hotel with best services and location" , f3:"The most comfortable and econimical options of travel will be available" , f4:"Breakfast , lunch , dinner", link:"/contactus"};
    const pack3 = {price:"3200",title:"7 Day Agra Package Tour" , f1:"7 days , 6 nights stay in Agra" ,f2:"We will book the best hotel with best services and location" , f3:"The most comfortable and econimical options of travel will be available" , f4:"Breakfast , lunch , dinner", link:"/contactus"};
    const pack4 = {price:"4200",title:"10 Day Agra Package Tour" , f1:"10 days , 9 nights stay in Agra" ,f2:"We will book the best hotel with best services and location" , f3:"The most comfortable and econimical options of travel will be available" , f4:"Breakfast , lunch , dinner", link:"/contactus"};
    return ( 
       
        <>
        <Head>
      <title>Agra Tour / Trip Package - Al Azeem Tour and Travels</title>
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
                <h1 className={style.heading}>Agra Tour / Trip Package </h1>
                <p className={style.text}>A Better Way To Travel. We are the one stop provider for all your travel needs and requirements</p>
            </div>
            <div className={style.shade}></div>
        </div>

        <Article heading="Exlopre Agra Tour Packages" text={["Where better to go for a romantic holiday than to the great testament of love, the ", <b key="1">Taj Mahal</b>, "? Built by the grieving Mughal Emperor Shah Jahan in memory of his late wife Mumtaz Mahal, the Taj Mahal's unrivaled beauty explains why it’s regarded as one of the eight wonders of the world. A visit to India wouldn’t be complete without visit the city of ", <b key="6">agra</b>," Other must-experience destinations in " , <b key="7">Agra</b>," are two other UNESCO World Heritage Sites, the sandstone Red Fort and Fatehpur Sikri. And for you to visit in the best way we have ",<b key="4">Agra tour package</b>," more affordable , economic and luxurious than anywhere else." ]}></Article>
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
 
export default Agra;