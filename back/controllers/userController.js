const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library"); // إضافة هذه السطر
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // استخدام متغير البيئة CLIENT_ID الخاص بك من جوجل

// Register a new user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username: name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Google Sign-In for Register
const googleSignin = async (req, res) => {
  const { token } = req.body;

  try {
    // Verify the Google ID token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID, // نفس CLIENT_ID الذي حصلت عليه من جوجل
    });

    const payload = ticket.getPayload();
    const userId = payload["sub"]; // معرف المستخدم من جوجل

    // Check if the user already exists in the database
    let user = await User.findOne({ email: payload.email });

    if (!user) {
      // Create a new user if not found
      user = new User({
        username: payload.name,
        email: payload.email,
        password: "", // يمكن ترك كلمة المرور فارغة لأن المستخدم يستخدم Google لتسجيل الدخول
      });

      await user.save();
    }

    // Generate JWT token for the user
    const tokenJWT = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res
      .status(200)
      .json({ message: "Google Sign-In & Register successful", token: tokenJWT, user });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Google Sign-In failed" });
  }
};
// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  googleSignin, // إضافة googleSignin هنا
  getUserProfile,
};
