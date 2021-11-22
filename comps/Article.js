import style from "../styles/Article.module.css"
const Article = ({headingcenter ,headingnormal, heading , text  , textcenter}) => {
    return ( 
        
 
            <div className={style.article}>
                {headingcenter&&<h1 className={style.articletitlecenter}>{headingcenter}</h1>}
                {headingnormal&&<h1 className={style.articletitlecenter}>{headingnormal}</h1>}
                {heading&&<h1 className={style.articletitle}>{heading}</h1>}
                {text&&<div className={style.articletext}>{text}</div>}
                {textcenter&&<div className={style.articletextcenter}>{textcenter}</div>}
            </div>
   
      
    );
}
 
export default Article;