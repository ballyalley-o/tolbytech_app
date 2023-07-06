import express from 'express'
import usersController from '../controllers/users.js'
import { protect, admin } from '../middleware/auth-middleware.js'

const router = express.Router()

router
  .route('/account')
  .get(protect, usersController.getUserAccount)
  .put(protect, usersController.updateUserAccount)

router.route('/').get(protect, admin, usersController.getUsers)

router
  .route('/:id')
  .get(protect, admin, usersController.getUser)
  .put(protect, admin, usersController.updateUser)
  .delete(protect, admin, usersController.deleteUser)

const userRouter = router

export default userRouter
