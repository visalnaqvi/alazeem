import Article from "./Article";
const Map = () => {
    return ( 
        <div className="flex-class column">
        <Article headingcenter="Visit Us" textcenter="Address:1/53, Ist Floor, Lalita Park, Laxmi Nagar, Delhi-92"></Article>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14008.100923222779!2d77.2742535!3d28.6290059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x245f7b8f0d7fd129!2sAL-AZEEM%20TOUR%20%26%20TRAVELS!5e0!3m2!1sen!2sin!4v1635333611758!5m2!1sen!2sin" style={{ width:"80%", height:"400px" , border:"none" , margin:"auto"}} loading="lazy"></iframe>
        </div>
     );
}
 
export default Map;