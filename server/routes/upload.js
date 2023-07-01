import express from 'express'
import fileController, { singleUpload } from '../controllers/upload.js'

const router = express.Router()

router.post('/', singleUpload, fileController)

const uploadRouter = router

export default uploadRouter
