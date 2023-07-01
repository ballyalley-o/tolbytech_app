import fs from 'fs'
import MessageLOG from './message-logger.js'

export const unlinkDelete = (path) => {
  fs.unlink(path, (err) => {
    if (err) {
      MessageLOG.error(err)
      return
    }
    MessageLOG.success(`File deleted: ${path}`)
  })
}
