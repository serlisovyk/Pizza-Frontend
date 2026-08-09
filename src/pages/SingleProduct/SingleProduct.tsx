import { useParams } from 'react-router-dom'
import { skipToken } from '@reduxjs/toolkit/query'
import Loader from '../../components/Loader/Loader'
import Error from '../../components/Error/Error'
import { useGetOnePizzaQuery } from '../../redux/api/apiSlice'
import { typesNames } from '../../utils/constants'
import styles from './SingleProduct.module.scss'

export default function SingleProduct() {
  const { id } = useParams()
  const { data: onePizza, isLoading, isError } = useGetOnePizzaQuery(id ?? skipToken)

  if (isLoading) return <Loader />

  if (isError || !onePizza) return <Error />

  const { title, description, price, imageUrl, sizes, types } = onePizza

  return (
    <section className={styles.wrap}>
      <article className={styles.card}>
        <div className={styles.media}>
          <img
            src={`/${imageUrl}`}
            alt={title}
            loading="eager"
            width={260}
            height={260}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>

          <p className={styles.description}>{description}</p>

          <div className={styles.meta}>
            <div>
              <h3 className={styles.subtitle}>Типы пиццы</h3>
              <ul className={styles.pills}>
                {sizes.map((size) => (
                  <li key={size} className={styles.pill}>
                    {size} см
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={styles.subtitle}>Типы теста</h3>
              <ul className={styles.pills}>
                {types.map((type) => (
                  <li key={type} className={styles.pill}>
                    {typesNames[type]}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.price}>
              <span className={styles.priceValue}>{price}</span>
              <span className={styles.priceCurrency}>грн</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
