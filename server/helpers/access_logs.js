import fs from 'fs'
import path from 'path'
import LogEntry from '../models/LogEntry'
import MessageLOG from './message-logger'
import { errorHandler } from '../middleware/error-handler'

const __dirname = path.resolve()
const logPath = path.join(__dirname, 'server', 'logs')

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(logPath, 'access.log'))

export default accessLogStream

export const stream = {
  write: (message) => {
    const log = new LogEntry({ message })
    log.save().catch((err) => errorHandler(err, 'Error saving log to database'))
  },
}
