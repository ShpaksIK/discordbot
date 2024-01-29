import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import session from 'express-session'
import passport from 'passport'
//import discordstrategy from "./discordstrategy"

const app = express()
app.use(cors())
app.use(require('dotenv').config)
app.use(express.json())
app.use(bodyParser())
app.use(
	session({
		secret: 'some random secret',
		cookie: {
			maxAge: 60000 * 60 * 24,
		},
		saveUninitialized: false,
	})
)
app.use(passport.initialize())
app.use(passport.session())

app.get('/', passport.authenticate('discord'))
app.listen(8080, () => {
	console.log('SERVER is running')
})
