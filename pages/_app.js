import '../styles/globals.css'
import Layout from '../comps/Layout'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
  return (
    <>
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
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
  )
}

export default MyApp
