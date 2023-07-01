/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  TableRow,
  IconButton,
  Typography,
  Chip,
  Box,
  TableCell,
  Table,
} from '@mui/material'
import {
  TableCellBase,
  TableHeadCellBase,
  CollapseBase,
} from '../themes/styles/table-styled'
import UserIcons from './Users/UserIcons'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { FaPaperPlane, FaTimes, FaCheck } from 'react-icons/fa'
import { CLIENT } from '../constants.js'

export default function RowUsers(props) {
  const { row, onClick, content, customer } = props
  const [open, setOpen] = useState(false)

  return (
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
        {/* {customer && (
              <TableHeadCellBase component="th" scope="row">
                <Typography variant="body1">{row?.user.name}</Typography>
              </TableHeadCellBase>
            )} */}
        <TableHeadCellBase component="th" scope="row" align="center">
          <Link to={`/users/${row._id}`} target="_blank">
            <Typography variant="caption">{row._id}</Typography>
          </Link>
        </TableHeadCellBase>

        <TableHeadCellBase align="center">
          <Typography variant="caption">{row.name}</Typography>
        </TableHeadCellBase>

        <TableHeadCellBase align="center">
          <Link to={`mailto:${row.email}`} target="_blank">
            <Chip label={row.email} clickable icon={<FaPaperPlane />}>
              <Typography variant="caption">{row.email}</Typography>
            </Chip>
          </Link>
        </TableHeadCellBase>

        <TableHeadCellBase align="center">
          {row.isAdmin ? <FaCheck color="green" /> : <FaTimes color="red" />}
        </TableHeadCellBase>

        <TableHeadCellBase align="center">
          <UserIcons row={row} />
        </TableHeadCellBase>
      </TableRow>
      <TableRow>
        <TableCellBase style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
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
  )
}

RowUsers.propTypes = {
  row: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    isAdmin: PropTypes.bool,
  }).isRequired,
  //   user: PropTypes.shape({
  //     _id: PropTypes.string,
  //     name: PropTypes.string,
  //     email: PropTypes.string,
  //   }),
  onClick: PropTypes.func,
  content: PropTypes.node,
  customer: PropTypes.bool,
}
