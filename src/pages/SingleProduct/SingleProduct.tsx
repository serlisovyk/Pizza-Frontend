import { useParams } from 'react-router-dom'
import { skipToken } from '@reduxjs/toolkit/query'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import { useGetOnePizzaQuery } from '../../redux/api'
import { PIZZA_TYPE_NAMES } from '../../constants'
import styles from './SingleProduct.module.scss'

export default function SingleProduct() {
  const { id } = useParams()
  const { data: onePizza, isLoading, isError } = useGetOnePizzaQuery(id ?? skipToken)

  if (isLoading) return <Loader label="Загрузка пиццы..." />

  if (isError || !onePizza) {
    return (
      <Error
        title="Пицца не найдена"
        description="Не удалось получить данные этой пиццы. Попробуйте открыть каталог и выбрать её снова."
      />
    )
  }

  const { title, description, price, imageUrl, sizes, types, category, rating } =
    onePizza

  return (
    <section className={styles.wrapper}>
      <article className={styles.card}>
        <div className={styles.media}>
          <img
            className={styles.image}
            src={`/${imageUrl}`}
            alt={title}
            loading="eager"
            decoding="async"
            width={260}
            height={260}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.heading}>
            <span className={styles.category}>{category}</span>
            <h1 className={styles.title}>{title}</h1>
          </div>

          <p className={styles.description}>{description}</p>

          <dl className={styles.summary}>
            <div>
              <dt>Цена</dt>
              <dd>{price} грн</dd>
            </div>
            <div>
              <dt>Рейтинг</dt>
              <dd>{rating}</dd>
            </div>
          </dl>

          <div className={styles.meta}>
            <section className={styles.optionGroup}>
              <h3 className={styles.subtitle}>Типы пиццы</h3>
              <ul className={styles.pills}>
                {sizes.map((size) => (
                  <li key={size} className={styles.pill}>
                    {size} см
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.optionGroup}>
              <h3 className={styles.subtitle}>Типы теста</h3>
              <ul className={styles.pills}>
                {types.map((type) => (
                  <li key={type} className={styles.pill}>
                    {PIZZA_TYPE_NAMES[type]}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
    </section>
  )
}
