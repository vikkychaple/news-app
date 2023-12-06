import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import NewsProvider from './context/NewsContext';
import PrivateRoute from './components/Auth/PrivateRoute';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import NewsList from './components/News/NewsList';
import NewsDetail from './components/News/NewsDetail';
import Favorites from './components/News/Favorites';

function App() {
  return (
    <Router>
      <AuthProvider>
        <NewsProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <PrivateRoute path="/" element={<NewsList />} />
            <PrivateRoute path="/favorites" element={<Favorites />} />
            <PrivateRoute path="/news/:id" element={<NewsDetail />} />
          </Routes>
        </NewsProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
