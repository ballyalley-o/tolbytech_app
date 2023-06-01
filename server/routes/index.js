import dotenv from 'dotenv'
dotenv.config({
  path: './server/config/config.env',
})

const API_ROOT = process.env.API_ROOT
import router from './products.js'

const productRoutes = router

export const linkProductsRoutes = (app, API_ROOT) => {
  const rootPath = `${API_ROOT}/products`

  app.use(`${rootPath}`, productRoutes)
}
