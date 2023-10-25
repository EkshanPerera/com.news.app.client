import ArticaleTable from "../components/ArticleTable";
import getArticles from "../libs/getArticles";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import LogoutForm from "../components/LogoutForm";


const dashboard = async () => {
  const articles = await getArticles();
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="py-1"><LogoutForm/></div>
      <div className="float-right py-1">
        <Link href={`/dashboard/article_editor`} className="px-1">
          <Button variant="primary" type="button">
            Add New
          </Button>
        </Link>     
      </div>
      <ArticaleTable articles={articles} />
    </div>
  );
};
export default dashboard;
