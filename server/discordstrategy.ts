import passport from 'passport'
const DiscordStrategy = require('passport-discord').Strategy
passport.use(
	new DiscordStrategy(
		{
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: process.env.CLIENT_REDIRECT,
			scope: ['indentify'],
		},
		(accessToken: any, refreshToken: any, profile: any, done: any) => {
			console.log(profile)
		}
	)
)
