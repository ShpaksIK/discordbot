import { Router } from 'express'

export const userRouter = Router()

userRouter.get('/:?', (req, res) => {
	console.log(req.query)
	res.status(201)
})
