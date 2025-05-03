import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register Data:', formData);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Register</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} style={styles.input} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} style={styles.input} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} style={styles.input} />
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    height: '100vh', background: '#f0f2f5',
  },
  form: {
    padding: '40px', background: '#fff', borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)', width: '300px',
    display: 'flex', flexDirection: 'column', gap: '15px',
  },
  heading: {
    textAlign: 'center', color: '#333',
  },
  input: {
    padding: '10px', border: '1px solid #ccc', borderRadius: '5px',
  },
  button: {
    padding: '10px', background: '#4caf50', color: '#fff',
    border: 'none', borderRadius: '5px', cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Register;
