const express = require("express");
const router = express.Router();

/**
 * @url http://localhost:5001/
 */

router.get("/", async (req, res) => {
    res.send("Welcome to Shop Order Management System API");
});

router.use("/user", require("./user/index"));

module.exports = router;
