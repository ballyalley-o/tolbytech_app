import express from 'express'
import ordersController from '../controllers/orders.js'
import { protect, admin } from '../middleware/auth-middleware.js'

const router = express.Router()

router
  .route('/')
  .get(protect, admin, ordersController.getOrders)
  .post(protect, ordersController.addOrderItems)

router.get('/myorders', protect, ordersController.getMyOrders)
router.get('/:id', protect, admin, ordersController.getOrder)
router.put(
  '/:id/deliver',
  protect,
  admin,
  ordersController.updateOrderToDelivered
)
router.put('/:id/pay', protect, ordersController.updateOrderToPaid)

const orderRouter = router
export default orderRouter
