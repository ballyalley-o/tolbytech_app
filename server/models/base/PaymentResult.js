import mongoose from 'mongoose'

export const PaymentResultSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  status: {
    type: String,
  },
  update_time: {
    type: String,
  },
  email_address: {
    type: String,
  },
})

export const PaymentResult = mongoose.model(
  'PaymentResult',
  PaymentResultSchema
)
