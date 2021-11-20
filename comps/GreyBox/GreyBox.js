import Article from "../Article";
import style from "../../styles/GreyBox.module.css"
import GreyBoxIn from "./GreyBoxIn";
import stylea from "../../styles/Article.module.css"
const GreyBox = () => {
    return ( 
     <div className={style.wrapper}>
        <div className="grey-box flex-class column">
            <Article style={{width:"100%"}} headingcenter="Saudi Arabia Via Kathmandu"></Article>
            <GreyBoxIn></GreyBoxIn>
        </div>
        </div>
       
     );
}
 
export default GreyBox;