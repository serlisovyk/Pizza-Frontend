import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'
import { cartActions } from './slices/cart/cartSlice'
import { filterActions } from './slices/filter/filterSlice'
import type { AppDispatch, AppState } from './store'

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export function useCartActions() {
  const dispatch = useAppDispatch()

  return useMemo(() => {
    return bindActionCreators(cartActions, dispatch)
  }, [dispatch])
}

export function useFilterActions() {
  const dispatch = useAppDispatch()

  return useMemo(() => {
    return bindActionCreators(filterActions, dispatch)
  }, [dispatch])
}
