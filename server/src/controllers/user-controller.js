const UserService = require('../services/user-service')
const { use } = require('passport')
require('dotenv').config()
const UserDto = require('../dto/user-dto')

const { Strategy } = require('passport-oauth2')
const { maxAge, httpOnly } = require('express-session/session/cookie')
const http = require('http')
class UserController {
	async successAuth(req, res) {
		const user = req.user

		const token = await UserService.successAuth(user)

		res.cookie('refreshToken', token, {
			maxAge: 1000 * 60 * 60,
			httpOnly: true,
		})
		res.redirect('http://localhost:3000/')
	}
	async getUser(req, res) {
		const token = req.cookies.refreshToken
		const user = await UserService.getUser(token)
		const dtoUser = UserDto.clientUserDto(user)
		return res.json(dtoUser)
		res.cookie(
			'accessToken',
			user.accessToken,
			{ maxAge: 24 * 3600 * 1000 },
			{ httpOnly: true }
		)
		res.redirect('http://localhost:3000/')
	}
	async getData(req, res) {
		console.log(req.user)
		const config = {
			headers: {
				Authorization: `Bearer ${req.user.accessToken}`,
			},
		}
		const data = await axios.get(
			'https://discord.com/oauth2/applications/@me',
			config
		)
		res.send(data)
	}
}

module.exports = new UserController()
