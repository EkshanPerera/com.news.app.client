import React from 'react';
import getFullDate from '../libs/getFullDate';

const ArticleDetail = ({ article }) => {
  return (
    <div className="container mx-auto my-8">
      <div className="max-w-2xl mx-auto">
        <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded" />
        <h1 className="text-3xl font-bold my-4">{article.title}</h1>
        <p className="text-gray-600 mb-4">Published on: {getFullDate(article.createdAt)}</p>
        <p className="text-gray-600 mb-4">Published by: {article.author.username}</p>
        <p className="text-lg leading-relaxed">{article.content}</p>
      </div>
    </div>
  );
};

export default ArticleDetail;
