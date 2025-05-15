# 💰 Expense Tracker - API

Welcome to the **Expense Tracker - API** repository!  
This project is built using **Node.js**, **Express.js**, and **MongoDB** to provide a backend RESTful API for managing expenses, including functionalities to create, read, update, and delete expense records.

---

## 🚀 Technologies Used

- **Backend:**  
  - Node.js  
  - Express.js  
  - MongoDB (with Mongoose)  
- **Other Tools:**  
  - Postman (for API testing)  
  - dotenv (for environment variable management)  
  - CORS & body-parser (middleware)  

---

## 📦 Features

- ✅ Add new expense  
- 📄 View all expenses  
- ✏️ Update existing expense  
- ❌ Delete an expense  
- 📆 Track expenses with date and description  
- 💵 Manage amount field with validation  

---

## 📂 Project Structure

```

Expense-Tracker---API/
├── config/
│   └── db.js                # MongoDB connection setup
├── controllers/
│   └── expenseController.js # Logic for handling expense operations
├── models/
│   └── Expense.js           # Mongoose schema for expenses
├── routes/
│   └── expenseRoutes.js     # Defines API routes
├── .env                     # Environment variables (e.g., DB URI, PORT)
├── server.js                # Main server entry point
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation

````

---

## 🛠️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/santhu643/Expense-Tracker---API.git
````

### 2. Navigate into the folder

```bash
cd Expense-Tracker---API
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file and add your MongoDB URI

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 5. Start the server

```bash
npm start
```

The server should now be running on `http://localhost:5000`

---

## 📬 Sample API Endpoints

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | /api/expenses      | Get all expenses  |
| POST   | /api/expenses      | Add a new expense |
| PUT    | /api/expenses/\:id | Update an expense |
| DELETE | /api/expenses/\:id | Delete an expense |

Use **Postman** or any API client to test these endpoints.

---

## 🎯 Goals and Learning Outcomes

* Learn how to build a RESTful API using Node and Express
* Gain hands-on experience with MongoDB and Mongoose
* Understand full CRUD operations
* Learn API testing and backend environment configuration

---

## 📬 Connect with Me
🔗 LinkedIn - https://www.linkedin.com/in/santhiya-prakash-87449425a/

💻 GitHub - https://github.com/santhu643

🧠 LeetCode - https://leetcode.com/u/santhiyaprakash/

---

## 📄 License

This project is open-sourced under the MIT License.
Feel free to use, modify, and share!

---

**Happy Building! 🚀**
