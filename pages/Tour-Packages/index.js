import Packages from "../../comps/Packages/Packages";
import Head from "next/head";
const PackagesPage = () => {
    return (<>
    <Head>
      <title>Al Azeem Tour & Travels - Tour Packages Al Azeem Tour & Travels</title>
      <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
        <meta
      name="description"
      content="Best Tour and Travels Agency in Delhi. Saudi Arabia Tour Package and Hajj Umrah Tour Package available. We are your economic vaccation planners. We have trips available all over India. Features including Hotel Booking , Travel Planning etc"
    />
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      </Head>
        <Packages grid={true}></Packages></>
     );
}
 
export default PackagesPage;