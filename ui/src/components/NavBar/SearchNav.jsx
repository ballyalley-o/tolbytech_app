/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Grid,
  Container,
  Box,
  Typography,
  FormControl,
  InputAdornment,
  IconButton,
  Button,
  Stack,
} from '@mui/material'
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  DrawerBase,
} from '../../themes/styles/nav-styled'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined'
import { Types } from '../../constants'

const SearchNav = () => {
  const { keyword: urlKeyword } = useParams()
  const [keyword, setKeyword] = useState(urlKeyword || '')
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const closeDrawer = () => {
    setIsOpen(false)
  }

  const handleClearSearch = () => {
    setKeyword('')
  }

  const handleInputChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      handleClearSearch()
      closeDrawer()
      navigate(`/tech/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  // useEffect(() => {
  //   if (keyword.length > 0) {
  //     document.addEventListener('mousedown', handleClearSearch)
  //   } else {
  //     document.removeEventListener('mousedown', handleClearSearch)
  //   }

  //   if (isOpen && keyword.length === 0) {
  //     document.addEventListener('mousedown', closeDrawer)
  //   } else {
  //     document.removeEventListener('mousedown', closeDrawer)
  //   }
  //   return () => {
  //     document.removeEventListener('mousedown', closeDrawer)
  //   }
  // }, [isOpen, keyword.length])

  return (
    <Search>
      <SearchIconWrapper
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
        sx={{ display: isOpen ? 'none' : 'block', padding: '0px' }}
      >
        <SearchOutlinedIcon />
      </SearchIconWrapper>
      <DrawerBase
        anchor="top"
        open={isOpen}
        onClose={closeDrawer || toggleDrawer}
        ModalProps={{
          disableEnforceFocus: true,
          disableRestoreFocus: true,
          disableAutoFocus: true,
          disablePortal: false,
          BackdropProps: {
            sx: {
              backgroundColor: 'transparent',
            },
          },
        }}
      >
        <Grid container>
          <Container
            maxWidth="md"
            sx={{
              marginTop: '1rem',
              padding: '5rem',
            }}
          >
            <Grid
              item
              lg={12}
              sx={{
                display: 'flex-end',
              }}
            >
              <FormControl onSubmit={handleSubmit} component="form">
                {keyword && (
                  <Box sx={{ marginLeft: '3rem' }}>
                    <Typography variant="body2">{Types.SEARCH}</Typography>
                  </Box>
                )}

                <Box sx={{ display: 'inline-flex' }}>
                  <Box sx={{ height: '3rem' }}>
                    <SearchOutlinedIcon />
                  </Box>
                  <Stack>
                    <StyledInputBase
                      placeholder={Types.SEARCH}
                      type="text"
                      name="q"
                      autoFocus={true}
                      showSearch={true}
                      allowClear={true}
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      endAdornment={
                        keyword && (
                          <InputAdornment position="end">
                            <IconButton edge="end" onClick={handleClearSearch}>
                              <BackspaceOutlinedIcon size="lg" />
                            </IconButton>
                          </InputAdornment>
                        )
                      }
                      sx={{ p: 2, width: '100%' }}
                    />
                  </Stack>
                  <Button
                    type="submit"
                    disabled={!keyword}
                    sx={{ display: !keyword && 'none' }}
                  >
                    Search
                  </Button>
                </Box>
              </FormControl>
            </Grid>
          </Container>
        </Grid>
      </DrawerBase>
    </Search>
  )
}

export default SearchNav
