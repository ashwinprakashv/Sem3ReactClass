// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded credentials
    const hardcodedEmail = 'user@example.com';
    const hardcodedPassword = 'password123';

    // Check if entered credentials match the hardcoded values
    if (email === hardcodedEmail && password === hardcodedPassword) {
      // Save details to localStorage (optional)
      localStorage.setItem('user', JSON.stringify({ email, password }));

      // Redirect to the index page
      navigate('/index.html');
    } else {
      // Credentials do not match, redirect to login page
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
