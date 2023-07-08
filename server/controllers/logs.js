import asyncHandler from 'express-async-handler'
import morgan from 'morgan'

// @desc    Check all logs
// @route   GET /api/v1/logs
// @access  Private
const getLogs = asyncHandler(async (req, res, next) => {
  const logs = await Log.find({})
  //  create a controller for the logs in the logs.js file

  res.status(200).send('GET ALL LOGS')
})
