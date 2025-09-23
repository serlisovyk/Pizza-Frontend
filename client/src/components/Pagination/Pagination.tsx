import ReactPaginate from 'react-paginate'
import { selectFilterCurrentPage } from '../../redux/slices/filter/filterSlice'
import { useAppSelector, useFilterActions } from '../../redux/store.hooks'
import { IHandleUpdatePageProps } from '../../types/types'
import styles from './Pagination.module.scss'

export default function Pagination() {
  const { setCurrentPage } = useFilterActions()

  const currentPage = useAppSelector(selectFilterCurrentPage)

  const handleUpdatePage = ({ selected }: IHandleUpdatePageProps) =>
    setCurrentPage(selected + 1)

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={handleUpdatePage}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  )
}
