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
/**
 *
 * @param app - express app
 * @param connectDB - connect to database
 * @param registerRoutes - link routes from routes/index.js
 * @param start - start/init the server
 * @param protect - protect routes
 * @param VARS - environment variables
 * @param MessageLOG - custom message logger
 * @param TolbyTechResponse - custom response for the server
 * @param notFound - 404 error handler
 * @param errorHandler - error handler
 * @param cors - cross origin resource sharing
 * @param setHeaders - set headers for the server
 * @parem registerRoutes - introduce the connection links to the other routes
 * @param linkRoutes - connect routes from routes/index.js
 * @param connectDB - ignite the connection to the database
 *
 */

export class App {
  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(cookieParser())
    this.app.use(setHeaders)
    this.app.use(cors())
    this.registerRoutes()
    this.app.get('/', TolbyTechResponse.response)
    this.app.get('/api/v1/config/paypal', (req, res) => {
      res.send({ clientId: VARS.PAYPAL_CLIENT_ID })
    })
    this.app.use(notFound)
    this.app.use(errorHandler)
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
