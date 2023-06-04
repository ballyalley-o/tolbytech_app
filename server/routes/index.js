import productRouter from './products.js'
import userRouter from './users.js'

const productRoutes = productRouter
const userRoutes = userRouter

export const linkRoutes = (app, API_ROOT) => {
  const rootPath = `${API_ROOT}`

  app.use(`${rootPath}/products`, productRoutes)
  app.use(`${rootPath}/users`, userRoutes)
}
