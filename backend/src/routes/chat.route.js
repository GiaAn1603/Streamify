const express = require("express");
const router = express.Router();

const { protectRoute } = require("../middleware/auth.middleware");
const { getStreamToken } = require("../controllers/chat.controller");

router.get("/token", protectRoute, getStreamToken);

module.exports = router;
