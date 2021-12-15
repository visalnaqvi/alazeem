import style from "../../styles/Blog.module.css"
const Headings = ({h1,h2,h3,h4}) => {
    return ( 
        <>
        {h1&&<h1 className={style.h1}>{h1}</h1>}
        {h2&&<h2 className={style.h2}>{h2}</h2>}
        {h3&&<h3 className={style.h3}>{h3}</h3>}
        {h4&&<h4 className={style.h4}>{h4}</h4>}
        </>
     );
}
 
export default Headings;