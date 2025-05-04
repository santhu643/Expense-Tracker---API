const express = require("express");
const route = express.Router();

route.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    if(user){
      res.json({ message: 'Login success' });
    }
  } catch (err) {
    res.status(3000).json("Failed");
  }
});

module.exports = route;
