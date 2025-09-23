import Skeleton from '../PizzaBlock/Skeleton'
import PizzaBlock from '../PizzaBlock/PizzaBlock'
import Pagination from '../Pagination/Pagination'
import Error from '../Error/Error'
import {
  selectFilterCurrentCategory,
  selectFilterCurrentPage,
  selectFilterSearchValue,
  selectFilterSortProperty,
} from '../../redux/slices/filter/filterSlice'
import { useGetPizzasQuery } from '../../redux/api/apiSlice'
import { useAppSelector } from '../../redux/store.hooks'
import { IProduct } from '../../types/types'
import styles from './Content.module.scss'

export default function Content() {
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

  return (
    <>
      <div className={styles.items}>
        {isError ? (
          <Error />
        ) : isLoading ? (
          [...new Array(4)].map((_, i) => <Skeleton key={i} />)
        ) : !products?.length ? (
          <Error />
        ) : (
          products?.map((product: IProduct) => (
            <PizzaBlock key={product._id} {...product} />
          ))
        )}
      </div>
      <Pagination />
    </>
  )
}
