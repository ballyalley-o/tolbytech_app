import mongoose from 'mongoose'
import { OrderItemSchema } from './base/OrderItem.js'
import { ShippingAddressSchema } from './base/ShippingAddress.js'
import { PaymentResultSchema } from './base/PaymentResult.js'

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    orderItems: [OrderItemSchema],
    shippingAddress: { ShippingAddressSchema },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: { PaymentResultSchema },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
)

const Order = mongoose.model('Order', OrderSchema)

export default Order
