import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate from 'react-router-dom'

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError('Passwords do not match');
    }

    try {
        setError('');
        await register(email, password);
        navigate('/'); // Use navigate to navigate
    } catch (err) {
      setError('Failed to create an account. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleRegister}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <label>Confirm Password</label>
        <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default Register;
