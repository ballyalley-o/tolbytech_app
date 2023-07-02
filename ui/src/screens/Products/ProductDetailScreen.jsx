/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  Grid,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  List,
  ListItem,
  Box,
  Divider,
  Card,
} from '@mui/material'
import {
  CardMediaBase,
  CardContentBase,
  BoxBase,
  ChipBase,
  CartButton,
  CartTypography,
} from '../../themes/styles/product-styled'
import { ButtonBase, InputBase } from '../../themes/styles/default-styled'
import MultiInputViewField from '../../components/Forms/MultiInputViewField'
import InputDescField from '../../components/Forms/InputDescField'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import SnackAlert from '../../components/SnackAlert'
import useSnack from '../../hooks/useSnack/useSnack'
import Rating from '../../components/Rating'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import BackButton from '../../components/BackButton'
import { CLIENT, Snacks } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation,
} from '../../slices/products-slice'
import { addToCart } from '../../slices/cart-slice'
import { set } from 'mongoose'

const ProductDetailScreen = () => {
  const { id: productId } = useParams()
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [snackOpen, setSnackOpen] = useState(null)
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const { severity, setSeverity, handleSnackClose } = useSnack()

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId)

  const [createReview, { isLoading: loadingReview }] = useCreateReviewMutation()

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty }))
    navigate(CLIENT.BAG_URL)
  }

  const handleReviewSubmit = async (e) => {
    e.preventDefault()

    try {
      await createReview({
        productId,
        rating,
        comment,
      }).unwrap()
      refetch()
      setSnackOpen(Snacks.REVIEWED)
      setSeverity('success')
      setRating(0)
      setComment('')
      handleHideDuration(3000)
    } catch (error) {
      setSnackOpen(error?.data?.message || error.error)
      setSeverity('error')
      handleHideDuration(3000)
    }
  }

  const handleHideDuration = (duration) => {
    setTimeout(() => {
      setSnackOpen(null)
    }, duration)
  }

  return (
    <>
      <Helmet>
        <title>{product?.name}</title>
      </Helmet>
      <BackButton to="/" />
      {snackOpen && (
        <SnackAlert
          open={snackOpen}
          onClose={handleSnackClose}
          severity={severity}
          transition="left"
          horizontal="right"
          vertical="top"
          duration={3000}
        >
          {snackOpen}
        </SnackAlert>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message severity="error" color="error">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Grid container>
            <Grid item lg={7}>
              <CardMediaBase component="img" image={product.image} />
            </Grid>
            <Grid item lg={5}>
              <Grid container>
                <CardContentBase>
                  <BoxBase>
                    {product.model >= '2020' ? (
                      <Typography variant="body1">New</Typography>
                    ) : (
                      <Typography variant="body1">{product.model}</Typography>
                    )}
                    <Typography variant="h3">{product.name}</Typography>
                    <Rating
                      value={product.rating}
                      rating={product.numReviews}
                    />
                  </BoxBase>
                  <BoxBase>
                    <Typography variant="body1">NZ${product.price}</Typography>
                  </BoxBase>
                </CardContentBase>
                <CardContentBase>
                  <BoxBase>
                    <Typography variant="body1">
                      {product.description}
                    </Typography>
                  </BoxBase>
                  <Typography variant="body2">
                    Category: {product.category}
                  </Typography>
                </CardContentBase>
                <CardContentBase>
                  <BoxBase fontSize={1}>
                    <ChipBase
                      productCountInStock={product.countInStock}
                      label={
                        product.countInStock > 0 ? 'In Stock' : 'Out of Stock'
                      }
                      variant="outlined"
                    />
                  </BoxBase>
                </CardContentBase>
                {product.countInStock > 0 && (
                  <CardContentBase>
                    <BoxBase>
                      <FormControl size="medium">
                        <InputLabel id="qty">Qty</InputLabel>
                        <Select
                          labelId="qty"
                          id="qty-select"
                          value={qty}
                          label="Qty"
                          onChange={(e) => setQty(Number(e.target.value))}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </BoxBase>
                  </CardContentBase>
                )}

                <CardContentBase>
                  <BoxBase>
                    <CartButton
                      productCountInStock={product.countInStock}
                      onClick={handleAddToCart}
                      disabled={product.countInStock === 0}
                    >
                      {product.countInStock === 0 ? (
                        ''
                      ) : (
                        <AddShoppingCartIcon />
                      )}
                      <CartTypography variant="caption">
                        {product.countInStock === 0
                          ? 'Stocks are on its way'
                          : 'Add to Cart'}
                      </CartTypography>
                    </CartButton>
                  </BoxBase>
                </CardContentBase>
              </Grid>
            </Grid>
          </Grid>

          {/* review section */}
          <Grid container direction="row" p={5}>
            <Grid item direction="column" md={12}>
              <Box display="flex" p={2}>
                <Typography variant="h2">REVIEWS</Typography>
              </Box>
            </Grid>

            <Grid item md={6}>
              {product.reviews.length === 0 && (
                <Message variant="error" color="error">
                  No Reviews
                </Message>
              )}

              <List>
                {product.reviews.map((review) => (
                  <>
                    {/* <Card sx={{ my: 2 }}> */}
                    <ListItem
                      key={review._id}
                      sx={{
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                      }}
                    >
                      <Grid container direction="row" spacing={3}>
                        <Grid item md={12}>
                          <Typography variant="h5" fontWeight="bold">
                            {review.name}
                          </Typography>
                        </Grid>
                        <Divider sx={{ py: 1 }} />
                        <Grid item md={12}>
                          <Rating value={review.rating} />

                          <Typography variant="body2">
                            {review.createdAt.substring(0, 10)}
                          </Typography>
                        </Grid>
                        <Grid item md={12}>
                          <Typography variant="body1">
                            {review.comment}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <Divider sx={{ py: 1 }} />
                    {/* </Card> */}
                  </>
                ))}
              </List>
            </Grid>
            <Grid item md={6}>
              <Grid container direction="column" spacing={2} gap={2} p={2}>
                <Grid item md={12}>
                  <Typography variant="h5">WRITE A CUSTOMER REVIEW</Typography>
                  <Divider />
                </Grid>

                <Grid item md={12}>
                  {loadingReview && <Loader />}
                  {userInfo ? (
                    <Grid container direction="row" spacing={4} gap={2}>
                      <Grid item md={12}>
                        <FormControl
                          component="form"
                          size="medium"
                          fullWidth
                          onSubmit={handleReviewSubmit}
                        >
                          <InputLabel id="rating">Rating</InputLabel>
                          <Select
                            labelId="rating"
                            id="rating-select"
                            value={rating}
                            label="Rating"
                            size="large"
                            onChange={(e) => setRating(Number(e.target.value))}
                          >
                            <MenuItem value={1}>1 - Poor</MenuItem>
                            <MenuItem value={2}>2 - Fair</MenuItem>
                            <MenuItem value={3}>3 - Good</MenuItem>
                            <MenuItem value={4}>4 - Very Good</MenuItem>
                            <MenuItem value={5}>5 - Excellent</MenuItem>
                          </Select>

                          <InputDescField
                            id="comment"
                            size="extra-large"
                            label="Comment"
                            title="Comment"
                            value={comment}
                            placeholder="Enter comment"
                            onChange={(e) => setComment(e.target.value)}
                          />

                          <ButtonBase
                            disabled={loadingReview}
                            type="submit"
                            fullWidth
                          >
                            SUBMIT
                          </ButtonBase>
                        </FormControl>
                      </Grid>
                    </Grid>
                  ) : (
                    <Message variant="info" color="info">
                      Please{' '}
                      <Link to={CLIENT.LOGIN_URL}>
                        <b>sign in</b>
                      </Link>{' '}
                      to write a review
                    </Message>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </>
  )
}

export default ProductDetailScreen
