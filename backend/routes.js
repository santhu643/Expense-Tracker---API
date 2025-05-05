const express = require("express");
const route = express.Router();
const {loginUser,regUser,addExp} = require("./models.js");

route.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    if(user){
      res.json({ message: 'Login success' });
    }
  } catch (err) {
    res.status(500).json("Failed");
  }
});

route.post('/register',async(req,res)=>{
  const {name,email,pass} = req.body;
  try{
    const user = await regUser(name,email,pass);
    if(user){
      res.json({message:"Registered succesfully"});
    }
  }catch(err){
    res.status(500).json("Failed");
  }
});

<<<<<<< HEAD


=======
route.post('/addexp',async(req,res)=>{
  const {desc,amt,catog} = req.body;
  try{
    const exp = await addExp(desc,amt,catog);
    if(exp){
      res.json({message:"Expense added Succesfully"});
    }
  } catch(err){
    res.status(500).json("Failed");
  }
});
>>>>>>> dcf46a0e580b6a595837f42a76a0c4361f3dc9b7

module.exports = route;
