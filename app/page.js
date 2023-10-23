import React from 'react';
import NewsList from './components/NewsList';
import getArticles from './libs/getArticles';


const Home = async () => {
  const articles = await getArticles();
  return (
    <div>
      <NewsList articles={articles} />
    </div>
  );
};

export default Home;
