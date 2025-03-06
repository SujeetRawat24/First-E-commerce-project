const express = require("express");
const { getAllProducts,createProduct, updateProduct, deleteProduct } = require("../controllers/productController");

const router = express.Router();

router.get("/products",getAllProducts);

router.post("/products/new",createProduct);

router.route('/product/:id').put(updateProduct).delete(deleteProduct);






module.exports = router;