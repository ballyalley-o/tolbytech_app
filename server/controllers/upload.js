import path from 'path'
import multer from 'multer'
import VARS from '../helpers/vars/vars.js'
import MessageResp from '../helpers/message-response.js'
import exp from 'constants'

const storage = multer.diskStorage({
  destination(req, file, cb) {
    try {
      cb(null, VARS.HARDCODEPATH)
      // cb(null, VARS.FILEOUTPUT)
    } catch (error) {
      cb(error)
    }
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
})

export const singleUpload = upload.single('image')

// uses hardcoded path
const fileController = (req, res) => {
  //  hard coded path to the uploads folder for now, static cant find the uploads folder in the root
  const reqFilePath = req.file.path
  // console.log('reqFilePath: ', reqFilePath)
  const urlFilePath = reqFilePath.replace('ui/public', '')
  res.send({
    message: MessageResp.FILESUCCESS,
    image: `${urlFilePath}`,
  })
}

// const fileController = (req, res) => {
//   res.send({
//     message: MessageResp.FILESUCCESS,
//     image: `/${req.file.path}`,
//   })
// }

export default fileController
