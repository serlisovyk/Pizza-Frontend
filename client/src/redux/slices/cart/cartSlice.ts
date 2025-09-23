import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartProduct } from '../../../types/types'
import {
  changeTotalPrice,
  deleteItemFromCart,
  loadCartFromLocalStorage,
  saveCartToLocalStorage,
  searchItemInCart,
} from '../../../utils/utils'

const initialState = loadCartFromLocalStorage()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, { payload }: PayloadAction<Omit<ICartProduct, 'count'>>) {
      const findItem = searchItemInCart(state, payload as ICartProduct)

      if (findItem) findItem.count++
      else state.items.push({ ...payload, count: 1 })

      changeTotalPrice(state)
      saveCartToLocalStorage(state)
    },

    minusItemInCart(state, { payload }: PayloadAction<ICartProduct>) {
      const findItem = searchItemInCart(state, payload)

      if (findItem) findItem.count--
      if (findItem?.count === 0) deleteItemFromCart(state, payload)

      changeTotalPrice(state)
      saveCartToLocalStorage(state)
    },

    removeItemFromCart(state, { payload }: PayloadAction<ICartProduct>) {
      deleteItemFromCart(state, payload)
      changeTotalPrice(state)
      saveCartToLocalStorage(state)
    },

    clearCart(state) {
      state.items = []
      state.totalPrice = 0
      saveCartToLocalStorage(state)
    },
  },
  selectors: {
    selectCartItems: (state) => state.items,
    selectCartTotalPrice: (state) => state.totalPrice,
    selectCartTotalCount: (state) =>
      state.items.reduce((sum, item) => sum + item.count, 0),
  },
})

export const { selectCartItems, selectCartTotalPrice, selectCartTotalCount } =
  cartSlice.selectors

export const { actions: cartActions } = cartSlice

export default cartSlice
