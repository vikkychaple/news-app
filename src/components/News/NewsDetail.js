import React from 'react';
import { useParams } from 'react-router-dom';
import { useNews } from '../../context/NewsContext';

const NewsDetail = () => {
  const { news } = useNews();
  const { id } = useParams();
  const article = news.find((article) => article.id === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <img src={article.urlToImage} alt={article.title} />
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read Full Article
      </a>
    </div>
  );
};

export default NewsDetail;
