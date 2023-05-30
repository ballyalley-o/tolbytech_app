import express from 'express'
import dotenv from 'dotenv'
dotenv.config({
  path: './server/config/config.env',
})
import products from './data/products.js'
import tolby from './helpers/response.js'
import cors from 'cors'
import colors from 'colors'

const PORT = process.env.PORT || 8003
const ENV = process.env.NODE_ENV
const SERVER = process.env.SERVER_URL
const app = express()

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send(tolby)
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.listen(PORT, () => {
  console.log(`SERVER STATUS: Running on PORT: ${PORT}`.bgYellow.black)
  console.log(`ENVIRONMENT: ${ENV}`.bgCyan.white)
})
