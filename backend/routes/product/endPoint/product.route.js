const express = require("express");
const router = express.Router();
const productController = require("../../../controllers/productController");

/**
 *
 * @url http://localhost:5001/product
 *
 */

router.get("/", productController.getProductList);
router.post("/add", productController.addProduct);
router.put("/update", productController.updateProduct);
router.put("/delete", productController.deleteProduct);

module.exports = router;
