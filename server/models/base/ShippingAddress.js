import mongoose from 'mongoose'

export const ShippingAddressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
})

export const ShippingAddress = mongoose.model(
  'ShippingAddress',
  ShippingAddressSchema
)
