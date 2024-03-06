const db = require("../cfg/db/db-conn")
const {DataTypes, STRING} = require("sequelize")

const User = db.define('user', {
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
    },
    guilds: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    refreshToken: {
        type: DataTypes.STRING
    },


})

module.exports = User