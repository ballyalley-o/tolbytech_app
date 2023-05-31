import express from 'express'
import productsController from '../controllers/products.js'

const router = express.Router()

router.get('/', productsController.getProducts)
router.get('/:id', productsController.getProduct)
// router.post('/', productsController.createProduct)
// router.put('/:id', productsController.updateProduct)
// router.get('/:id', productsController.deleteProduct)

export default router
