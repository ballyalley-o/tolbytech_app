/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useGetUsersQuery } from '../../../slices/user-slice'
import { Grid, Typography, TableBody } from '@mui/material'
import {
  TableBase,
  TableHeadBase,
  TableRowHeaderBase,
  TableCellBase,
  TableContainerBase,
} from '../../../themes/styles/table-styled'
import { useTheme } from '@mui/material/styles'
import { LinkBase } from '../../../themes/styles/default-styled'
import RowUsers from '../../../components/RowUsers'
import OrderViewAccounts from '../../../components/Accounts/OrderViewAccounts'
import Message from '../../../components/Message'
import Loader from '../../../components/Loader'
import { AdminHeading } from '../../../components/Heading'

const AllUsersScreen = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery()
  const [loadingDelete, setLoadingDelete] = useState(false)
  const theme = useTheme()
  //   const { id } = useParams()
  //   const user = orders?.response.find((payer) => payer.id === id)
  //   const { data: userOrders } = useGetMyOrdersQuery(user?.user)
  //   const userId = userOrders?.response?.map((order) => order.users

  return (
    <>
      <Helmet>
        <title>Admin | Users</title>
      </Helmet>
      <AdminHeading title="Users" />
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="h3" pr={3} py={3} fontWeight="bold">
          {error?.message}&nbsp; <LinkBase href="/">Go Back</LinkBase>
        </Message>
      ) : (
        <>
          <TableContainerBase>
            <TableBase>
              <TableHeadBase>
                <TableRowHeaderBase color={theme.palette.primary.main}>
                  <TableCellBase align="center"></TableCellBase>
                  <TableCellBase align="center">ID</TableCellBase>
                  <TableCellBase align="center">NAME</TableCellBase>
                  <TableCellBase align="center">EMAIL</TableCellBase>
                  <TableCellBase align="center">ADMIN</TableCellBase>
                  <TableCellBase align="center"></TableCellBase>
                </TableRowHeaderBase>
              </TableHeadBase>
              <TableBody>
                {users.response.map((user) => (
                  <RowUsers
                    key={user._id}
                    row={user}

                    // content={
                    //   <OrderViewAccounts
                    //     order={user}
                    //     error={error}
                    //     // user={user.user}
                    //     adminOrder
                    //   />
                    // }
                  />
                ))}
              </TableBody>
            </TableBase>
          </TableContainerBase>
        </>
      )}
    </>
  )
}

export default AllUsersScreen
