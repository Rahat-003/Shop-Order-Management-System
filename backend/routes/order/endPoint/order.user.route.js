const express = require("express");
const router = express.Router();
const orderController = require("../../../controllers/orderController");

/**
 *
 * @url http://localhost:5001/order
 *
 */

router.post("/place-order", orderController.userSubmitForm);
router.get("/get-orders", orderController.getOrderListForUser);
router.put("/cancel-order", orderController.cancelOrderFromUser);

module.exports = router;
