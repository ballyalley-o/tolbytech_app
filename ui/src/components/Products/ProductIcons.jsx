/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ConfirmDialog from '../ConfirmDialog'
import { IconButton, Button } from '@mui/material'
import { ButtonBase } from '../../themes/styles/default-styled'
import theme from '../../themes/theme'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import DeleteIcon from '@mui/icons-material/Delete'

function ProductIcons({ row, handleEdit, handleDelete: handleRemove }) {
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false)

  const handleCloseConfirm = () => {
    setOpenConfirmDialog(false)
    // toggleCancel();
  }
  const handleDelete = () => {
    setOpenConfirmDialog(true)
  }
  return (
    <>
      <IconButton
        aria-label="edit"
        size="small"
        // touchRippleRef={handleEdit}
        href={`/admin/products/${row._id}/edit`}
        onClick={() => {
          handleEdit()
        }}
      >
        <DriveFileRenameOutlineIcon />
      </IconButton>

      <IconButton
        aria-label="edit"
        size="small"
        onClick={() => {
          handleDelete()
          // handleRemove(row._id)
        }}
      >
        <DeleteIcon color="error" />
      </IconButton>
      <ConfirmDialog
        title="Confirm Delete"
        open={openConfirmDialog}
        onClose={handleCloseConfirm}
        content={`Are you sure you want to delete ${row.name} ?`}
        action={
          <ButtonBase
            onClick={() => {
              handleRemove(row._id)
              handleCloseConfirm()
            }}
            sx={{
              backgroundColor: theme.palette.error.main,
            }}
          >
            Delete
          </ButtonBase>
        }
      />
    </>
  )
}

ProductIcons.propTypes = {
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  handleCreate: PropTypes.func,
  handleClose: PropTypes.func,
  row: PropTypes.object,
}

export default ProductIcons
