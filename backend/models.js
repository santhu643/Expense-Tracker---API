const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const userschema = new mongoose.Schema(
  {
    name:String,
    email: String,
    pass: String,
  },
  {
    timestamps: true,
  }
);

const expenseschema = new mongoose.Schema(
    {
        desc:String,
        amt:Number,
        catog:String
    },
    {
        timestamps: true,
    }
);

const expmodel = mongoose.model("expenses",expenseschema);


const usermodel = mongoose.model('users', userschema);

async function loginUser(email, password) {
  const user = await usermodel.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }
  if (user.pass !== password) {
    throw new Error('Incorrect password');
  }
  return user;
}

async function regUser(name, email, pass) {
  const existingUser = await usermodel.findOne({ email });
  if (existingUser) {
    throw new Error("Email already registered");
  }

  const rounds = 10;
  const hpass = await bcrypt.hash(pass, rounds);

  // Create and save new user
  const user = new usermodel({ name, email, pass:hpass });
  await user.save();

  return user;
}

async function addExp(desc,amt,catog){
  const exp = new expmodel({desc,amt,catog});
  exp.save();
  return exp;
}

async function getExp() {
  const data = await expmodel.find();
  const total = data.reduce((sum,item)=>sum + (item.amt || 0),0 );


  return {data,total};
}

async function deleteExp(id) {
  const data = expmodel.findByIdAndDelete(id);
  return data;
}

async function updateExp(id,desc,amt,catog){
  const res = await expmodel.findByIdAndUpdate(
    id,                          
    { desc, amt, catog },        
    { new: true }                
  );
  return res;  

}


module.exports = {loginUser,regUser,addExp,getExp,deleteExp,updateExp};  