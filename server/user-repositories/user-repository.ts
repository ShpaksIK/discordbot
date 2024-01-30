import passport from 'passport'
import passportDiscord from 'passport-discord'
const DiscordStrategy = passportDiscord.Strategy

passport.use(
	new DiscordStrategy(
		{
			clientID: '1197185720020897922',
			clientSecret: '_8v-y-TupNmLEwER4OcnbDGGEX8GWqDU',
			callbackURL: 'http://localhost:3000/redirect',
			scope: ['indetify', 'guilds'],
		},
		(accessToken, refreshToken, profile, done) => {
			console.log(profile)
		}
	)
)
