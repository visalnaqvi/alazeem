import style from "../styles/Article.module.css";
import styl from "../styles/Umrah.module.css";
import Head from "next/dist/shared/lib/head";
import tick from "../public/icons/check.png";
import Image from "next/image";
import umrahCardStyle from "../styles/umrahCard.module.css"
import Script from 'next/script'
const BaitulMuqadas = ()=>{
    return (
        <>
        <Head>
        <meta
          name="description"
          content="Best Tour and Travels Agency in Delhi Laxmi Nagar.Hajj Umrah Tour Package available. Hajj Umrah economic tour packages. Including Hotel Booking , Travel Planning etc.Umrah Package by Al Azeem Tours and Travel"
        />

        <title>
          Best Baitul Muqadas Package by AA Travels (Al-Azeem)
        </title>
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
        </>
    );
}

export default BaitulMuqadas;