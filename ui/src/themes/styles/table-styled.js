/* eslint-disable no-unused-vars */
import {
  Table,
  TableRow,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  Collapse,
} from '@mui/material'
import { styled } from '@mui/material/styles'

export const TableContainerBase = styled(TableContainer)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: '1px solid #C0C0C0',
  boxShadow: 'none',
  '& .MuiPaper-root': {
    border: '1px solid #C0C0C0',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
}))

export const TableRowHeader = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.pink.main,
  padding: '2rem',
  color: theme.palette.primary.light,
  fontWeight: 'bold',
  '& > *': {
    color: theme.palette.primary.light,
    fontWeight: 'bold',
  },
}))

// export const TableRowBase = styled(TableRow)(({ theme }) => ({
//   boxShadow: 'none',
//   backgroundColor: 'transparent',
//   padding: '2rem',
//   '& > *': {
//     borderBottom: 'unset',
//     boxShadow: 'none',
//     backgroundColor: 'transparent',
//     padding: '2rem',
//   },
// }))

export const TableCellBaseHistory = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.light,
}))

export const TableRowHeaderBase = styled(TableRow)(({ theme, color }) => ({
  backgroundColor: color,
  padding: '2rem',
  color: theme.palette.primary.light,
  fontWeight: 'bold',
}))

export const TableHeadCellBaseID = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1rem',
  backgroundColor: 'transparent',
  color: theme.palette.gray.main,
}))

export const TableBase = styled(Table)(({ theme }) => ({
  '& .MuiTableCell-root': {
    padding: '1rem',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
}))

export const TableHeadBase = styled(TableHead)(({ theme }) => ({
  padding: '2rem',
  fontWeight: 'bold',
  '& .MuiTableCell-root': {
    padding: '1rem',
    boxShadow: 'none',
  },
}))

export const TableBodyBase = styled(TableBody)(({ theme }) => ({
  '& .MuiTableCell-root': {
    padding: '1rem',
    backgroundColor: 'transparent',
  },
}))

export const TableHeadCellBase = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1rem',
  backgroundColor: 'transparent',
}))

export const TableCellBase = styled(TableCell)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontWeight: 'bold',
  fontSize: '1rem',
  backgroundColor: 'transparent',
}))

export const CollapseBase = styled(Collapse)(({ theme }) => ({
  '& .MuiTableCell-root': {
    padding: '1rem',
    backgroundColor: 'transparent',
  },
}))
