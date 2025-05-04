const express = require("express");
const app = express();
const cors = require('cors'); 
const port = 3000;
const route = require("./routes");
app.use(cors());
require('./mongo');


app.use(express.json());
app.use("/expense",route);



app.listen(3000,()=>{
    console.log("server started");
});