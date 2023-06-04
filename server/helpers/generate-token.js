import jwt from 'jsonwebtoken'
import VARS from './vars/vars.js'

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, VARS.JWT_SECRET, {
    expiresIn: VARS.JWT_EXPIRATION,
  })
  //set JWT as HTTP-only cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: VARS.ENV !== 'development',
    sameSite: 'strict',
    maxAge: 2 * 60 * 60 * 1000,
  })
}

export default generateToken
