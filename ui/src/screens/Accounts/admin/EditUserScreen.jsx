/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} from '../../../slices/user-slice'
import {
  FormControl,
  Button,
  Typography,
  FormGroup,
  Grid,
  Divider,
  Box,
} from '@mui/material'
import { ButtonBase } from '../../../themes/styles/default-styled'
import { FormBoxTitle } from '../../../themes/styles/auth-styled'
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

const EditUserScreen = () => {
  const { id: userId } = useParams()
  const [snackOpen, setSnackOpen] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const navigate = useNavigate()

  const {
    data: user,
    isLoading,
    refetch,
    error,
  } = useGetUserDetailsQuery(userId)

  const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation()

  //   const [uploadProductImage, { isLoading: loadingUpload }] =
  //     useUploadProductImageMutation()

  //   const handleUploadFile = async (e) => {
  //     const formData = new FormData()
  //     formData.append('image', e.target.files[0])

  //     try {
  //       const res = await uploadProductImage(formData).unwrap()
  //       setSnackOpen(res.message, 'success', 'success')
  //       handleHideDuration(3000)
  //       setImage(res.image)
  //     } catch (error) {
  //       setSnackOpen(error?.data?.message, 'error')
  //       handleHideDuration(3000)
  //     }
  //   }

  useEffect(() => {
    if (user) {
      setName(user.name)
      setEmail(user.email)
      setIsAdmin(user.isAdmin)
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
      const result = await updateUser(updatedUser)
      toast.success(Snacks.UPDATED, { position: 'top-center' })
      // handleHideDuration(3000)
      refetch()
      navigate(CLIENT.ADMIN_PRODUCTS_URL)
    } catch (error) {
      toast.error(error?.data?.message, { position: 'top-center' })
      //   handleHideDuration(3000)
    }

    // if (result.error) {
    //   setSnackOpen(result?.error?.data.message, 'error')
    //   handleHideDuration(3000)
    // } else {
    //   setSnackOpen('Product Updated', 'success', 'success')
    //   refetch()
    //   handleHideDuration(3000)
    //   navigate(CLIENT.ADMIN_PRODUCTS_URL)
    // }
  }

  const handleIsAdmin = () => {}

  const handleHideDuration = (duration) => {
    setTimeout(() => {
      setSnackOpen(null)
    }, duration)
  }
  return (
    <>
      <Helmet>
        <title>Admin | Edit User</title>
      </Helmet>
      <Link to={CLIENT.ADMIN_USERS_URL}>
        <Button>
          <KeyboardDoubleArrowLeftIcon />
          <Typography>Go Back</Typography>
        </Button>
      </Link>
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
      <Grid container direction="column">
        <AdminHeading title="Update User" />
        <Divider />

        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error?.message}</Message>
        ) : (
          <Grid item md={12} py={2}>
            <FormControl component="form" onSubmit={handleSubmit}>
              <FormGroup>
                <Grid container direction="row" justifyContent="center" gap={4}>
                  <Grid item lg={5}>
                    <Grid
                      container
                      gap={2}
                      direction="row"
                      justifyContent="center"
                    >
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
                          make Admin
                        </Typography>
                        <AntSwitch
                          color="pink"
                          checked={isAdmin}
                          onChange={(e) => setIsAdmin(e.target.checked)}
                          inputProps={{ 'aria-label': 'controlled' }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item lg={6}>
                    <Grid container direction="row">
                      <Grid item md={12}>
                        <Typography variant="h2"></Typography>
                      </Grid>
                      <Grid item md={12}>
                        <Grid container justifyContent="flex-end">
                          <ButtonBase type="submit" fullWidth>
                            UPDATE
                          </ButtonBase>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </FormGroup>
            </FormControl>
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default EditUserScreen
