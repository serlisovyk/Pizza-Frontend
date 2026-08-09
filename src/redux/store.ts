import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filter/filterSlice'
import cartSlice from './slices/cart/cartSlice'
import { apiSlice } from './api/apiSlice'

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
