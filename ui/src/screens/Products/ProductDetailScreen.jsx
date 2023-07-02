/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  Grid,
  Typography,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@mui/material'
import {
  CardMediaBase,
  CardContentBase,
  BoxBase,
  ChipBase,
  CartButton,
  CartTypography,
} from '../../themes/styles/product-styled'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Rating from '../../components/Rating'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import BackButton from '../../components/BackButton'
import { CLIENT } from '../../constants'
import { useDispatch } from 'react-redux'
import { useGetProductDetailsQuery } from '../../slices/products-slice'
import { addToCart } from '../../slices/cart-slice'

const ProductDetailScreen = () => {
  const { id: productId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [qty, setQty] = useState(1)

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty }))
    navigate(CLIENT.BAG_URL)
  }

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId)

  return (
    <>
      <Helmet>
        <title>{product?.name}</title>
      </Helmet>
      <BackButton to="/" />
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
        </>
      )}
    </>
  )
}

export default ProductDetailScreen
