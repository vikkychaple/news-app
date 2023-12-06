const API_KEY = '20e0fb5ed63e4eea926738019badaf01'; // Replace with your News API key

export const getNews = async () => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
