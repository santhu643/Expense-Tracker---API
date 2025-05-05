import React, { useState } from "react";

const Index = () => {


  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Expense Tracker</h1>

      {/* Form */}
      <form  style={styles.form}>
        <input
          type="text"
          name="description"
          placeholder="Description"
         
          style={styles.input}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
         
          style={styles.input}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          style={styles.input}
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
          </tr>
        </thead>
        <tbody>
        
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
