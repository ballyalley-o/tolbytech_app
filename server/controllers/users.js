import asyncHandler from '../middleware/async-handler.js'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import VARS from '../helpers/vars/vars.js'

// @desc    Auth user & token
// @route   POST /api/v1/users/login
// @access  Public
const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.validatePassword(password))) {
    const token = jwt.sign({ userId: user._id }, VARS.JWT_SECRET, {
      expiresIn: VARS.JWT_EXPIRATION,
    })
    //set JWT as HTTP-only cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: VARS.ENV !== 'development',
      sameSite: 'strict',
      maxAge: 2 * 60 * 60 * 1000,
    })

    res.json({
      message: 'Successful',
      response: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    })
  } else {
    res.status(401)
    throw new Error('INVALID CREDENTIALS')
  }
})

// @desc    Logout user/ clear cookie
// @route   POST /api/v1/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res, next) => {
  res.cookie('jwt', '', {
    httpeOnly: true,
    expires: new Date(0),
  })

  res.status(200).json({
    message: 'LOGGED OUT SUCCESSFULLY',
  })
})

// @desc    Register user
// @route   POST /api/v1/users
// @access  Public
const registerUser = asyncHandler(async (req, res, next) => {
  res.send('register user')
})

// @desc    GET User account
// @route   GET /api/v1/users/account
// @access  Private
const getUserAccount = asyncHandler(async (req, res, next) => {
  res.send('get user account')
})

// @desc    Update User account
// @route   PUT /api/v1/users/account
// @access  Private
const updateUserAccount = asyncHandler(async (req, res, next) => {
  res.send('update user account')
})

// @desc    GET Users
// @route   GET /api/v1/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res, next) => {
  res.send('get users')
})

// @desc    GET User by ID
// @route   GET /api/v1/users/:id
// @access  Private/Admin
const getUser = asyncHandler(async (req, res, next) => {
  res.send('get user by id')
})

// @desc    Update User by ID
// @route   PUT /api/v1/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res, next) => {
  res.send('update user')
})

// @desc    Delete User
// @route   DELETE /api/v1/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res, next) => {
  res.send('delete user')
})

const userController = {
  authUser,
  logoutUser,
  registerUser,
  getUserAccount,
  updateUserAccount,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
}

export default userController
