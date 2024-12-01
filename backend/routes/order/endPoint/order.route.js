const express = require("express");
const router = express.Router();
const orderController = require("../../../controllers/orderController");

/**
 *
 * @url http://localhost:5001/order
 *
 */

router.get("/:customerId", orderController.getOrderListForUser);
router.post("/submit/:customerId", orderController.userSubmitForm);
router.put("/cancel/:customerId", orderController.cancelOrderFromUser);

module.exports = router;
