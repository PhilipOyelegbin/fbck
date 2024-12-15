const { Router } = require("express");
const { authenticate, adminAuthenticate } = require("../utils/auth");

const router = Router();

router.post("/api/v1/login", async (req, res) => {
  /*
    #swagger.tags = ['Auth']
  */
  const { email, password } = await req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  try {
    const token = await authenticate(email, password);
    res.setHeader("Content-Type", "application/json");
    res.status(201).json({ message: "Authenticate successfully", token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.post("/api/v1/auth", async (req, res) => {
  /*
    #swagger.tags = ['Auth']
  */
  const { email, password } = await req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  try {
    const token = await adminAuthenticate(email, password);
    res.setHeader("Content-Type", "application/json");
    res.status(201).json({ message: "Authenticate successfully", token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.post("/api/v1/logout", (req, res) => {
  /*
    #swagger.tags = ['Auth']
  */
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to log out" });
    }
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Logged out successfully" });
  });
});

module.exports = router;
