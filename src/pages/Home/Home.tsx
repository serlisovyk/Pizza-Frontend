import Categories from '../../components/Categories/Categories'
import Sort from '../../components/Sort/Sort'
import Content from '../../components/Content/Content'
import {
  selectFilterCurrentCategory,
  selectFilterSearchValue,
} from '../../redux/slices/filter/filterSlice'
import { useAppSelector } from '../../redux/store.hooks'
import { generateTitle } from '../../utils/utils'
import styles from './Home.module.scss'

export default function Home() {
  const searchValue = useAppSelector(selectFilterSearchValue)
  const currentCategory = useAppSelector(selectFilterCurrentCategory)

  const title = generateTitle(searchValue, currentCategory)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <Content />
    </div>
  )
}
