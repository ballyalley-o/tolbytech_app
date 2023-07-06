import mongoose from 'mongoose'
import dotenv from 'dotenv'
import 'colors'
import products from './migration/data/products.js'
import users from './migration/data/user.js'
import User from './models/User.js'
import Product from './models/Product.js'
import Order from './models/Order.js'
import connectDB from './config/db.js'
import MessageLOG from './helpers/message-logger.js'

dotenv.config()

connectDB()

const peerData = async () => {
  try {
    await User.deleteMany()
    await Product.deleteMany()
    await Order.deleteMany()

    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })
    await Product.insertMany(sampleProducts)
    MessageLOG.custom('DATA PEERED', 'bgGreen')
    process.exit()
  } catch (err) {
    const error = new Error(err)
    error.statusCode(404)
    throw error
  }
}

const destroyData = async () => {
  try {
    await Product.deleteMany()
    await User.deleteMany()
    await Order.deleteMany()

    MessageLOG.custom('DATA DESTROYED', 'bgRed')
    process.exit(1)
  } catch (err) {}
  const error = new Error(err)
  error.statusCode(403)
  throw error
}

if (process.argv[2] === '-d') {
  destroyData()
} else if (process.argv[2] === '-i') {
  peerData()
}
