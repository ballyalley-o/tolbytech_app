/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Paper,
  Badge,
  Grid,
} from '@mui/material'
import {
  TableContainerBase,
  TableRowHeader,
  TableBase,
  TableHeadBase,
  TableHeadCellBase,
  TableCellBase,
  CollapseBase,
} from '../../themes/styles/table-styled.js'
import {
  useGetMyOrdersQuery,
  useGetOrderDetailsQuery,
} from '../../slices/order-slice.js'
import { useUserQuery } from '../../slices/user-slice.js'
import OrderViewAccounts from './OrderViewAccounts.jsx'
import { FcHighPriority } from 'react-icons/fc'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function createData(id, date, total, paid, delivered) {
  return {
    id,
    date,
    total,
    paid,
    delivered,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  }
}

function Row(props) {
  const { row, user } = props
  const [open, setOpen] = useState(false)

  return (
    <>
      {row || user === null ? (
        <>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCellBase>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCellBase>
            <TableHeadCellBase component="th" scope="row">
              <Typography variant="caption">
                {row.createdAt?.substring(0, 10)}
              </Typography>
            </TableHeadCellBase>
            <TableHeadCellBase>
              <Typography variant="body1">{row._id}</Typography>
            </TableHeadCellBase>
            <TableHeadCellBase align="center">
              NZ$ {row.totalPrice}
            </TableHeadCellBase>
            <TableHeadCellBase align="center">
              {row.isPaid ? (
                <Typography variant="caption">
                  {row.paidAt.substring(0, 10)}
                </Typography>
              ) : (
                <Badge badgeContent={<FcHighPriority size={15} />}></Badge>
              )}
            </TableHeadCellBase>
            <TableHeadCellBase align="center">
              {row.isDelivered ? (
                row.deliveredAt.substring(0, 10)
              ) : (
                <Badge badgeContent={<FcHighPriority size={15} />}></Badge>
              )}
            </TableHeadCellBase>
          </TableRow>
          <TableRow>
            <TableCellBase
              style={{ paddingBottom: 0, paddingTop: 0 }}
              colSpan={6}
            >
              <CollapseBase in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Table size="small" aria-label="purchases">
                    <TableHeadCellBase component="th" scope="row">
                      <TableRow>
                        <TableCell>
                          <OrderViewAccounts order={row} user={user} />
                        </TableCell>
                      </TableRow>
                    </TableHeadCellBase>
                  </Table>
                </Box>
              </CollapseBase>
            </TableCellBase>
          </TableRow>
        </>
      ) : (
        <Typography variant="body1">No Orders History</Typography>
      )}
    </>
  )
}

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
            <Row key={order._id} row={order} user={user} />
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

Row.propTypes = {
  row: PropTypes.shape({
    _id: PropTypes.string,
    user: PropTypes.string,
    createdAt: PropTypes.string,
    totalPrice: PropTypes.number,
    isPaid: PropTypes.boolean,
    paidAt: PropTypes.date,
    isDelivered: PropTypes.boolean,
    deliveredAt: PropTypes.date,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
}
