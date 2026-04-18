const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { signupSchema, loginSchema } = require("../utils/validators");
const { sendVerificationEmail } = require("../services/emailService");

const signup = async (req, res) => {
  try {
    const { error, value } = signupSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const {
      firstName,
      fatherName,
      grandName,
      email,
      phoneNumber,
      password,
      birthDate,
      location,
    } = value;

    const existingEmail = await User.findByEmail(email);
    if (existingEmail) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const existingPhone = await User.findByPhone(phoneNumber);
    if (existingPhone) {
      return res.status(400).json({ error: "Phone number already registered" });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = await User.create({
      firstName,
      fatherName,
      grandName,
      email,
      phoneNumber,
      passwordHash,
      birthDate,
      location,
      verificationToken,
    });

    // Send verification email
    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({
      message:
        "User created successfully! Check the backend terminal for verification link.",
      user: {
        id: user.id,
        firstName: user.first_name,
        email: user.email,
        isVerified: user.is_verified,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal server error: " + error.message });
  }
};

const signin = async (req, res) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { identifier, password } = value;

    let user = await User.findByEmail(identifier);
    if (!user) {
      user = await User.findByPhone(identifier);
    }

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    if (!user.is_verified) {
      return res
        .status(401)
        .json({
          error:
            "Please verify your email first. Check the backend terminal for the verification link.",
        });
    }

    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || "your_secret_key",
      { expiresIn: "7d" },
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        firstName: user.first_name,
        email: user.email,
        phoneNumber: user.phone_number,
        location: user.location,
      },
    });
  } catch (error) {
    console.error("Signin error:", error);
    res.status(500).json({ error: "Internal server error: " + error.message });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).send("Verification token required");
    }

    const user = await User.verifyEmail(token);

    if (!user) {
      return res.status(400).send("Invalid or expired token");
    }

    res.send(
      "Email verified successfully! You can now close this window and login.",
    );
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).send("Verification failed");
  }
};

module.exports = { signup, signin, verifyEmail };
