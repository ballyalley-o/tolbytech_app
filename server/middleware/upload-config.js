import path from 'path'
import express from 'express'
import { upload } from '../controllers/upload.js'
import VARS from '../helpers/vars/vars.js'

export const singleUpload = upload.single(VARS.FILE_)

const __dirname = path.resolve()
export const fileStatic = express.static(path.join(__dirname, VARS.FILESTATIC))
