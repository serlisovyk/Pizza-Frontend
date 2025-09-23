import { memo } from 'react'
import styles from './Categories.module.scss'
import { useGetCategoriesQuery } from '../../redux/api/apiSlice'
import { useAppSelector, useFilterActions } from '../../redux/store.hooks'
import { selectFilterCurrentCategory } from '../../redux/slices/filter/filterSlice'
import Loader from '../Loader/Loader'

export default memo(function Categories() {
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
})
