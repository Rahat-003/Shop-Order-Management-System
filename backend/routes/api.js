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

router.use(
    "/dashboard",
    checkUserToken,
    require("./dashboard/endPoint/dashboard.user.route")
);

router.use(
    "/order",
    checkUserToken,
    require("./order/endPoint/order.user.route")
);


module.exports = router;
