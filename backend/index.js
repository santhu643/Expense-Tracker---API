const express = require("express");
const app = express();
const cors = require('cors'); 
const port = process.env.PORT || 5173; // Use the port from environment variable or fallback to 5173
const route = require("./routes");
app.use(cors());
require('./mongo');


app.use(express.json());
app.use("/expense",route);



app.listen(port,()=>{
    console.log("server started");
});