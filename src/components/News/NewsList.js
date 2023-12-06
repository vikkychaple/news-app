import React, { useEffect } from 'react';
import { useNews } from '../../context/NewsContext';
import NewsItem from './NewsItem';
import { getNews } from '../../services/newsApi';

const NewsList = () => {
  const { news, setNews } = useNews();

  useEffect(() => {
    const fetchNews = async () => {
      const articles = await getNews();
      setNews(articles);
    };

    fetchNews();
  }, [setNews]);

  return (
    <div>
      <h2>News List</h2>
      {news.map((article) => (
        <NewsItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
