const Product = require("../models/Product");

module.exports = {
  async all(req, res) {
    const products = await Product.findAll();
    if (products?.length < 1) return res.status(400).send("There is no Products");
    return res.send(JSON.stringify(products));
  },
  async findOne(req, res) {
    const { id } = req.params;
    const product = await Product.findAll({ where: { id } });
    if (product?.length < 1) return res.status(400).send("Product not found");
    return res.send(JSON.stringify(product));
  },
  async post(req, res) {
    let { products } = req.body;
    if (!products) {
      return res.status(400).send("Bad request!");
    }
    if (Array.isArray(products)) {
      const productsPromise = products.map(async (currentProduct) => {
        await Product.create({ product: currentProduct.name, carb: currentProduct.carb })
      });
      await Promise.all(productsPromise)
    } else {
      Product.create({ product: products.name, carb: products.carb })
    }
    return res.send(await Product.findAll());
  },
  async update(req, res) {
    let { product } = req.body;
    const { id } = req.params;
    if (!product || !product.name || product.carb === undefined) {
      return res.status(400).send("Bad request!");
    }
    await Product.update(
      { product: product.name, carb: product.carb },
      { where: { id } });
    return res.send(await Product.findAll());
  },
  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("Bad request!");
    }
    await Product.destroy({ where: { id } });
    return res.send(await Product.findAll());
  }
}