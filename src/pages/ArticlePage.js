import {  useParams } from "react-router-dom";
import articlesContent from "./article-content";
import NotFoundPage from "./NotFoundPage";
const ArticlePage = ()=>{

    const {articleID} = useParams();
    const article = articlesContent.find(article=> article.name === articleID);
    if(!article){
        return <NotFoundPage />
    }
    return (
        <article>
            <h1>{article.title}</h1>
            {article.content.map((paragraph , index)=>{
                return <p key={index}>{paragraph}</p>
            })}
        </article>
    )
}
export default ArticlePage;