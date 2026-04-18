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

    // Send simple success response
    res.send(
      "Email verified successfully! You can now close this window and login.",
    );
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).send("Verification failed");
  }
};
