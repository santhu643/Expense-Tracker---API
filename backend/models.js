const mongoose = require("mongoose");
const userschema = new mongoose.Schema(
  {
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

const usermodel = mongoose.model('users', userschema);

async function loginUser(email, password) {
  const user = await usermodel.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }
  if (user.password !== password) {
    throw new Error('Incorrect password');
  }
  return user;
}

const expmodel = mongoose.model("expenses",expenseschema);


module.exports = { loginUser }; 