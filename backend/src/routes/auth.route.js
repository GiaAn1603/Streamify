const express = require("express");
const router = express.Router();

const { protectRoute } = require("../middleware/auth.middleware");
const { signup, login, logout, onboard } = require("../controllers/auth.controller");

router.get("/me", protectRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/onboarding", protectRoute, onboard);

module.exports = router;
