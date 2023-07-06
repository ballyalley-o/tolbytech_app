/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Meta from '../../../components/Meta/Meta'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} from '../../../slices/user-slice'
import {
  FormControl,
  Typography,
  FormGroup,
  Grid,
  Divider,
  Box,
} from '@mui/material'
import UsersEditSqueeze from '../../../components/Squeeze/UsersEditSqueeze'
import { ButtonBase } from '../../../themes/styles/default-styled'
import { useTheme } from '@mui/material/styles'
import { CLIENT, Snacks } from '../../../constants'
import { AdminHeading } from '../../../components/Heading'
import { toast } from 'react-toastify'
import Message from '../../../components/Message'
import Loader from '../../../components/Loader'
import InputViewField from '../../../components/Forms/InputViewField'
import MultiInputViewField from '../../../components/Forms/MultiInputViewField'
import InputUploadField from '../../../components/Forms/InputUploadField'
import SnackAlert from '../../../components/SnackAlert'
import { AntSwitch } from '../../../themes/styles/default-styled'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import BackButton from '../../../components/BackButton'

const EditUserScreen = () => {
  const { id: userId } = useParams()
  const [snackOpen, setSnackOpen] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const theme = useTheme()
  const navigate = useNavigate()

  const {
    data: user,
    isLoading,
    refetch,
    error,
  } = useGetUserDetailsQuery(userId)
  const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation()

  useEffect(() => {
    if (user) {
      setName(user.response.name)
      setEmail(user.response.email)
      setIsAdmin(user.response.isAdmin)
    }
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const updatedUser = {
        userId,
        name,
        email,
        isAdmin,
      }
      await updateUser(updatedUser)
      toast.success(Snacks.UPDATED, { position: 'top-center' })
      // handleHideDuration(3000)
      refetch()
      navigate(CLIENT.ADMIN_USERS_URL)
    } catch (error) {
      toast.error(error?.data?.message, { position: 'top-center' })
      //   handleHideDuration(3000)
    }
  }

  const handleIsAdmin = () => {}

  const handleHideDuration = (duration) => {
    setTimeout(() => {
      setSnackOpen(null)
    }, duration)
  }
  return (
    <>
      <Meta title={`Admin | Edit ${user?.response.name}`} />
      <BackButton to={CLIENT.ADMIN_USERS_URL} />
      {snackOpen && (
        <SnackAlert
          open={snackOpen}
          severity={snackOpen?.severity}
          onClose={() => setSnackOpen(null)}
          message={snackOpen}
          transition="left"
          vertical="top"
          duration={2000}
          horizontal="right"
        >
          {snackOpen}
        </SnackAlert>
      )}
      <Grid container direction="row" justifyContent="center">
        <AdminHeading title="Update User" />
        <Divider />
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error?.message}</Message>
        ) : (
          <FormControl component="form" onSubmit={handleSubmit}>
            <FormGroup>
              <Grid
                container
                direction="column"
                gap={4}
                justifyContent="center"
              >
                <Grid item md={12}>
                  <InputViewField
                    id="name"
                    label="Name"
                    title="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <InputViewField
                    id="email"
                    type="email"
                    label="Email"
                    title="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: 'gray', display: 'inline-flex' }}
                    >
                      Admin
                    </Typography>
                    <AntSwitch
                      color="secondary"
                      checked={isAdmin}
                      onChange={(e) => setIsAdmin(e.target.checked)}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </Box>
                </Grid>

                {/* <Divider orientation="vertical" flexItem /> */}

                <Grid item md={12}>
                  <Grid container>
                    <ButtonBase type="submit" fullWidth>
                      UPDATE
                    </ButtonBase>
                  </Grid>
                </Grid>
              </Grid>
            </FormGroup>
          </FormControl>
        )}
        <Grid item md={12}>
          {/* <UsersEditSqueeze /> */}
        </Grid>
      </Grid>
    </>
  )
}

export default EditUserScreen
