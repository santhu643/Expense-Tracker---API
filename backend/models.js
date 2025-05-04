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

const usermodel = mongoose.model("users", userschema);
const expmodel = mongoose.model("expenses",expenseschema);