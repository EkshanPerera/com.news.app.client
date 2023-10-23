import getArticle from "@/app/libs/getArticle";
import ArticleDetail from "../../components/ArticleDetail";
import { notFound } from "next/navigation";

const ArticlePage = async ({ params: { id } }) => {
  try {
    const articles = await getArticle(id);
    return (
      <div>
        <ArticleDetail article={articles} />
      </div>
    );
  } catch (error) {
    return notFound();
  }
};

export default ArticlePage;
