import {
  selectFilterSearchValue,
  selectFilterSortProperty,
  selectFilterCurrentPage,
  selectFilterCurrentCategory,
} from '../redux/slices/filter/filterSlice'
import { useGetPizzasQuery } from '../redux/api/apiSlice'
import { useAppSelector } from '../redux/store.hooks'

export function usePizzasFromFilters() {
  const searchValue = useAppSelector(selectFilterSearchValue)
  const sortProperty = useAppSelector(selectFilterSortProperty)
  const currentPage = useAppSelector(selectFilterCurrentPage)
  const currentCategory = useAppSelector(selectFilterCurrentCategory)

  const {
    data: products,
    isLoading,
    isError,
  } = useGetPizzasQuery({
    currentCategory,
    searchValue,
    currentPage,
    sortProperty,
  })

  return { products, currentPage, isLoading, isError }
}
