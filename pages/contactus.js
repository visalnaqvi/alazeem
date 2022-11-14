import ContactUs from "../comps/Contact/Contact";
import Head from "next/head";
import Script from 'next/script'
const ContactUsPage = () => {
    return (<>
        <Head>
        <meta
          name="keywords"
          content="Air ticketing agency in Delhi,
          Travel agency in Laxmi Nagar,
          Cheapest air ticketing agency in Delhi,
          Turkey visa proving agency,
          Dubai visa travelling agency,
          Thailand Visa services,
          Holiday packages for Kashmir,
          Holiday package for Manali,
          Holiday package for Kerala,
          Holiday package for Goa,
          Holiday package for Dubai,
          Holiday package for Thailand,
          Holiday package for Bankok,
          Umrah packages,
          Cheapest umrah package,
          Best Delhi Jedda group fare,
          Umrah package service,
          Best umrah package,
          Best umrah package from delhi,
          Best umrah packahe for Jaipur,
          Best umrah package from Mumbai,
          Cheapest group fare from Mumbai to jedda,
          Cheapest group fare from Jaipur to jedda,
          "
        />
        <meta
      name="description"
      content="Best Tour and Travels Agency in Delhi. Saudi Arabia Tour Package and Hajj Umrah Tour Package available. We are your economic vaccation planners. We have trips available all over India. Features including Hotel Booking , Travel Planning etc"
    />
      <title>Al Azeem Tour & Travel - Contact Page Al Azeem Tour & Travel</title>
      <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
        
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      </Head>
      <Script strategy="lazyOnload" src={'https://www.googletagmanager.com/gtag/js?id=G-DT357YR96S'} />

<Script strategy="lazyOnload" id="analytics">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DT357YR96S', {
        page_path: window.location.pathname,
        });
    `}
</Script>
        <ContactUs></ContactUs> </>);
}
 
export default ContactUsPage;