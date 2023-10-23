import ArticaleTable from "../components/ArticleTable";
import getArticles from "../libs/getArticles";

const dashboard = async () =>{
    const articles = await getArticles();
    return (
        <div>
            <ArticaleTable articles={articles}/>
        </div>
    )
}
export default dashboard;