import express from 'express'
import fileController from '../controllers/upload.js'
import { singleUpload } from '../middleware/upload-config.js'

const router = express.Router()

router.post('/', singleUpload, fileController)

const uploadRouter = router

export default uploadRouter
