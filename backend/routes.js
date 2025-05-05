const express = require("express");
const route = express.Router();
const {loginUser,regUser,addExp} = require("./models.js");

route.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    if(user){
      res.status(200).json({ message: 'Login success' });
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

route.post('/addexp',async(req,res)=>{
  const {desc,amt,catog} = req.body;
  try{
    const exp = await addExp(desc,amt,catog);
    if(exp){
      res.status(200).json({message:"Expense added Succesfully"});
    }
  } catch(err){
    res.status(500).json("Failed");
  }
});

route.get('/getexp',async(req,res)=>{
  try{
    const exp = await getExp();
    if(exp){
      res.status(200).json({message:"details fetched succesfully",data:exp});
    }
  }catch(err){
    res.status(500).json("Failed");
  }


})



module.exports = route;
