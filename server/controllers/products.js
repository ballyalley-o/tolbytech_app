import express from 'express'
import asyncHandler from '../middleware/async-handler.js'
import Product from '../models/Product.js'

// @desc    fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({})
  res.json(products)
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

const productsController = {
  getProducts,
  getProduct,
  //   createProduct,
  //   updateProduct,
  //   deleteProduct,
}

export default productsController
