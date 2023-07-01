/* eslint-disable no-unused-vars */
import { AUTH_URL, ACCOUNT_URL, USERS_URL } from '../constants'
import { apiSlice } from './api-slice'

export const usersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: AUTH_URL + '/login',
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: AUTH_URL + '/logout',
        method: 'POST',
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: AUTH_URL + '/register',
        method: 'POST',
        body: data,
      }),
    }),
    account: builder.mutation({
      query: (data) => ({
        url: ACCOUNT_URL,
        method: 'PUT',
        body: data,
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: USERS_URL,
      }),
      providesTags: ['Users'],
      keepUnusedDataFor: 5,
    }),
    user: builder.query({
      query: (id) => ({
        url: USERS_URL + '/' + id,
      }),
    }),
    getUserDetails: builder.query({
      query: (userId) => ({
        url: USERS_URL + '/' + userId,
      }),
      keepUnusedDataFor: 5,
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: USERS_URL + '/' + data.userId,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: USERS_URL + '/' + userId,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useAccountMutation,
  useGetUsersQuery,
  useUserQuery,
  useGetUserDetailsQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersSlice
