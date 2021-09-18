const express = require("express");
const routes = express.Router();

let productList = [];

routes.get("/products", (req, res) => {
  // console.log(productList);
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
  return res.redirect("/products");
});

// routes.delete("/products", (req, res) => {
//   const { products } = req.body;
//   console.log(products);
//   if (Array.isArray(products)) {
//     productList.forEach(productInList => console.log(productInList))
//     products.forEach((product) => productList.filter(productInList => productInList.name !== product));
//   } else {
//     productList.filter(productInList => productInList.name !== products)
//   }
//   return res.send(productList);
// });

module.exports = routes;
