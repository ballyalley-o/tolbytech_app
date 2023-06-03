import express from 'express'
import usersController from '../controllers/users.js'

const router = express.Router()

router
  .route('/:id')
  .get(usersController.getUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser)

router
  .route('/')
  .post(usersController.registerUser)
  .get(usersController.getUsers)

router
  .route('/account')
  .get(usersController.getUserAccount)
  .put(usersController.updateUserAccount)

router.post('/logout', usersController.logoutUser)
router.post('/auth', usersController.authUser)

const userRouter = router

export default userRouter
