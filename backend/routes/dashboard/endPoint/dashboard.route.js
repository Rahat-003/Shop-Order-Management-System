const express = require("express");
const router = express.Router();
const dashboardController = require("../../../controllers/dashboardController");
const { checkUserToken } = require("./../../../authentication/checkUserToken");
/**
 *
 * @url http://localhost:5001/dashboard
 *
 */

router.get(
    "/",
    checkUserToken(["admin", "manager"]),
    dashboardController.getOrdersList
);

router.put(
    "/update-order",
    checkUserToken(["admin"]),
    dashboardController.updateOrder
);

module.exports = router;
