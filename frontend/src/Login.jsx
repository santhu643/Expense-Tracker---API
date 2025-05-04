import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const user = { email, password };

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Login success!');
      }else {
        alert('Login failed');
      }
    } catch (err) {
      console.error(err);
      alert('Error');
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

