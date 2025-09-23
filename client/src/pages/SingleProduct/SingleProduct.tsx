import { useParams } from 'react-router-dom'
import { skipToken } from '@reduxjs/toolkit/query'
import Loader from '../../components/Loader/Loader'
import Error from '../../components/Error/Error'
import { useGetOnePizzaQuery } from '../../redux/api/apiSlice'
import { typesNames } from '../../utils/constants'
import styles from './SingleProduct.module.scss'

export default function SingleProduct() {
  const { id } = useParams()

  const { data: OnePizzaData, isLoading } = useGetOnePizzaQuery(id ?? skipToken)

  if (!OnePizzaData) return <Error />

  if (isLoading) return <Loader />

  const { title, description, price, imageUrl, sizes, types } = OnePizzaData

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={`/${imageUrl}`} alt="Pizza" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.price}>Цена: {price} грн.</div>
        <div className={styles.selector}>
          <div>
            <h3 className={styles.subtitle}>Типы пиццы:</h3>
            <ul>
              {sizes.map((size) => (
                <li key={size} className={styles.size}>
                  {size} см.
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.subtitle}>Типы теста:</h3>
            <ul>
              {types.map((type) => (
                <li key={type} className={styles.type}>
                  {typesNames[type]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
