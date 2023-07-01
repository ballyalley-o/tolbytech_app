/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from '../../slices/user-slice'
import ConfirmDialog from '../ConfirmDialog'
import { IconButton, Button } from '@mui/material'
import { ButtonBase } from '../../themes/styles/default-styled'
import theme from '../../themes/theme'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import SnackAlert from '../SnackAlert'
import { toast } from 'react-toastify'
import DeleteIcon from '@mui/icons-material/Delete'
import Loader from '../Loader'

function UserIcons({ row, handleEdit, handleDelete: handleRemove }) {
  const { data: users, isLoading, error, refetch } = useGetUsersQuery()
  const [snackOpen, setSnackOpen] = useState(null)
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')
  const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation()

  const handleCloseConfirm = () => {
    setOpenConfirmDialog(false)
  }

  const handleOpenConfirm = () => {
    setDialogTitle('Confirm Delete')
    setDialogContent(`Are you sure you want to delete ${row.name} ?`)
    setOpenConfirmDialog(true)
  }

  const handleDelete = async (id) => {
    try {
      await deleteUser(id)
      setSnackOpen('Product Deleted', 'success')
      refetch()
    } catch (error) {
      setSnackOpen(error?.response.message, 'error')
      handleHideDuration(3000)
    }
  }

  const handleHideDuration = (duration) => {
    setTimeout(() => {
      setSnackOpen(null)
    }, duration)
  }

  return (
    <>
      <IconButton
        aria-label="edit"
        size="small"
        // touchRippleRef={handleEdit}
        href={`/admin/users/${row._id}/edit`}
        onClick={() => {
          handleEdit()
        }}
      >
        <DriveFileRenameOutlineIcon />
      </IconButton>
      {snackOpen && (
        <SnackAlert
          open={snackOpen}
          onClose={() => setSnackOpen(null)}
          message={snackOpen}
          transition="left"
          horizontal="right"
          vertical="top"
          closeOnClick={false}
          duration={2000}
        >
          {snackOpen}
        </SnackAlert>
      )}
      <IconButton aria-label="edit" size="small" onClick={handleOpenConfirm}>
        <DeleteIcon color="error" />
      </IconButton>
      <ConfirmDialog
        title={dialogTitle}
        open={openConfirmDialog}
        onClose={handleCloseConfirm}
        content={`Are you sure you want to delete ${row.name} ?`}
        action={
          <ButtonBase
            onClick={() => {
              handleDelete(row._id)
              handleCloseConfirm()
            }}
            disabled={loadingDelete}
            sx={{
              backgroundColor: theme.palette.error.main,
            }}
          >
            {loadingDelete ? (
              <Loader
                type="ThreeDots"
                color={theme.palette.primary.main}
                height={10}
                width={10}
              />
            ) : (
              'Delete'
            )}
          </ButtonBase>
        }
      />
    </>
  )
}

UserIcons.propTypes = {
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  handleCreate: PropTypes.func,
  handleClose: PropTypes.func,
  row: PropTypes.object,
}

export default UserIcons
