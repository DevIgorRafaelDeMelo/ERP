const { Sequelize } = require("sequelize");

// Configurar o Sequelize
const sequelize = new Sequelize("systen64", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
