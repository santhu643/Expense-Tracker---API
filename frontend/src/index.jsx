import React, { useState, useEffect } from "react";
import axios from "axios";

  const Index = () => {

    const [desc, setDescription] = useState('');
    const [amt, setAmount] = useState('');
    const [catog, setCategory] = useState('');
    const [expdata,setData] = useState([]);

    useEffect(()=>{
      fetch();
    },[]);

    async function fetch(){
      const resp = await axios.get('http://localhost:3000/expense/getexp',{
        headers:{
          'Content-Type': 'application/json',
        },
      });
      setData(resp.data.expenses);
    }


    async function addexp(e) {
      e.preventDefault();
      try{
      const data = {desc,amt,catog};
      console.log(data);
      const result = await axios.post('http://localhost:3000/expense/addexp',data,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(result.status==200){
        setDescription("");
        setAmount("");
        setCategory("");
        
        alert("expense added");
        fetch();


      }
      }
      catch(err){
        console.log('error occured');
      }
    }

  

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Expense Tracker</h1>

      {/* Form */}
      <form   onSubmit={addexp}
        style={styles.form}>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={desc}
          style={styles.input}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={amt}
          style={styles.input}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={catog}
          style={styles.input}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit" style={styles.button}>
          Add Expense
        </button>
      </form>

      {/* Expense Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>S.no</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Amount</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {expdata.map((dt,index)=>
            <tr key={dt._id}>
              <td>{index+1}</td>
              <td>{dt.desc}</td>
              <td>{dt.amt}</td>
              <td>{dt.catog}</td>
              <td><button>Edit</button>&nbsp;<button value={dt._id} onClick={(e)=>delexp(e.target.value)}>Delete</button></td>
              
            </tr>
          )}
     

        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "200px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    background: "#2196f3",
    color: "#fff",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
};

export default Index;
