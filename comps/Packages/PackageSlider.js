import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./PackageCard";
import style from "../../styles/Package.module.css"
const PackageSlider = ({packages}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,

        autoplaySpeed:2500,
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
                    arrows:false,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
      };
    return (  
        <div className={style.wrap}>
        <Slider style={{width:"90vw",marginBottom:"50px"}} {...settings}>
            {packages.map((packh)=>(
            <Card key="1" packh = {packh}></Card>
            ))}
       </Slider>
       </div>
  );
}
 
export default PackageSlider;