/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
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
import { ButtonBase } from '../../../themes/styles/default-styled'
import { useTheme } from '@mui/material/styles'
import { CLIENT, Snacks } from '../../../constants'
import { AdminHeading } from '../../../components/Heading'
import { toast } from 'react-toastify'
import Streamgraph from '../../../components/graphs/Steamgraph'
import Message from '../../../components/Message'
import Loader from '../../../components/Loader'
import InputViewField from '../../../components/Forms/InputViewField'
import MultiInputViewField from '../../../components/Forms/MultiInputViewField'
import InputUploadField from '../../../components/Forms/InputUploadField'
import SnackAlert from '../../../components/SnackAlert'
import { AntSwitch } from '../../../themes/styles/default-styled'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import BackButton from '../../../components/BackButton'

const EditUserScreenTable = ({ user }) => {
  // const { id: userId } = useParams()
  const [snackOpen, setSnackOpen] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const theme = useTheme()
  const navigate = useNavigate()
  const userId = user._id
  const { data, isLoading, refetch, error } = useGetUserDetailsQuery(user._id)
  const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation()

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
      await updateUser(updatedUser)
      toast.success(Snacks.UPDATED, { position: 'top-center' })
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
        <Divider />
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error?.data.message}</Message>
        ) : (
          <FormControl component="form" onSubmit={handleSubmit}>
            <FormGroup>
              <Grid
                container
                direction="column"
                gap={4}
                justifyContent="space-between"
              >
                <Grid item md={6}>
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
                  <Grid item mt={2}>
                    <Grid container>
                      <ButtonBase type="submit" fullWidth disable={refetch}>
                        UPDATE
                      </ButtonBase>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={6}>
                  <Streamgraph
                    width={800}
                    height={200}
                    backgroundColor={theme.palette.primary.main}
                    data={[
                      { date: '2011-10-01', value: 63.4 },
                      { date: '2011-10-02', value: 58.0 },
                      { date: '2011-10-03', value: 53.3 },
                      { date: '2011-10-04', value: 55.7 },
                      { date: '2011-10-05', value: 64.2 },
                      { date: '2011-10-06', value: 58.8 },
                    ]}
                  />
                </Grid>
              </Grid>
            </FormGroup>
          </FormControl>
        )}
      </Grid>
    </>
  )
}

EditUserScreenTable.propTypes = {
  user: PropTypes.object,
}

export default EditUserScreenTable
