const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  verifyEmail,
} = require("../controllers/authController");
const sanitizeRequest = require("../middleware/sanitizeMiddleware");
const { authLimiter } = require("../config/rateLimit");

router.post("/signup", authLimiter, sanitizeRequest, signup);
router.post("/signin", authLimiter, sanitizeRequest, signin);
router.get("/verify-email", verifyEmail);

module.exports = router;
