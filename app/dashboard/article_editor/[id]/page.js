import getArticle from '@/app/libs/getArticle';
import ArticleForm from '../../../components/ArticleForm';
import { notFound } from 'next/navigation';
const ArticleEditor = async ({params : {id}}) => {
  try {
    const article = await getArticle(id);
    return (
      <div>
        <ArticleForm article = {article} hedding="Edit Article"/>
      </div>
    );
  } catch (error) {
    return notFound();
  }
};

export default ArticleEditor;
