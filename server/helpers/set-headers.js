const setHeaders = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Origin, X-Requested-With, Accept'
  )
  res.setHeader('Access-Control-Allow-Credentials', true, 'same-origin')
  res.setHeader('Access-Control-Max-Age', 86400)

  next()
}

export default setHeaders
