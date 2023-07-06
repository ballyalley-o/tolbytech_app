import jwt from 'jsonwebtoken'
import VARS from './vars/vars.js'

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, VARS.JWT_SECRET, {
    expiresIn: '30d',
  })
  // jwt wont be saved in cookie in the browser
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: VARS.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000,
  })
}

export default generateToken
