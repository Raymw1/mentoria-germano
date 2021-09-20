const express = require("express");
const routes = express.Router();

let productList = [];

routes.get("/products", (req, res) => {
  return res.send(JSON.stringify(productList));
});

routes.post("/products", (req, res) => {
  let { products } = req.body;
  if (Array.isArray(products)) {
    products.forEach((product) => {
      productList.push({
        id: productList[productList.length - 1]?.id + 1 || 1,
        name: product,
      })
      }
    );
  } else {
    productList.push({
      id: productList[productList.length - 1]?.id + 1 || 1,
      name: products,
    })
  }
  return res.send(JSON.stringify(productList));
});

routes.delete("/products/:id?", (req, res) => {
  const { id } = req.params;
  id ? productList = productList.filter(product => product.id != id) : productList = [];
  return res.send(productList);
});

module.exports = routes;
