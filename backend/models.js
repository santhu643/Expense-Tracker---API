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
  const data = await usermodel.findOne({ email });
      if(!data){
          return "Invalid user";
      }
      const data1 = await bcrypt.compare(pass,data.pass);
      if(!data1){
          return "Invalid password";
      }
  
      const token = jwt.sign(
          {id:data._id,email:data.email},
          scretKey ,
          {
            expiresIn :'1h'
          }
      )
      return token;
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