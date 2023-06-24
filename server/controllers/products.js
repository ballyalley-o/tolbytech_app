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

// @desc    UPDATE all products
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res, next) => {
  const {
    name,
    price,
    user,
    image,
    brand,
    category,
    countInStock,
    numReviews,
    description,
    model,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.user = user
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock
    product.numReviews = numReviews
    product.description = description
    product.model = model

    const updatedProduct = await product.save()
    res
      .status(StatusCodes.OK)
      .send(defaultResponse(StatusCodes.OK, 'PRODUCTS UPDATED', updatedProduct))
  } else {
    res.status(StatusCodes.NOT_FOUND)
    throw new Error(getReasonPhrase(StatusCodes.NOT_FOUND))
  }
})

const productsController = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  //   deleteProduct,
}

export default productsController
