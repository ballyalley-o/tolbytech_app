import asyncHandler from '../middleware/async-handler.js'
import Order from '../models/order.js'
import { StatusCodes, getReasonPhrase } from 'http-status-codes'
import { customResponse, defaultResponse } from '../helpers/static.js'

// @desc    Add all order items
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res, next) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('NO ORDERS ADDED')
  } else {
    const order = new Order({
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createdOrder = await order.save()
    res
      .status(StatusCodes.CREATED)
      .send(
        defaultResponse(StatusCodes.CREATED, 'CREATED AN ORDER', createdOrder)
      )
  }
})

// @desc    Get logged in user's order items
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id })
  res
    .status(StatusCodes.OK)
    .send(defaultResponse(StatusCodes.OK, 'ORDERS FETCHED', orders))
})

// @desc    Get order item by its id
// @route   GET /api/orders/:id
// @access  Private
const getOrder = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )
  if (order) {
    res
      .status(StatusCodes.OK)
      .send(defaultResponse(StatusCodes.OK, 'THE ORDER IS FETCHED', order))
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .send(getReasonPhrase(StatusCodes.NOT_FOUND))
  }
})

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private/Admin
const updateOrderToPaid = asyncHandler(async (req, res, next) => {
  res.send('update order to paid')
})

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private
const updateOrderToDelivered = asyncHandler(async (req, res, next) => {
  res.send('update order to delivered')
})

// @desc    Get ALL orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res, next) => {
  res.send('get all orders')
})

const ordersController = {
  addOrderItems,
  getMyOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrder,
  getOrders,
}

export default ordersController
