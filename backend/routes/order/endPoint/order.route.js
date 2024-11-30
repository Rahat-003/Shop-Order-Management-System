const express = require("express");
const router = express.Router();
const orderController = require("../../../controllers/orderController");

/**
 *
 * @url http://localhost:5001/order
 *
 */

router.get("/", orderController.getOrderListForUser);
router.post("/submit", orderController.userSubmitForm);
router.put("/cancel", orderController.cancelOrderFromUser);

module.exports = router;
