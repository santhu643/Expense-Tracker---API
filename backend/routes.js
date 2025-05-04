const express = require("express");
const route = express.Router();

route.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    if (user.password !== password) {
      return res.status(400).json({ message: 'Incorrect password' });
    }
    res.json({ message: 'Login success'});
  });
  
  

module.exports = route;
