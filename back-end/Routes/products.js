const { getProductsData, addProductData, deleteProductData, getProductData } = require("../Controller/products");
const express = require("express");
const router = express.Router();

router.get("/", getProductsData);
router.post("/", addProductData);
router.get("/:id", getProductData);
router.delete("/:id", deleteProductData);

module.exports = router;