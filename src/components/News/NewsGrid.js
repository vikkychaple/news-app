import React from 'react';
import { useNews } from '../../context/NewsContext';
import NewsItem from './NewsItem';

const NewsGrid = () => {
  const { news } = useNews();

  return (
    <div>
      <h2>News Grid</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
        {news.map((article) => (
          <NewsItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsGrid;
