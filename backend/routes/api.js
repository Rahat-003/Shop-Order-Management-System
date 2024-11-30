const express = require("express");
const router = express.Router();
const { checkUserToken } = require("./../authentication/checkUserToken");
/**
 * @url http://localhost:5001/
 */

router.get("/", async (req, res) => {
    res.send("Welcome to Shop Order Management System API");
});

router.use("/user", require("./user/index"));


router.use("/dashboard", require("./dashboard/endPoint/dashboard.route"));

router.use(
    "/order",
    checkUserToken(["customer"]),
    require("./order/endPoint/order.route")
);

router.use(
    "/product",
    checkUserToken(["admin"]),
    require("./product/endPoint/product.route")
);

module.exports = router;
