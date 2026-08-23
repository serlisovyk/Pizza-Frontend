import { selectFilterCurrentPage } from '../../redux/slices/filter'
import { useAppSelector, useFilterActions } from '../../redux/store.hooks'
import styles from './Pagination.module.scss'

const PAGE_COUNT = 3

export default function Pagination() {
  const { setCurrentPage } = useFilterActions()

  const currentPage = useAppSelector(selectFilterCurrentPage)

  const pages = Array.from({ length: PAGE_COUNT }, (_, index) => index + 1)

  const handleUpdatePage = (page: number) => {
    if (page < 1 || page > PAGE_COUNT || page === currentPage) return

    setCurrentPage(page)
  }

  return (
    <nav className={styles.wrapper} aria-label="Пагинация товаров">
      <button
        className={styles.control}
        type="button"
        onClick={() => handleUpdatePage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Предыдущая страница"
      >
        &lt;
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? styles.active : styles.page}
          type="button"
          onClick={() => handleUpdatePage(page)}
          aria-current={page === currentPage ? 'page' : undefined}
          aria-label={`Страница ${page}`}
        >
          {page}
        </button>
      ))}

      <button
        className={styles.control}
        type="button"
        onClick={() => handleUpdatePage(currentPage + 1)}
        disabled={currentPage === PAGE_COUNT}
        aria-label="Следующая страница"
      >
        &gt;
      </button>
    </nav>
  )
}
