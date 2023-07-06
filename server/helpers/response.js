import dotenv from 'dotenv'
import VARS from './vars/vars.js'
dotenv.config({
  path: './server/config/config.env',
})

const tolby = {
  name: 'Tolby Technologies Application SERVER',
  status: 'Running',
  API: 'tolbytech-server',
  port: VARS.PORT,
  environment: VARS.ENV,
}

const TolbyTechResponse = {
  response: (req, res) => {
    res.send(tolby)
  },
}

export { TolbyTechResponse }
