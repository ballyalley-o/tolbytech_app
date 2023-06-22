/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  TableRow,
  IconButton,
  Typography,
  Badge,
  Box,
  TableCell,
  Table,
} from '@mui/material'
import {
  TableCellBase,
  TableHeadCellBase,
  CollapseBase,
} from '../themes/styles/table-styled'
import { FcHighPriority } from 'react-icons/fc'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { CLIENT } from '../constants.js'

export default function Row(props) {
  const { row, user, onClick, content, customer } = props
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
            {customer && (
              <TableHeadCellBase component="th" scope="row">
                <Typography variant="body1">{row?.user.name}</Typography>
              </TableHeadCellBase>
            )}
            <TableHeadCellBase component="th" scope="row">
              <Typography variant="caption">
                {row.createdAt?.substring(0, 10)}
              </Typography>
            </TableHeadCellBase>
            <TableHeadCellBase>
              <Link to={`/orders/${row._id}`} target="_blank">
                <Typography variant="body1">{row._id}</Typography>
              </Link>
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
                        <TableCell>{content}</TableCell>
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
  user: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  onClick: PropTypes.func,
  content: PropTypes.node,
  customer: PropTypes.bool,
}
