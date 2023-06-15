import asyncHandler from '../middleware/async-handler.js'
import User from '../models/User.js'
import generateToken from '../helpers/generate-token.js'

// @desc    Login user & token
// @route   POST /api/v1/auth/login
// @access  Public
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.validatePassword(password))) {
    generateToken(res, user._id)

    res.json({
      message: 'LOGGED IN',
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

// @desc    Register user
// @route   POST /api/v1/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('USER ALREADY EXISTS')
  }
  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    generateToken(res, user._id)

    res.status(201).json({
      message: 'USER REGISTERED',
      response: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    })
  } else {
    res.status(400)
    throw new Error('INVALID USER DATA')
  }
})

// @desc    Logout user/ clear cookie
// @route   POST /api/v1/auth/logout
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

const authController = { loginUser, logoutUser, registerUser }

export default authController
