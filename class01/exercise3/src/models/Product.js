const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("products", {
  product: {
    type: DataTypes.STRING,
    allowNull: false
  },
  carb: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
}, {});

(async () => {
  await sequelize.sync({ force: true });
})();

module.exports = Product;