/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom'
import Meta from '../../components/Meta/Meta'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Typography, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Streamgraph from '../../components/graphs/Steamgraph'
import Message from '../../components/Message'

const LinkBase = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#000',
  fontWeight: 600,
  border: '1px solid #000',
  padding: '.3rem .5rem',
  borderRadius: '1em',
  cursor: 'pointer',
}))

const TalksScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  return (
    <>
      <Meta title="Talks" />
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <Typography variant="h3" pr={3} py={3} fontWeight="bold">
              Talks.
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ color: 'gray', display: 'inline-flex' }}
              >
                Tech Talks
              </Typography>
            </Typography>
          </Grid>
          <Grid item lg={12}>
            {cartItems.length !== 0 ? (
              <Message variant="h3" pr={3} py={3} fontWeight="bold">
                News list is empty &nbsp; <LinkBase to="/">Go Back</LinkBase>
              </Message>
            ) : (
              <>
                <Streamgraph
                  width={1000}
                  height={200}
                  data={[
                    { date: '2011-10-01', value: 63.4 },
                    { date: '2011-10-02', value: 58.0 },
                    { date: '2011-10-03', value: 53.3 },
                  ]}
                />
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default TalksScreen
