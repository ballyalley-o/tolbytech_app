import dotenv from 'dotenv'
dotenv.config({
  path: './server/config/config.env',
})

const VARS = {
  // JWT
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRATION: process.env.JWT_EXPIRATION,
  // PORT
  PORT: process.env.PORT || 8003,
  // ENV
  ENV: process.env.NODE_ENV,
  // API_ROOT
  API_ROOT: process.env.API_ROOT,
  // MONGO DB
  USERNAME: process.env.MONGODB_USER,
  PASSWORD: process.env.MONGODB_PASS,
  HOST: process.env.MONGODB_HOST,
  DBNAME: process.env.MONGODB_DB,
  DB_URI: process.env.MONGODB_URI,
  // PayPal
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
  // File
  FILE_: 'image',
  FILETYPES: /jpg|jpeg|png/,
  FILEOUTPUT: 'uploads/',
  FILESTATIC: '/uploads',
  HARDCODEPATH: 'ui/public/uploads/',

  // server connect to database
  SERVERCONNECT: '.. CONNECTED',
  FAILEDCONNECTION: 'FAILED TO CONNECT TO DATABASE',
}

export default VARS
