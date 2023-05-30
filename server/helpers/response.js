import dotenv from 'dotenv'
dotenv.config({
  path: './server/config/config.env',
})

const PORT = process.env.PORT
const ENV = process.env.NODE_ENV

const tolby = {
  name: 'Tolby Technologies Application SERVER',
  status: 'Running',
  API: 'tolbytech-server',
  port: PORT,
  environment: ENV,
}

export default tolby
