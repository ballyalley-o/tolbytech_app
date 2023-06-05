/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../slices/cart-slice'
import {
  Container,
  Typography,
  Button,
  List,
  CardMedia,
  MenuItem,
  Badge,
  Grid,
  Select,
  InputLabel,
  ListItem,
  FormControl,
  CardActionArea,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Message from '../components/Message'
import DeleteIcon from '@mui/icons-material/Delete'

const LinkBase = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#000',
  fontWeight: 600,
  border: '1px solid #000',
  padding: '.3rem .5rem',
  borderRadius: '1em',
}))

const CartScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const handleAddToCart = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }))
  }

  const handleRemoveFromCart = async (id) => {
    dispatch(removeFromCart(id))
  }

  const handleCheckout = () => {
    navigate('/login?redirect=/shipping')
  }

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <Typography variant="h3" pr={3} py={3} fontWeight="bold">
              Bag.
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ color: 'gray', display: 'inline-flex' }}
              >
                Your bag
              </Typography>
            </Typography>
          </Grid>
          <Grid item lg={8}>
            {cartItems.length === 0 ? (
              <Message variant="h3" pr={3} py={3} fontWeight="bold">
                Your bag is empty <LinkBase to="/">Go Back</LinkBase>
              </Message>
            ) : (
              <>
                <Grid container spacing={2} gap={2}>
                  {cartItems.map((item) => (
                    <Grid container key={item._id} spacing={2}>
                      <Grid item lg={2}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            image={item.image}
                            alt={item.name}
                            sx={{ width: '100%', height: '100%' }}
                          />
                        </CardActionArea>
                      </Grid>
                      <Grid item lg={6}>
                        <Grid container>
                          <Grid item lg={12}>
                            <Link to={`/products/${item._id}`}>
                              <Typography variant="body1">
                                {item.name}
                              </Typography>
                            </Link>
                          </Grid>
                          <Grid item lg={12}>
                            <Typography variant="body2" fontWeight="bold">
                              NZ${item.price}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={2}>
                        <FormControl size="medium">
                          <InputLabel id="qty">Qty</InputLabel>
                          <Select
                            labelId="qty"
                            id="qty-select"
                            value={Number(item.qty)}
                            label="Qty"
                            onChange={(e) => {
                              handleAddToCart(item, Number(e.target.value))
                            }}
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <MenuItem key={x + 1} value={x + 1}>
                                {x + 1}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item lg={2}>
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => {
                            handleRemoveFromCart(item._id)
                          }}
                        >
                          <DeleteIcon />
                        </Button>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
          </Grid>
          {cartItems.length !== 0 && (
            <Grid item lg={4}>
              <List dense disablePadding>
                <Grid item>
                  <ListItem>
                    <Grid container spacing={2} gap={2}>
                      <Grid item lg={12}>
                        <Typography variant="body1" fontWeight="bold">
                          Subtotal: &nbsp; &nbsp;
                          <Badge
                            badgeContent={cartItems.reduce(
                              (acc, item) => acc + item.qty,
                              0
                            )}
                            color="info"
                            size="large"
                          />
                          &nbsp; &nbsp;
                          {cartItems.reduce((acc, item) => acc + item.qty, 0) >
                          1
                            ? ' items'
                            : ' item'}
                        </Typography>
                      </Grid>
                      <Grid item lg={12}>
                        <Typography variant="body1">
                          NZ$
                          {cartItems
                            .reduce(
                              (acc, item) => acc + item.qty * item.price,
                              0
                            )
                            .toFixed(2)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                </Grid>
              </List>
              <Grid
                item
                lg={12}
                sx={{
                  display: 'block',
                  margin: '1rem 0',
                }}
              >
                <hr />
              </Grid>
              <Grid item lg={12}>
                <Button
                  type="button"
                  fullWidth
                  disabled={cartItems.length === 0}
                  sx={{
                    borderRadius: '5px',
                    margin: '1rem 0',
                    backgroundColor: 'pink.main',
                    color: '#fff',
                    fontWeight: 'bold',
                  }}
                  onClick={() => {
                    handleCheckout()
                  }}
                >
                  checkout
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  )
}

export default CartScreen
