const express = require("express");
const productController = require("../controllers/productController");
const routes = express.Router();
const Product = require("../models/Product");

let productList = [];

routes.get("/", productController.all);

routes.get("/:id", productController.findOne);

routes.post("/", productController.post);

routes.put("/:id", productController.update);

routes.delete("/:id", productController.delete);

module.exports = routes;