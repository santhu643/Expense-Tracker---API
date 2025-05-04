const express = require("express");
const app = express();
const port = 3000;
const route = require("./routes");
require('./mongo');


app.use(express.json());
app.use("/expense",route);



app.listen(3000,()=>{
    console.log("server started");
});