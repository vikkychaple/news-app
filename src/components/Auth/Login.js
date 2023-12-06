import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate from 'react-router-dom'

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        setError('');
        await login(email, password);
        navigate('/'); // Use navigate to navigate
    } catch (err) {
      setError('Failed to log in. Please check your email and password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Log In</button>
      </form>
      <div>
        Need an account? <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
