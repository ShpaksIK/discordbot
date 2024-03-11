const db = require("../cfg/db/db-conn")
const {DataTypes, STRING} = require("sequelize")

const User = db.define('user', {
    discordId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: false
    },




})

module.exports = User