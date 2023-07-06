import path from 'path'
import express from 'express'
import { upload } from '../controllers/upload.js'
import VARS from '../helpers/vars/vars.js'

export const singleUpload = upload.single('image')

const __dirname = path.resolve()

// development static
const uploadPath = path.join(__dirname, VARS.FILEDEV)
export const fileStatic = express.static(uploadPath)

// production static
const uploadPathBuild = path.join(__dirname, VARS.FILEBUILD)
export const fileStaticBuild = express.static(uploadPathBuild)

const pathBuild = (dir, path1, path2, file) => {
  return path.resolve(dir, path1, path2, file)
}

// build not api redirect to index.html
export const buildRedirect = path.resolve(__dirname, 'ui', 'dist', 'index.html')
export const apiRedirect = (req, res) => {
  res.sendFile(buildRedirect)
}
