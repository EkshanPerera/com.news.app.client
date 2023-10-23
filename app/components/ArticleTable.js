'use client';
import React from 'react';
import { useRouter }  from 'next/navigation';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const ArticaleTable = (props) => {
    const articles = props.articles;
    const router = useRouter();
    const editBtnHandler = (id) => {
        router.push(`/article_editor/${id}`)
    }
    return (
        <div className="container mx-auto my-8">
          <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
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
                    <Button variant="primary" onClick={() => editBtnHandler(article._id)}>
                      Edit
                    </Button>{' '}
                    <Button variant="danger" >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
   
}

export default ArticaleTable;