import fs from 'fs'
import path from 'path'

const __dirname = path.resolve()

const logPath = path.join(__dirname, 'server', 'logs')

const accessLogStream = fs.createWriteStream(path.join(logPath, 'access.log'))

export default accessLogStream
