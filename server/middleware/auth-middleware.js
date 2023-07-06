import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import asyncHandler from './async-handler.js'
import VARS from '../helpers/vars/vars.js'
import MessageLOG from '../helpers/message-logger.js'

//protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token

  // read jwt from the cookie
  token = req.cookies.jwt

  if (token) {
    try {
      const decoded = jwt.verify(token, VARS.JWT_SECRET)
      req.user = await User.findById(decoded.userId).select('-password')
      next()
    } catch (error) {
      MessageLOG.error(error)
      res.status(401)
      throw new Error('TOKEN INVALID')
    }
  } else {
    res.status(401)
    throw new Error('UNAUTHORIZED, NO TOKEN RECEIVED')
  }
})

// admin middleware
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('ADMIN ACCESS ONLY')
  }
}

export { protect, admin }
