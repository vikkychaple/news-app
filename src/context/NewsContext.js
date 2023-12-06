import React, { createContext, useContext, useState } from 'react';

const NewsContext = createContext();

export function useNews() {
  return useContext(NewsContext);
}

export function NewsProvider({ children }) {
  const [news, setNews] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const value = {
    news,
    setNews,
    favorites,
    setFavorites,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}
export default NewsContext;