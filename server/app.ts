import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
<<<<<<< HEAD
//import discordstrategy from "./discordstrategy"
import { userRoute } from './routes/user-router'
const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', userRoute)

app.listen(8080, () => {
	console.log('SERVER is running')
=======
import { userRouter } from './routes/user-route'
export const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', userRouter)

app.listen(8080, () => {
	console.log('server ok')
>>>>>>> f0cdc09f8700a3f25284c72f3275f981fd5b5a76
})
