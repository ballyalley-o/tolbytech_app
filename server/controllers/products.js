import asyncHandler from '../middleware/async-handler.js'
import Product from '../models/Product.js'
import { unlinkDelete } from '../helpers/unlink-delete.js'
import { StatusCodes } from 'http-status-codes'
import { getReasonPhrase } from 'http-status-codes'
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
    model,
    category,
    countInStock,
    numReviews,
    description,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.user = user
    product.image = image
    product.brand = brand
    product.category = category
    product.model = model
    product.countInStock = countInStock
    product.numReviews = numReviews
    product.description = description

    // if (req.body.image) {
    //   unlinkDelete(product.image)
    //   product.image = image
    // }

    const updatedProduct = await product.save()

    res
      .status(StatusCodes.OK)
      .send(defaultResponse(StatusCodes.OK, 'PRODUCTS UPDATED', updatedProduct))
  } else {
    res.status(StatusCodes.NOT_FOUND)
    throw new Error(getReasonPhrase(StatusCodes.NOT_FOUND))
  }
})

// @desc    DELETE all products
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await Product.deleteOne({ _id: req.params.id })

    res
      .status(StatusCodes.OK)
      .send(defaultResponse(StatusCodes.OK, 'PRODUCT DELETED', {}))
  } else {
    res.status(StatusCodes.NOT_FOUND)
    throw new Error(getReasonPhrase(StatusCodes.NOT_FOUND))
  }
})

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  const { rating, comment } = req.body

  if (product) {
    const reviewed = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    )
    if (reviewed) {
      res.status(StatusCodes.NOT_FOUND)
      throw new Error('PRODUCT ALREADY REVIEWED')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)
    product.numReviews = product.reviews.length
    product.rating =
      product.reviews.reduce((acc, review) => acc + review.rating, 0) /
      product.reviews.length

    await product.save()
    res
      .status(StatusCodes.CREATED)
      .send(defaultResponse(StatusCodes.CREATED, 'PRODUCT REVIEWED', review))
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
  deleteProduct,
  createProductReview,
}

export default productsController
