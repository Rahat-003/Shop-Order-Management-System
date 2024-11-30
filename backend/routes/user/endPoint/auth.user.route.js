const express = require("express");
const router = express.Router();
const userController = require("./../../../controllers/userController");

/**
 * /app/user/auth
 * @url http://localhost:5001/user/auth
 *
 */

router.post("/sign-in", userController.userSignIn);
router.post("/sign-up", userController.userSignUp);

module.exports = router;
