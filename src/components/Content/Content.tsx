import Skeleton from '../PizzaCard/Skeleton'
import PizzaCard from '../PizzaCard/PizzaCard'
import Pagination from '../Pagination/Pagination'
import Error from '../Error/Error'
import { usePizzasFromFilters } from '../../hooks/usePizzasFromFilters'
import type { IProduct } from '../../types/types'
import styles from './Content.module.scss'

const PRODUCT_PAGE_LIMIT = 4

export default function Content() {
  const { products, currentPage, isLoading, isError } = usePizzasFromFilters()

  const shouldShowPagination =
    !!products?.length && (products.length === PRODUCT_PAGE_LIMIT || currentPage > 1)

  return (
    <>
      <div className={styles.items}>
        {isError ? (
          <Error />
        ) : isLoading ? (
          [...new Array(PRODUCT_PAGE_LIMIT)].map((_, i) => <Skeleton key={i} />)
        ) : !products?.length ? (
          <Error />
        ) : (
          products?.map((product: IProduct) => (
            <PizzaCard key={product._id} {...product} />
          ))
        )}
      </div>
      {shouldShowPagination && <Pagination />}
    </>
  )
}
