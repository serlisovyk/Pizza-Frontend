import Categories from '../../components/Categories/Categories'
import Sort from '../../components/Sort/Sort'
import Content from '../../components/Content/Content'
import { selectFilterSearchValue } from '../../redux/slices/filter/filterSlice'
import { useAppSelector } from '../../redux/store.hooks'
import styles from './Home.module.scss'

export default function Home() {
  const searchValue = useAppSelector(selectFilterSearchValue)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.title}>
        {searchValue ? `Поиск по запросу: ${searchValue}` : 'Все пиццы'}
      </h2>
      <Content />
    </div>
  )
}
