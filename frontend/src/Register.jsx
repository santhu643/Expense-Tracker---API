import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

  const Register = () => {
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass,setPass] = useState("");
    const navigate = useNavigate(); 
    

    async function register(){
      const user = {name,email,pass};
      try {
        const res = await axios.post('http://localhost:3000/expense/register', user, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        alert('registered successful:', res);
        navigate('/');
      } catch (error) {
        console.error('register failed:', error.response?.data || error.message);
      }
    };




  return (
    <div style={styles.container}>
      <form onSubmit={register} style={styles.form}>
        <h2 style={styles.heading}>Register</h2>
        <input type="text" name="name" placeholder="Name" onChange={(e)=>setName(e.target.value)} style={styles.input} />
        <input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}  style={styles.input} />
        <input type="password" name="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)}  style={styles.input} />
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
