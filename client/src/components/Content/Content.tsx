import Skeleton from '../PizzaBlock/Skeleton'
import PizzaBlock from '../PizzaBlock/PizzaBlock'
import Pagination from '../Pagination/Pagination'
import Error from '../Error/Error'
import { usePizzasFromFilters } from '../../hooks/usePizzasFromFilters'
import { IProduct } from '../../types/types'
import styles from './Content.module.scss'

export default function Content() {
  const { products, isLoading, isError } = usePizzasFromFilters()

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
