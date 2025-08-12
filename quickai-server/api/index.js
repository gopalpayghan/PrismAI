import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from '../routes/aiRoutes.js'
import connectCloudinary from '../config/cloudinary.js'
import userRouter from '../routes/userRoutes.js'

const app = express()

await connectCloudinary()

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req, res) => res.send('PrismAI Backend API is Live!'))
app.get('/api', (req, res) => res.send('PrismAI Backend API is Live!'))

app.use('/api/ai', requireAuth(), aiRouter)
app.use('/api/user', requireAuth(), userRouter)

export default app