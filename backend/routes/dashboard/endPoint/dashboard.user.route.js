const express = require("express");
const router = express.Router();
const dashboardController = require("../../../controllers/dashboardController");

/**
 *
 * @url http://localhost:5001/dashboard
 *
 */

router.get("/get-order-list", dashboardController.getOrdersList);
router.put("/update-order", dashboardController.updateOrder);

module.exports = router;
