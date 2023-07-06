import mongoose from 'mongoose'
import dotenv from 'dotenv'
import MessageLOG from '../helpers/message-logger.js'
import VARS from '../helpers/vars/vars.js'
dotenv.config({
  path: './server/config/config.env',
})

const connectDB = async () => {
  try {
    await mongoose.connect(VARS.DB_URI)
    MessageLOG.db(VARS.HOST, VARS.DBNAME)
  } catch (err) {
    const error = new Error(err)
    error.statusCode = 401
    throw error
  }
}

export default connectDB
