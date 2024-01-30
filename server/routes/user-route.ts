import { Router } from 'express'
export const userRouter = Router()
const DiscordStrategy = require('../user-repositories/user-repository')

userRouter.get('/get', (req, res) => {
	res.redirect(
		'https://discord.com/api/oauth2/authorize?client_id=1197185720020897922&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&scope=identify'
	)
})

userRouter.get('/get/code', (req, res) => {})
