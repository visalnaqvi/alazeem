import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./PackageCard";
import style from "../../styles/Package.module.css"
const SliderSingle = ({packages}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
        autoplaySpeed:3000,
      };
    return (  
       
        <Slider {...settings}>
            {packages.map((packh)=>(
            <Card key="1" packh = {packh}></Card>
            ))}
       </Slider>
      
  );
}
 
export default SliderSingle;