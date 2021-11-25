import style from "../styles/Article.module.css"
const Article = ({headingcenter ,headingnormal, heading , text  , textcenter}) => {
    return ( 
        
 
            <div className={style.article}>
                {headingcenter&&<h2 className={style.articletitlecenter}>{headingcenter}</h2>}
                {headingnormal&&<h2 className={style.articletitlecenter}>{headingnormal}</h2>}
                {heading&&<h2 className={style.articletitle}>{heading}</h2>}
                {text&&<div className={style.articletext}>{text}</div>}
                {textcenter&&<div className={style.articletextcenter}>{textcenter}</div>}
            </div>
   
      
    );
}
 
export default Article;