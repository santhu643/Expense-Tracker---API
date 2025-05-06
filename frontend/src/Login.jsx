import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = { email, password };

    try {
      const res = await axios.post('http://localhost:3000/expense/login', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);


      alert('Login successful');
      navigate('/index');
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert('Login failed: ' + (error.response?.data?.message || 'Invalid credentials'));
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>Login</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  card: {
    padding: '40px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    gap: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '10px',
    color: '#333',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Login;
