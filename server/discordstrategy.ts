import passport from 'passport'
const DiscordStrategy = require('passport-discord').Strategy
passport.use(
	new DiscordStrategy(
		{
			clientId: '1197185720020897922',
			clientSecret: 'dmR4Zs_ZNlOYO4iHtIhYq2AK7UMJ1bJj',
			callbackURL: 'redirect',
			scope: ['indentify', 'guilds'],
		},
		(accessToken: any, refreshToken: any, profile: any, done: any) => {
			console.log(profile)
		}
	)
)
