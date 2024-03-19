// Add this route in your backend

// Import necessary modules
const express = require("express");
const router = express.Router();

// Middleware to check if user is authenticated
router.get("/checkAuth", (req, res) => {
  if (req.session.username) {
    return res.json({ authenticated: true, username: req.session.username });
  } else {
    return res.json({ authenticated: false });
  }
});

module.exports = router;
