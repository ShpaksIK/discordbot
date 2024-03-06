const {Sequelize} = require("sequelize")

module.exports = new Sequelize(process.env.DB_NAME, process.env.USER_NAME, process.env.DB_PASS, {
    port: 5432,
    host: process.env.DB_HOST,
    dialect: "postgres"
})


