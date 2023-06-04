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
  // DB
  DB_URI: process.env.DB_URI,
}

export default VARS
