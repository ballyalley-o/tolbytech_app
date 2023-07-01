/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  useGetMyOrdersQuery,
  useGetOrdersQuery,
} from '../../../slices/order-slice'
import { Grid, Typography, TableBody } from '@mui/material'
import {
  TableBase,
  TableHeadBase,
  TableRowHeaderBase,
  TableCellBase,
  TableContainerBase,
} from '../../../themes/styles/table-styled'
import { useTheme } from '@mui/material/styles'
import { LinkBase } from '../../../themes/styles/default-styled'
import Row from '../../../components/Row'
import OrderViewAccounts from '../../../components/Accounts/OrderViewAccounts'
import Message from '../../../components/Message'
import Loader from '../../../components/Loader'
import { AdminHeading } from '../../../components/Heading'

const AllOrdersScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery()
  const theme = useTheme()
  const { id } = useParams()
  const user = orders?.response.find((payer) => payer.id === id)
  const { data: userOrders } = useGetMyOrdersQuery(user?.user)
  const userId = userOrders?.response?.map((order) => order.user)

  return (
    <>
      <Helmet>
        <title>Admin | Orders</title>
      </Helmet>
      <AdminHeading title="Orders" />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="h3" pr={3} py={3} fontWeight="bold">
          No recent orders &nbsp; <LinkBase href="/">Go Back</LinkBase>
        </Message>
      ) : (
        <>
          <TableContainerBase>
            <TableBase>
              <TableHeadBase>
                <TableRowHeaderBase color={theme.palette.primary.main}>
                  <TableCellBase align="center"></TableCellBase>
                  <TableCellBase align="left">CUSTOMER</TableCellBase>
                  <TableCellBase align="left">DATE</TableCellBase>
                  <TableCellBase align="center">ORDER NO</TableCellBase>
                  <TableCellBase align="center">AMOUNT</TableCellBase>
                  <TableCellBase align="center">PAID</TableCellBase>
                  <TableCellBase align="center">DELIVERED</TableCellBase>
                </TableRowHeaderBase>
              </TableHeadBase>
              <TableBody>
                {orders.response.map((order) => (
                  <Row
                    key={order._id}
                    row={order}
                    customer
                    content={
                      <OrderViewAccounts
                        order={order}
                        error={error}
                        user={user.user}
                        adminOrder
                      />
                    }
                  />
                ))}
              </TableBody>
            </TableBase>
          </TableContainerBase>
        </>
      )}
    </>
  )
}

export default AllOrdersScreen
