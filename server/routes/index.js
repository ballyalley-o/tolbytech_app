import dotenv from 'dotenv'
dotenv.config({
  path: './server/config/config.env',
})

const API_ROOT = process.env.API_ROOT
import productRouter from './products.js'
import userRouter from './users.js'

const productRoutes = productRouter
const userRoutes = userRouter

export const linkRoutes = (app, API_ROOT) => {
  const rootPath = `${API_ROOT}`

  app.use(`${rootPath}/products`, productRoutes)
  app.use(`${rootPath}/users`, userRoutes)
}
