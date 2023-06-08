import productRouter from './products.js'
import userRouter from './users.js'
import orderRouter from './orders.js'

const productRoutes = productRouter
const userRoutes = userRouter
const orderRoutes = orderRouter

export const linkRoutes = (app, API_ROOT) => {
  const rootPath = `${API_ROOT}`

  app.use(`${rootPath}/products`, productRoutes)
  app.use(`${rootPath}/users`, userRoutes)
  app.use(`${rootPath}/orders`, orderRoutes)
}
