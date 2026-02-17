const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
} = require("../controllers/productController");

// POST - Create product
router.post("/", createProduct);

// GET - Fetch all products
router.get("/", getProducts);

module.exports = router;
