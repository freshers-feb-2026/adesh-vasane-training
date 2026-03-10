const express = require("express");

const adminController = require("../Controllers/admin");

const router = express.Router();

router.get("/add-products", adminController.getAddProduct);

router.post("/product", adminController.postAddProduct);

module.exports = router;