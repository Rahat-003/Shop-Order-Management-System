const express = require("express");
const { checkUserToken } = require("../../../authentication/checkUserToken");
const router = express.Router();
const dashboardController = require("./../../../controllers/dashboardController");

/**
 *
 * @url http://localhost:5001/user/dashboard
 *
 */

router.get("/", dashboardController.getDashboard);

module.exports = router;
