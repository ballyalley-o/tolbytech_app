import path from 'path'
import multer from 'multer'
import VARS from '../helpers/vars/vars.js'
import MessageResp from '../helpers/message-response.js'

export const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, VARS.FILEOUTPUT)
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

const checkFileType = (file, cb) => {
  const filetypes = VARS.FILETYPES
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb(MessageResp.FILEWARN)
  }
}

export const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

const fileController = (req, res) => {
  console.log('req.file.path: ', req.file.path)
  res.send({
    message: MessageResp.FILESUCCESS,
    image: `/${req.file.path}`,
  })
}

export default fileController
