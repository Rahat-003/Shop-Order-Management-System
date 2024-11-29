const express = require("express");
const router = express.Router();

/**
 * @url http://localhost:5001/
 */

router.get("/", async (req, res) => {
    res.send("Welcome to Shop Order Management System API");
});

module.exports = router;
