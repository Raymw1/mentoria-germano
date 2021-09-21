const express = require("express");
const productController = require("../controllers/productController");
const routes = express.Router();
const Product = require("../models/Product");

let productList = [];

routes.get("/", productController.all);

routes.get("/:id", productController.findOne);

routes.post("/", productController.post);

// routes.post("/", productController.post);

// routes.delete("/:id?", (req, res) => {
//   const { id } = req.params;
//   id ? productList = productList.filter(product => product.id != id) : productList = [];
//   return res.send(productList);
// });

module.exports = routes;