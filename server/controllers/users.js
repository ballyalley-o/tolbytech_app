import asyncHandler from '../middleware/async-handler.js'
import User from '../models/User.js'
import VARS from '../helpers/vars/vars.js'

// @desc    GET User account
// @route   GET /api/v1/users/account
// @access  Private
const getUserAccount = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id)
  if (user) {
    res.status(200).json({
      message: 'USER FETCHED',
      response: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    })
  } else {
    res.status(404)
    throw new Error('USER NOT FOUND')
  }
})

// @desc    Update User account
// @route   PUT /api/v1/users/account
// @access  Private
const updateUserAccount = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id)
  // const io = App.io

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email

    if (req.body.password) {
      user.password = req.body.password
    }
    const updatedUser = await user.save()

    const response = {
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    }

    res.status(200).json({
      message: 'USER UPDATED',
      response,
    })
  } else {
    res.status(404)
    throw new Error('USER NOT FOUND')
  }
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
  getUserAccount,
  updateUserAccount,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
}

export default userController
