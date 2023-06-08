import { getReasonPhrase } from 'http-status-codes'

function customResponse(code, message) {
  if (message) {
    return message
  } else {
    return getReasonPhrase(code)
  }
}

function defaultResponse(code, message, response) {
  if (response) {
    const serverResponse = {
      message: message,
      response,
    }
    return serverResponse
  } else {
    getReasonPhrase(code)
  }
}

export { customResponse, defaultResponse }
