// routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

// Add Google Sign-In route
router.post("/google-signin", userController.googleSignin); // مسار جديد للتعامل مع Google Sign-In

// Protected routes (require authentication)
router.get("/profile", authMiddleware, userController.getUserProfile);

module.exports = router;
