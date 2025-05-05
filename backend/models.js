const mongoose = require("mongoose");
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

async function regUser(name,email,pass){
  const user = new usermodel({name,email,pass});
  user.save();
  return user;
}

async function addExp(desc,amt,catog){
  const exp = new expmodel({desc,amt,catog});
  exp.save();
  return exp;
}

async function getExp() {
  const data = expmodel.find();
  return data;
}

async function deleteExp(id) {
  const data = expmodel.findByIdAndDelete(id);
  data.save();
  return data;
}


module.exports = {loginUser,regUser,addExp,getExp,deleteExp};  