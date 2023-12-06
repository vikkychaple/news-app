import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({ article }) => {
  const handleToggleFavorite = () => {
    // Implement logic to toggle the favorite status
  };

  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <button onClick={handleToggleFavorite}>Toggle Favorite</button>
      <Link to={`/news/${article.id}`}>Read More</Link>
    </div>
  );
};

export default NewsItem;
