import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

//import discordstrategy from "./discordstrategy"
import { userRoute } from './routes/user-router'
const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', userRoute)


app.listen(8080, () => {
	console.log("SERVER OK");
	
})
