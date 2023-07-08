import fs from 'fs'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import morgan from 'morgan'
import setHeaders from '../helpers/set-headers.js'
import connectDB from './db.js'
import { linkRoutes, payPalRoute, serverRoute } from '../routes/index.js'
import { fileStatic, fileStaticBuild } from '../middleware/upload-config.js'
import { stream } from '../helpers/access_logs.js'
import { notFound, errorHandler } from '../middleware/error-handler.js'
import MessageLOG from '../helpers/message-logger.js'
import VARS from '../helpers/vars/vars.js'

dotenv.config({
  path: './server/config/config.env',
})

/**
 * @param app - express app
 * @param connectDB - connect to database
 * @param registerRoutes - link routes from routes/index.js
 * @param start - start/init the server
 * @param protect - protect routes
 * @param VARS - environment variables constants/global config
 * @param MessageLOG - custom message logger
 * @param notFound - 404 error handler
 * @param errorHandler - error handler
 * @param cors - cross origin resource sharing
 * @param setHeaders - set headers for the server
 * @param registerRoutes - introduce the connection links to the other routes
 * @param linkRoutes - connect routes from routes/index.js
 * @param connectDB - ignite the connection to the database
 * @param fileStatic - static file path
 * @param fileStaticBuild - static file path for production
 * @param apiRedirect - redirect to the by api to the server
 */

export class App {
  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(fileStatic)
    this.app.use(cookieParser())
    this.app.use(setHeaders)
    this.app.use(cors())
    this.registerRoutes()
    this.app.use(morgan('combined', { stream }))
    this.app.use(fileStaticBuild)
    this.app.use(notFound)
    this.app.use(errorHandler)
  }
  production() {
    try {
      this.app.use(serverRoute)
      MessageLOG.env(VARS.ENV)
    } catch (err) {
      MessageLOG.error(err)
    }
  }

  async connectDB() {
    try {
      await connectDB()
      MessageLOG.log(VARS.SERVERCONNECT)
    } catch (err) {
      MessageLOG.error(VARS.FAILEDCONNECTION)
      MessageLOG.error(err)
    }
  }

  registerRoutes() {
    linkRoutes(this.app, VARS.API_ROOT), payPalRoute(this.app, VARS.API_ROOT)
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
