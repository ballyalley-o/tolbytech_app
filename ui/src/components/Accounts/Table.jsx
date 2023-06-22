/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Box, TableBody, Typography, Paper, Grid } from '@mui/material'
import {
  TableContainerBase,
  TableRowHeader,
  TableBase,
  TableHeadBase,
  TableCellBase,
} from '../../themes/styles/table-styled.js'
import { useGetMyOrdersQuery } from '../../slices/order-slice.js'
import Row from '../Row.jsx'
import OrderViewAccounts from './OrderViewAccounts.jsx'

export default function CollapsibleTable({ orders, user }) {
  orders?.response?.map((order) => ({
    _id: order._id,
    user: order.user,
    createdAt: order.createdAt,
    totalPrice: order.totalPrice,
    isPaid: order.isPaid,
    paidAt: order.paidAt,
    isDelivered: order.isDelivered,
    deliveredAt: order.deliveredAt,
    history: order.orderItems,
  }))

  const { id } = useParams()
  const User = orders.response.find((payer) => payer.id === id)
  const { data: userOrders, error } = useGetMyOrdersQuery(User?.user)
  const userId = userOrders?.response?.map((order) => order.user)

  return User ? (
    <TableContainerBase component={Paper}>
      <TableBase aria-label="collapsible table">
        <TableHeadBase>
          <TableRowHeader>
            <TableCellBase></TableCellBase>
            <TableCellBase>Date</TableCellBase>
            <TableCellBase>Order no:</TableCellBase>
            <TableCellBase align="center">Amount (NZ$)</TableCellBase>
            <TableCellBase align="center">Paid</TableCellBase>
            <TableCellBase align="center">Delivered</TableCellBase>
          </TableRowHeader>
        </TableHeadBase>
        <TableBody>
          {orders.response.map((order) => (
            <Row
              key={order._id}
              row={order}
              user={user}
              content={<OrderViewAccounts order={order} user={user} />}
            />
          ))}
        </TableBody>
      </TableBase>
    </TableContainerBase>
  ) : (
    <Grid container textAlign="center" direction="column">
      <Grid item md={12}></Grid>
      <Grid item md={12}>
        <Box>
          <Typography variant="h4" fontWeight="bold" color="gray.main">
            No Orders History
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

CollapsibleTable.propTypes = {
  error: PropTypes.string,
  user: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      createdAt: PropTypes.string,
      totalPrice: PropTypes.number,
      isPaid: PropTypes.boolean,
      paidAt: PropTypes.date,
      isDelivered: PropTypes.boolean,
    })
  ).isRequired,
}
