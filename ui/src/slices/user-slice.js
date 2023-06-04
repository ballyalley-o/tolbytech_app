/* eslint-disable no-unused-vars */
import { USERS_URL } from '../constants'
import { apiSlice } from './api-slice'

export const usersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: USERS_URL / auth,
        method: 'POST',
        body: data,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Product'],
    }),
  }),
})

export const { useLoginMutation } = usersSlice
