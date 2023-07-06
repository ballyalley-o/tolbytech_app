import express from 'express'
import productsController from '../controllers/products.js'
import { protect, admin } from '../middleware/auth-middleware.js'

const router = express.Router()

router
  .route('/')
  .get(productsController.getProducts)
  .post(protect, admin, productsController.createProduct)

router.get('/top', productsController.getTopProducts)

router
  .route('/:id')
  .get(productsController.getProduct)

  .put(protect, admin, productsController.updateProduct)
  .delete(protect, admin, productsController.deleteProduct)

router
  .route('/:id/reviews')
  .post(protect, productsController.createProductReview)

const productRouter = router
export default productRouter
