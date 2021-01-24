const express = require("express");
const router = express.Router();

const { signup, loginya, signout } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/loginya", loginya);
router.post("/signout", signout);

module.exports = router;
