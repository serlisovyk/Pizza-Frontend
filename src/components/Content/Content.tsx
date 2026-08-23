import PizzaCard, { PizzaCardSkeleton } from '../PizzaCard'
import Pagination from '../Pagination'
import Error from '../Error'
import Empty from '../Empty'
import { usePizzasFromFilters } from '../../hooks/usePizzasFromFilters'
import type { IProduct } from '../../types'
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
          <div className={styles.state}>
            <Error />
          </div>
        ) : isLoading ? (
          [...new Array(PRODUCT_PAGE_LIMIT)].map((_, i) => (
            <PizzaCardSkeleton key={i} />
          ))
        ) : !products?.length ? (
          <div className={styles.state}>
            <Empty />
          </div>
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
