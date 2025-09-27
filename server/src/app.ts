import express from 'express'
import 'dotenv/config.js'
import cors from 'cors'
import helmet from 'helmet'
import router from './router/router.js'
import errorHandler from './middlewares/ErrorHandlingMiddleware.js'
import connectDB from './db.js'
import { startServer } from './server.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(helmet())
app.use('/', router)

// @ts-ignore
app.use(errorHandler)

connectDB()

startServer(app)
