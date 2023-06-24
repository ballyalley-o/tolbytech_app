import express from 'express'
import productsController from '../controllers/products.js'
import { protect, admin } from '../middleware/auth-middleware.js'

const router = express.Router()

router.get('/', productsController.getProducts)
router.get('/:id', productsController.getProduct)
router.post('/', protect, admin, productsController.createProduct)
// router.put('/:id', productsController.updateProduct)
// router.get('/:id', productsController.deleteProduct)

const productRouter = router
export default productRouter
