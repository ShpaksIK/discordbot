import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { userRouter } from './routes/user-route'
export const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', userRouter)

app.listen(8080, () => {
	console.log('server ok')
})
