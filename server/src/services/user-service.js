const User = require('../models/user-model')
require('dotenv').config()
const axios = require('axios')
const { where } = require('sequelize')
class UserService {
	async getUser(token) {
		const candidate = await User.findOne({
			where: {
				refreshToken: token,
			},
		})
		return candidate.accessToken
	}
	async successAuth(user) {
		return user.refreshToken
		//User.create({username: user.username, icon: user.icon, email: user.email, guilds: user.guilds, refreshToken: user.refreshToken})
	}
}

module.exports = new UserService()
