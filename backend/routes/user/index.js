const express = require("express");
const router = express.Router();

/**
 *
 * @url http://localhost:5001/user
 *
 */

router.use("/auth", require("./endPoint/auth.user.route"));
router.use("/dashboard", require("./endPoint/dashboard.user.route"));

module.exports = router;
