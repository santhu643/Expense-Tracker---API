import React, { useState, useEffect } from "react";
import axios from "axios";


  const Index = () => {

    const [desc, setDescription] = useState('');
    const [amt, setAmount] = useState('');
    const [catog, setCategory] = useState('');
    const [expdata,setData] = useState([]);
    const [totamt,setTotamt] = useState(0);
  
    const[edesc,setEdesc] = useState('');
    const[eamt,setEamt] = useState('');
    const[ecatog,setEcatog] = useState('');
    const[eid,setEid] = useState('');

    useEffect(()=>{
      fetch();
    },[]);  

    async function fetch() {
      const token = localStorage.getItem("token"); // Get token here
    
      try {
        const resp = await axios.get('http://localhost:3000/expense/getexp', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
    
        const { data, total } = resp.data.expenses; // Adjust this line based on your actual response structure
        setData(data);
        setTotamt(total);
      } catch (error) {
        console.error("Failed to fetch expenses:", error.response?.data || error.message);
      }
    }
    


    async function addexp(e) {
      const token = localStorage.getItem("token"); // Get token here

      e.preventDefault();
      try{
      const data = {desc,amt,catog};
      console.log(data);
      const result = await axios.post('http://localhost:3000/expense/addexp',data,{
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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

    async function delexp(id){
      const token = localStorage.getItem("token"); // Get token here

      try{
        console.log(id);
        const res = await axios.delete(`http://localhost:3000/expense/delete/${id}`);
        if(res.status==200){
          alert("deleted");
          fetch();
        }

      }catch(err){
        console.log(err);
      }

    }

    function updexp(dt){
      setEdesc(dt.desc);
      setEamt(dt.amt);
      setEcatog(dt.catog);
      setEid(dt._id);
      toggleModal(true);
     
    }

    function toggleModal(show) {
      const modal = document.getElementById("editModal");
      if (modal) modal.style.display = show ? "flex" : "none";
    }
     
    async function updatemodal(e){
      const token = localStorage.getItem("token"); // Get token here

      e.preventDefault();
      try{
      const data = {eid,edesc,eamt,ecatog};
      console.log(data);
      const result = await axios.put('http://localhost:3000/expense/updexp',data,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(result.status==200){
        setEdesc("");
        setEamt("");
        setEcatog("");
        setEid("");
        alert("expense edited");
        fetch();
        toggleModal(false);
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
      <h3>Total Expenses : {totamt}</h3>
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
              <td style={styles.td}>{index+1}</td>
              <td style={styles.td}>{dt.desc}</td>
              <td style={styles.td}>{dt.amt}</td>
              <td style={styles.td}>{dt.catog}</td>
              <td style={styles.td}>
                <button
                  onClick={() => updexp(dt)}
                  style={styles.editButton}
                >
                  ✏️ Edit
                </button>
                <button
                  value={dt._id}
                  onClick={(e) => delexp(e.target.value)}
                  style={styles.deleteButton}
                >
                  🗑️ Delete
                </button>
              </td>

            </tr>
          )}
 
        </tbody>
      </table>
      
      




      <div className="modal" id="editModal" style={{ display: "none", position: "fixed", top: 0, left: 0, backgroundColor: "#00000090", width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
      <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", width: "300px", position: "relative" }}>
        <h3>Edit Expense</h3>
        <input type="text" value={edesc} onChange={(e) => setEdesc(e.target.value)} placeholder="Description" style={styles.input} />
        <input type="number" value={eamt} onChange={(e) => setEamt(e.target.value)} placeholder="Amount" style={styles.input} />
        <input type="text" value={ecatog} onChange={(e) => setEcatog(e.target.value)} placeholder="Category" style={styles.input} />
        <button onClick={updatemodal} style={{ ...styles.button, marginTop: "10px" }}>Update</button>
        <button onClick={() => toggleModal(false)} style={{ marginLeft: "10px" }}>Cancel</button>
      </div>
    </div>
    </div>
    
   
    
  );
};

  


const styles = {
  editButton: {
    padding: "6px 12px",
    marginRight: "8px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#1976d2", // Blue
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.2s",
  },
  
  deleteButton: {
    padding: "6px 12px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#d32f2f", // Red
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.2s",
  },
  
  tableButton: {
    padding: "6px 12px",
    margin: "2px",
    borderRadius: "4px",
    border: "1px solid #4caf50",
    backgroundColor: "#e8f5e9",
    cursor: "pointer",
    fontWeight: "bold",
  },

  th: {
    background: "#2196f3",
    color: "#fff",
    padding: "10px",
    textAlign: "center", // <-- center heading
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    textAlign: "center",
  },

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
