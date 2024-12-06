const express = require("express");
const router = express.Router();
const orderController = require("../../../controllers/orderController");
const { rateLimiter } = require("../../../middlewares/rateLimiter");
/**
 *
 * @url http://localhost:5001/order
 *
 */

router.get("/:customerId", orderController.getOrderListForUser);
router.post("/submit/:customerId", rateLimiter, orderController.userSubmitForm);
router.put("/cancel/:customerId", orderController.cancelOrderFromUser);

module.exports = router;
