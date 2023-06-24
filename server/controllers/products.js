import { StatusCodes } from 'http-status-codes'
import { getReasonPhrase } from 'http-status-codes'
import asyncHandler from '../middleware/async-handler.js'
import Product from '../models/Product.js'
import { defaultResponse } from '../helpers/static.js'

// @desc    fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({})
  res
    .status(StatusCodes.OK)
    .send(defaultResponse(StatusCodes.OK, 'PRODUCTS FETCHED', products))
})

// @desc    fetch a product
// @route   GET /api/products/:id
// @access    Public
const getProduct = asyncHandler(async (req, res, next) => {
  const prodId = req.params.id
  const product = await Product.findById(prodId)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Resource not found')
  }
})

// @desc    create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res, next) => {
  const product = new Product({
    name: 'Sample Name',
    price: 0,
    user: req.user._id,
    image: '/images/tolby.jpg',
    brand: 'Tolby brand',
    category: 'Tolby category',
    countInStock: 0,
    numReviews: 0,
    description: 'description',
    model: 'model',
  })

  const createdProduct = await product.save()
  res
    .status(StatusCodes.CREATED)
    .send(
      defaultResponse(StatusCodes.CREATED, 'PRODUCTS CREATED', createdProduct)
    )
})

const productsController = {
  getProducts,
  getProduct,
  createProduct,
  //   updateProduct,
  //   deleteProduct,
}

export default productsController
