import path from 'path'
import express from 'express'
import { upload } from '../controllers/upload.js'
import VARS from '../helpers/vars/vars.js'

export const singleUpload = upload.single('image')

const __dirname = path.resolve()
console.log('__dirname: ', __dirname)

// const uploadPath = path.join(__dirname, 'uploads')
const uploadPath = path.join(__dirname, 'uploads')
const filesPath = path.join(__dirname, 'files')
// static file path to my uploads folder
export const fileStatic = express.static(uploadPath)
export const serverStatic = express.static(filesPath)
