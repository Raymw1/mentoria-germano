const Product = require("../models/Product");
const { post } = require("../routes");

module.exports = {
  async all(req, res) {
    const products = await Product.findAll();
    return res.send(JSON.stringify(products));
  },
  async findOne(req, res) {
    const { id } = req.params;
    const product = await Product.findAll({ where: { id } });
    return res.send(JSON.stringify(product));
  },
  async post(req, res) {
    let { products } = req.body;
    if (Array.isArray(products)) {
      const productsPromise = products.map(async (currentProduct) => {
        await Product.create({ product: currentProduct.name, carb: currentProduct.carb })
      });
      await Promise.all(productsPromise)
    } else {
      Product.create({ product: products.name, carb: products.carb })
    }
    return res.send(await Product.findAll());
  }
}