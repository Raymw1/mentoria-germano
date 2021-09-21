require("dotenv").config();
const { Sequelize } = require("sequelize");

const dbName = "store";
const user = "rayan";
const password = process.env.DB_PASSWORD;
const sequelize = new Sequelize(dbName, user, password, {
  host: "localhost",
  dialect: "mysql"
})

// async function runDb() {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection succedded!");
//   } catch (err) {
//     console.error(err);
//   }
// }
// runDb();

sequelize.sync();

module.exports = sequelize