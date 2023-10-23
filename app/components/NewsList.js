import React from 'react';
import Link from 'next/link';

const NewsList = (props) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {props.articles.map((article) => (
          <Link href={`/article/${article._id}`} key={article._id}>
          <div className="border border-gray-200 p-4 rounded">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-white-700">{article.description}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
