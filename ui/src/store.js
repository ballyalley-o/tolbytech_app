import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/api-slice'
// import { CONFIG } from './config-global'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export default store
