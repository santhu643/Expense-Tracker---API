const express = require("express");
const route = express.Router();
const verifytoken = require('./auth');
const {loginUser,regUser,addExp,getExp,deleteExp,updateExp} = require("./models.js");

route.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginUser(email, password);

    if (token === "Invalid user" || token === "Invalid password") {
      return res.status(400).json({ message: token });
    }

    res.status(200).json({ message: 'Login success', token });
  } catch (err) {
    res.status(500).json({ message: "Failed", error: err.message });
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

route.post('/addexp',verifytoken,async(req,res)=>{
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

route.get('/getexp',verifytoken,async(req,res)=>{
  try{
    const exp = await getExp();
    if(exp){
      res.status(200).json({message:"details fetched succesfully",expenses:exp});
    }
  }catch(err){
    res.status(500).json("Failed");
  }
});

route.delete('/delete/:id',verifytoken, async(req,res)=>{
  const id = req.params.id;
  try{
    const del = await deleteExp(id);
    if(del){
      res.status(200).json({message:"details deleted succesfully"});
    }
  } catch(err){
    res.status(500).json("Failed");
  }
});

route.put('/updexp',verifytoken,async(req,res)=>{
  const {eid,edesc,eamt,ecatog} = req.body;
  try{
    const exp = await updateExp(eid,edesc,eamt,ecatog);
    if(exp){
      res.status(200).json({message:"doneeee"});

    }
  }catch(err){
    res.status(500).json("Failed to update");
  }
})


module.exports = route;
