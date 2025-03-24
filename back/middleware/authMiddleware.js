// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
