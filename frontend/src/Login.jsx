import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const user = { email, password };
  
    try {
      const res = await axios.post('http://localhost:3000/expense/login', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Login successful:', res.data);
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/><br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br/><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

