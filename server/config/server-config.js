import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import setHeaders from '../helpers/set-headers.js'
import connectDB from './db.js'
import { linkRoutes } from '../routes/index.js'
import { notFound, errorHandler } from '../middleware/error-handler.js'
import { TolbyTechResponse } from '../helpers/response.js'
import MessageLOG from '../helpers/message-logger.js'
import VARS from '../helpers/vars/vars.js'
dotenv.config({
  path: './server/config/config.env',
})

export class App {
  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(cookieParser())
    this.app.get('/', TolbyTechResponse.response)
    this.app.use(setHeaders)
    this.registerRoutes()
    this.app.use(notFound)
    this.app.use(errorHandler)
    this.app.use(cors({ origin: '*' }))
  }
  async connectDB() {
    try {
      await connectDB()
      MessageLOG.custom('.. CONNECTED', 'green')
    } catch (err) {
      MessageLOG.error('FAILED TO CONNECT')
      MessageLOG.error(err)
    }
  }

  registerRoutes() {
    linkRoutes(this.app, VARS.API_ROOT)
  }

  start() {
    try {
      this.app.listen(VARS.PORT, () => {
        MessageLOG.port_response(VARS.PORT)
        MessageLOG.env(VARS.ENV)
      })
    } catch (err) {
      MessageLOG.error(err)
    }
  }
}

export default App
