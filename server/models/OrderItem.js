import mongoose from 'mongoose'

const OrderItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qty: {
      type: String,
      required: true,
      default: 1,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    },
  },
  { timestamps: true }
)

const OrderItem = mongoose.model('OrderItem', OrderItemSchema)

export default OrderItem
