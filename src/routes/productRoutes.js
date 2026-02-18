const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductById
} = require("../controllers/productController");

// POST - Create product
router.post("/", createProduct);

// GET - Fetch all products
router.get("/", getProducts);

router.get("/:id", getProductById)

module.exports = router;
