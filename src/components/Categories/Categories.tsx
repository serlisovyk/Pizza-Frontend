import Skeleton from './Skeleton'
import { useGetCategoriesQuery } from '../../redux/api'
import { selectFilterCurrentCategory } from '../../redux/slices/filter'
import { useAppSelector, useFilterActions } from '../../redux/store.hooks'
import { ALL_CATEGORY } from '../../constants'
import styles from './Categories.module.scss'

export default function Categories() {
  const { setActiveCategory } = useFilterActions()

  const { data: categories, isLoading } = useGetCategoriesQuery()

  const currentCategory = useAppSelector(selectFilterCurrentCategory)

  const categoriesList = [ALL_CATEGORY, ...(categories ?? [])]

  return (
    <nav className={styles.categories} aria-label="Категории пицц">
      {isLoading ? (
        <Skeleton />
      ) : (
        <ul>
          {categoriesList.map((category) => (
            <li key={category._id}>
              <button
                type="button"
                onClick={() => setActiveCategory(category.name)}
                className={currentCategory === category.name ? styles.active : ''}
                aria-pressed={currentCategory === category.name}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
