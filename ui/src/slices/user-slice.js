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
    // get user by id
    user: builder.query({
      query: (id) => ({
        url: USERS_URL + '/' + id,
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useAccountMutation,
  useUserQuery,
} = usersSlice
