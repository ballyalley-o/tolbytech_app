import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { linkRoutes } from '../routes/index.js'
import connectDB from './db.js'
import { notFound, errorHandler } from '../middleware/error-handler.js'
import { TolbyTechResponse } from '../helpers/response.js'
import MessageLOG from '../helpers/message-logger.js'
import setHeaders from '../helpers/set-headers.js'
dotenv.config({
  path: './server/config/config.env',
})

const API_ROOT = process.env.API_ROOT
const PORT = process.env.PORT || 8003
const ENV = process.env.NODE_ENV

export class App {
  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.get('/', TolbyTechResponse.response)
    this.app.use(setHeaders)
    this.registerRoutes()
    this.app.use(notFound)
    this.app.use(errorHandler)
    this.app.use(
      cors({
        origin: '*',
      })
    )
  }

  async connectDB() {
    try {
      await connectDB()
      MessageLOG.custom('.. CONNECTED', 'green')
    } catch (err) {
      MessageLOG.error(err)
    }
  }

  registerRoutes() {
    linkRoutes(this.app, API_ROOT)
  }

  start() {
    try {
      this.app.listen(PORT, () => {
        MessageLOG.port_response(PORT)
        MessageLOG.custom(`ENVIRONMENT: ${ENV}`, 'bgBlue')
      })
    } catch (err) {
      MessageLOG.error(err)
    }
  }
}

export default App
