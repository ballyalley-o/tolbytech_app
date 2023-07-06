import productRouter from './products.js'
import userRouter from './users.js'
import orderRouter from './orders.js'
import authRouter from './auth.js'
import uploadRouter from './upload.js'
import { TolbyTechResponse } from '../helpers/response.js'
import VARS from '../helpers/vars/vars.js'

const productRoutes = productRouter
const userRoutes = userRouter
const orderRoutes = orderRouter
const authRoutes = authRouter
const uploadRoutes = uploadRouter

export const linkRoutes = (app, API_ROOT) => {
  const rootPath = `${API_ROOT}`

  app.use(`${rootPath}/products`, productRoutes)
  app.use(`${rootPath}/users`, userRoutes)
  app.use(`${rootPath}/orders`, orderRoutes)
  app.use(`${rootPath}/auth`, authRoutes)
  app.use(`${rootPath}/upload`, uploadRoutes)
}

export const payPalRoute = (app, API_ROOT) => {
  const rootPath = `${API_ROOT}`

  app.get(`${rootPath}/config/paypal`, (req, res) => {
    res.send({ clientId: VARS.PAYPAL_CLIENT_ID })
  })
}

export const serverRoute = (app) => {
  app.get('/', TolbyTechResponse.response)
}
