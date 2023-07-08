import mongoose from 'mongoose'

const logEntrySchema = mongoose.Schema(
  {
    message: String,
  },
  {
    timestamps: true,
  }
)

const LogEntry = mongoose.model('LogEntry', logEntrySchema)
export default LogEntry
