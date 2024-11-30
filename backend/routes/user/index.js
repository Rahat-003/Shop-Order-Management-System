const express = require("express");
const router = express.Router();
const { checkUserToken } = require("./../../authentication/checkUserToken");

/**
 *
 * @url http://localhost:5001/user
 *
 */

router.use("/auth", require("./endPoint/auth.user.route"));

module.exports = router;
