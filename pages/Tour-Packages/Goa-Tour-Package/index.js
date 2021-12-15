import style from "../../../styles/Hero.module.css";
import Head from "next/head";
import Article from "../../../comps/Article";
import BoilerBody from "../../../comps/BoilerBody";
import Table from "../../../comps/blogs/Table";
const Goa = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          autoplaySpeed: 2500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  let goaPackages = [
    {
      title: "Goa - Lakshadweep Cruise Vacation",
      price: "Rs.30,000/-",
      nights: "5 Nights",
      facilities: "Meals, Flights, Accommodation, Transfer, Sightseeing",
      key: "1",
      link: "/Tour-Packages/Goa-Tour-Package",
    },
    {
      title: "Glimpse Of Goa With Flight!",
      price: "Rs.15,000/-",
      nights: "3 Nights",
      facilities: "Meals, Accommodation, Transfer",
      key: "2",
      link: "/Tour-Packages/Goa-Tour-Package",
    },
    {
      title: "Luxury Getaway To Goa For 5 Nights",
      price: "Rs.20,000/-",
      nights: "5 Nights",
      facilities: "Meals, Accommodation",
      key: "3",
      link: "/Tour-Packages/Goa-Tour-Package",
    },
    {
      title: "2 nights Cruise Holiday",
      price: "Rs.15,000/-",
      nights: "2 Nights",
      facilities: "Meals, Accommodation",
      key: "4",
      link: "/Tour-Packages/Goa-Tour-Package",
    },
    {
      title: "Honeymoon Trip To Goa",
      price: "Rs.9,000/-",
      nights: "5 Nights",
      facilities: "Meals, Accommodation, Transfer",
      key: "5",
      link: "/Tour-Packages/Goa-Tour-Package",
    },
  ];
  
  return (
    <>
      <Head>
        <title>Goa Tour Package from Al Azeem Tour and Travels</title>
        <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="We provide the most economical and luxurious Goa tour package with travelling, hotel booking and meals. Our Goa tour package is fully customizable."
        />
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      </Head>
      <div className={`${style.slide} ${style.goa} bg-class flex-class`}>
        <div className={style.content}>
          <h1 className={style.heading}>The Best Goa Tour Packages</h1>
          <p className={style.text}>
            A Better Way To Travel. We are the one stop provider for all your
            travel needs and requirements
          </p>
        </div>
        <div className={style.shade}></div>
      </div>

      <Article
        heading="Exlopre Goa Tour Packages"
        text={[
          "Goa is one of the most popular destinations among youth in India. The natural beautiful beaches in the state with different beach sports, cruises, partying, and the whole vibe of the state is a must-experience thing. Visit Goa with your friends once and you will never forget the trip. Take the famous Mumbai to goa cruise, party with your friends, and live every moment to its fullest.",
        ]}
      ></Article>
      <div className="flex-class">
        <Table content={goaPackages}></Table>
      </div>

      <BoilerBody></BoilerBody>
    </>
  );
};

export default Goa;
