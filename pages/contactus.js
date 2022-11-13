import ContactUs from "../comps/Contact/Contact";
import Head from "next/head";
import Script from 'next/script'
const ContactUsPage = () => {
    return (<>
        <Head>
      <title>Al Azeem Tour & Travel - Contact Page Al Azeem Tour & Travel</title>
      <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
        <meta
      name="description"
      content="Best Tour and Travels Agency in Delhi. Saudi Arabia Tour Package and Hajj Umrah Tour Package available. We are your economic vaccation planners. We have trips available all over India. Features including Hotel Booking , Travel Planning etc"
    />
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