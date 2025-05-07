const jwt = require('jsonwebtoken');
const secretKey = "mysecretkey";

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Expected format: "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "Access token missing" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    
    req.user = user; // token payload is now available as req.user
    console.log("verified successfully");
    next();
  });
}

module.exports = authenticateToken;
