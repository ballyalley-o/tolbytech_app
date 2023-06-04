import 'colors'

const MessageLOG = {
  log: function (message) {
    console.log(message.bgGreen)
  },

  error: function (message) {
    console.log(message.bgRed)
  },

  warn: function (message) {
    console.log(message.bgYellow.black)
  },

  info: function (message) {
    console.log(message.blue.italics)
  },

  success: function (message) {
    console.log(message.green.bold)
  },

  custom: function (message, color) {
    console.log(message[color])
  },

  env: function (env) {
    console.log(`ENVIRONMENT: ${env}`.bgBlue)
  },

  port_response: function (port) {
    console.log(`SERVER STATUS: Running on PORT: ${port}`.bgYellow.black)
  },

  db: function (host, db) {
    console.log(`MONGODB_HOST: ${host}`.green.bold)
    console.log(`MONGODB_DBNAME: ${db}`.green.bold)
    console.log(`MONGODB_STATUS: ...`.green.bold)
  },
}

export default MessageLOG
