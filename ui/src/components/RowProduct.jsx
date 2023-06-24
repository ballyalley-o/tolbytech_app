/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  TableRow,
  IconButton,
  Typography,
  Box,
  TableCell,
  Table,
} from '@mui/material'
import {
  TableCellBase,
  TableHeadCellBase,
  CollapseBase,
} from '../themes/styles/table-styled'
import ProductIcons from './Products/ProductIcons'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default function RowProduct(props) {
  const { row, user, onClick, content, customer } = props
  const [open, setOpen] = useState(false)
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false)

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
              <Link to={`/products/${row._id}`} target="_blank">
                <Typography variant="caption">{row._id}</Typography>
              </Link>
            </TableHeadCellBase>
            <TableHeadCellBase>
              <Typography variant="body1">{row.name}</Typography>
            </TableHeadCellBase>
            <TableHeadCellBase align="center">
              NZ$ {row.price}
            </TableHeadCellBase>
            <TableHeadCellBase align="center">
              <Typography variant="caption">{row.category}</Typography>
            </TableHeadCellBase>
            <TableHeadCellBase align="center">
              <Typography variant="caption">{row.brand}</Typography>
            </TableHeadCellBase>
            <TableHeadCellBase align="center">
              <ProductIcons row={row} />
            </TableHeadCellBase>
          </TableRow>

          <TableRow>
            <TableCellBase
              style={{ paddingBottom: 0, paddingTop: 0 }}
              colSpan={8}
            >
              <CollapseBase in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Table size="small" aria-label="purchases">
                    <TableHeadCellBase component="th" scope="column">
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

RowProduct.propTypes = {
  row: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    brand: PropTypes.string,
    category: PropTypes.string,
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
