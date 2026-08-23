import Loader from '../Loader/Loader'
import { useGetCategoriesQuery } from '../../redux/api/apiSlice'
import { selectFilterCurrentCategory } from '../../redux/slices/filter/filterSlice'
import { useAppSelector, useFilterActions } from '../../redux/store.hooks'
import styles from './Categories.module.scss'

export default function Categories() {
  const { setActiveCategory } = useFilterActions()

  const { data: categories, isLoading } = useGetCategoriesQuery()

  const currentCategory = useAppSelector(selectFilterCurrentCategory)

  return (
    <div className={styles.categories}>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {categories?.map((category) => (
            <li
              key={category._id}
              onClick={() => setActiveCategory(category.name)}
              className={currentCategory === category.name ? 'categoriesActive' : ''}
            >
              {category.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
