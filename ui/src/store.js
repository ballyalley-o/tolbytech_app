import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/api-slice'
import cartSliceReducer from './slices/cart-slice'
import authReducer from './slices/auth-slice'
import { CONFIG } from './config-global'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: CONFIG.DEV_TOOLS,
})

export default store
