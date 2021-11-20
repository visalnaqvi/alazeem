import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./PackageCard";
const PackageSlider = ({packages}) => {
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
    return (  
        <Slider style={{width:"90vw",marginBottom:"50px"}} {...settings}>
        {packages.map((packh)=>(
           <Card key="1" packh = {packh}></Card>
        ))}
       </Slider>
  );
}
 
export default PackageSlider;