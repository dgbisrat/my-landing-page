require("dotenv").config();

const sendVerificationEmail = async (email, token) => {
  const verificationLink = `${process.env.CLIENT_URL}/verify-email?token=${token}`;

  // THIS WILL APPEAR IN YOUR BACKEND TERMINAL
  console.log("\n");
  console.log("=".repeat(60));
  console.log("📧 VERIFICATION EMAIL (COPY THIS LINK)");
  console.log("=".repeat(60));
  console.log(`To: ${email}`);
  console.log(`Link: ${verificationLink}`);
  console.log("=".repeat(60));
  console.log("\n");
};

module.exports = { sendVerificationEmail };
