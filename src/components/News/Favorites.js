import React from 'react';
import { useNews } from '../../context/NewsContext';
import NewsItem from './NewsItem';

const Favorites = () => {
  const { favorites } = useNews();

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((article) => (
        <NewsItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Favorites;
