import express from 'express'
import dotenv from 'dotenv'
dotenv.config({
  path: './server/config/config.env',
})
import { notFound, errorHandler } from './middleware/error-handler.js'

import tolby from './helpers/response.js'
import connectDB from './config/db.js'
import productsRouteer from './routes/products.js'
import cors from 'cors'
import 'colors'

connectDB()

const PORT = process.env.PORT || 8003
const ENV = process.env.NODE_ENV
const app = express()

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send(tolby)
})

app.use('/api/products', productsRouteer)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`SERVER STATUS: Running on PORT: ${PORT}`.bgYellow.black)
  console.log(`ENVIRONMENT: ${ENV}`.bgCyan.white)
})
