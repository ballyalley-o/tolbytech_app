/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Meta from '../../components/Meta/Meta'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Typography, Grid } from '@mui/material'
import { LinkBase } from '../../themes/styles/default-styled'
import Heading from '../../components/Heading'
import Message from '../../components/Message'
import Mercator from '../../components/graphs/Mercator/Mercator'
import { MetaTitles } from '../../constants'

const KickScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  return (
    <>
      <Meta title={MetaTitles.KICK} />
      <Container>
        <Grid container spacing={2}>
          <Heading title="Kicks." subTitle="What's a Tech without a Kick?" />
          <Grid item lg={12}>
            {cartItems.length !== 0 ? (
              <Message variant="h3" pr={3} py={3} fontWeight="bold">
                Kicks list is empty &nbsp; <LinkBase href="/">Go Back</LinkBase>
              </Message>
            ) : (
              <>
                <Grid container justifyContent="center">
                  <Mercator
                    title="Kicks"
                    description="Kicks"
                    opacity={0.5}
                    width={1000}
                    height={500}
                    data={[
                      { name: 'Nike', value: 100 },
                      { name: 'Adidas', value: 100 },
                      { name: 'Puma', value: 100 },
                      { name: 'Reebok', value: 100 },
                      { name: 'New Balance', value: 100 },
                      { name: 'Vans', value: 100 },
                      { name: 'Converse', value: 100 },
                      { name: 'Jordan', value: 100 },
                      { name: 'Asics', value: 100 },
                      { name: 'Fila', value: 100 },
                      { name: 'Saucony', value: 100 },
                      { name: 'Under Armour', value: 100 },
                      { name: 'Timberland', value: 100 },
                      { name: 'Balenciaga', value: 100 },
                      { name: 'Yeezy', value: 100 },
                      { name: 'Off-White', value: 100 },
                      { name: 'Gucci', value: 100 },
                      { name: 'Louis Vuitton', value: 100 },
                      { name: 'Dior', value: 100 },
                      { name: 'Versace', value: 100 },
                      { name: 'Prada', value: 100 },
                      { name: 'Fendi', value: 100 },
                      { name: 'Givenchy', value: 100 },
                      { name: 'Chanel', value: 100 },
                      { name: 'Balmain', value: 100 },
                      { name: 'Valentino', value: 100 },
                      { name: 'Saint Laurent', value: 100 },
                      { name: 'Alexander McQueen', value: 100 },
                      { name: 'Burberry', value: 100 },
                    ]}
                    sx={{ opacity: 0.5 }}
                  />
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default KickScreen
