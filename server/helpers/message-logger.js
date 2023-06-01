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

  port_response: function (port) {
    console.log(`SERVER STATUS: Running on PORT: ${port}`.bgYellow.black)
  },
}

export default MessageLOG
