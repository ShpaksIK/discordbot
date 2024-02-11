import axios from 'axios'
import { Router } from 'express'
import url from 'url'
export const userRoute = Router()
userRoute.get('/login/callback', async (req, res) => {
	let { code } = req.query

	if (code) {
		const formData = new url.URLSearchParams({
			client_id: '1197185720020897922',
			client_secret: 'agkPqyQAIH-KX2RIYx6LQKT7oT97bDXo',
			grant_type: 'authorization_code',
			code: code.toString(),
			redirect_uri: 'http://localhost:3000/',
		})
		const output = await axios.post(
			'https://discord.com/api/oauth2/token',
			formData,
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		)

		if (output.data) {
			const access = output.data.access_token

			const userinfo = await axios.get(
				'https://discord.com/api/v10/users/@me',
				{
					headers: {
						Authorization: `Bearer ${access}`,
					},
				}
			)

			//refresh token
			const formData1 = new url.URLSearchParams({
				client_id: '1197185720020897922',
				client_secret: 'agkPqyQAIH-KX2RIYx6LQKT7oT97bDXo',
				grant_type: 'refresh_token',
				refresh_token: output.data.refresh_token,
			})
			const refresh = await axios.post(
				'https://discord.com/api/oauth2/token',
				formData1,
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				}
			)
			console.log(output.data, userinfo.data, refresh.data)
			let flag = true
		}
	}
})
