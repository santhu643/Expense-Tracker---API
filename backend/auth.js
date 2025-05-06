// auth.js (create this new file or put it in your main file)
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).json({ message: "No token provided" });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.user = decoded; 
    next();
  });
};

module.exports = verifyToken;
