import mongoose from 'mongoose'

const USERNAME = process.env.MONGODB_USER
const PASSWORD = process.env.MONGODB_PASS
const HOST = process.env.MONGODB_HOST
const DBNAME = process.env.MONGODB_DB

const connectDB = async () => {
  try {
    const DBURL = `mongodb+srv://${USERNAME}:${PASSWORD}@${HOST}/${DBNAME}?retryWrites=true&w=majority`
    const conDB = await mongoose.connect(DBURL, {})
    console.log(`MONGODB_HOST: ${HOST}`.green.bold)
    console.log(`MONGODB_DBNAME: ${DBNAME}`.green.bold)
    console.log(`MONGODB_STATUS: CONNECTED`.green.bold)
  } catch (err) {
    const error = new Error(err)
    error.statusCode = 401
    throw error
  }
}

export default connectDB
