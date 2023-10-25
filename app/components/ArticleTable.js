"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";
import deleteArticle from "../libs/deleteArticle";
import getArticles from "../libs/getArticles";

const ArticaleTable = (props) => {
  const router = useRouter();
  const articles = props.articles;
  const editBtnHandler = (id) => {
    router.push(`/dashboard/article_editor/${id}`);
  };
  const deleteBtnHandler = async (id) => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this file?",
      icon: "warning",
      dangerMode: true,
    });

    if (willDelete) {
      try {
        const response = await deleteArticle(id);
        if (response.ok) {
          router.refresh();
        }
        swal("Deleted!", "Your imaginary file has been deleted!", "success");
      } catch (error) {
        console.log(error);
        swal("Error!", "Unauthorize access!", "error");
      }
    }
  };
  const refreshHandler = () => {
    router.refresh();
  }
  return (
    <div>
      <Button variant="primary" type="button" onClick={refreshHandler}>
        Refresh
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article._id}>
              <td>{article.title}</td>
              <td>{article.description}</td>
              <td>
                <div className="py-1">
                  <Button
                    variant="primary"
                    onClick={() => editBtnHandler(article._id)}
                  >
                    Edit
                  </Button>
                </div>{" "}
                <div>
                  <Button
                    onClick={() => deleteBtnHandler(article._id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ArticaleTable;
