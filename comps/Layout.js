import Nav from "./NavBar";
import Footer from "./Footer/Footer";
const Layout = ({children}) => {
    return ( <>
    <Nav></Nav>
    {children}
    <Footer></Footer>
    </> );
}
 
export default Layout;
