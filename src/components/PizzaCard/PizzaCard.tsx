import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartActions } from '../../redux/store.hooks'
import { PIZZA_TYPE_NAMES } from '../../constants/constants'
import type { ICartProduct, IProduct } from '../../types/types'
import styles from './PizzaCard.module.scss'

export default function PizzaCard({
  _id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}: IProduct) {
  const { addItemToCart } = useCartActions()

  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)

  const handleChangeActiveType = (type: number) => setActiveType(type)
  const handleChangeActiveSize = (index: number) => setActiveSize(index)

  function handleClickBtn() {
    const item: Omit<ICartProduct, 'count'> = {
      _id,
      title,
      price,
      imageUrl,
      type: PIZZA_TYPE_NAMES[activeType],
      size: sizes[activeSize],
    }

    addItemToCart(item)
  }

  return (
    <div className={styles.card}>
      <Link to={`/pizza/${_id}`} aria-label={`Открыть пиццу ${title}`}>
        <img
          className={styles.image}
          src={`/${imageUrl}`}
          alt={`Пицца ${title}`}
          width="260"
          height="260"
          loading="lazy"
          decoding="async"
        />
      </Link>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.selector}>
        <ul aria-label="Тип теста">
          {types.map((type) => (
            <li key={type}>
              <button
                type="button"
                onClick={() => handleChangeActiveType(type)}
                className={activeType === type ? styles.active : ''}
                aria-pressed={activeType === type}
              >
                {PIZZA_TYPE_NAMES[type]}
              </button>
            </li>
          ))}
        </ul>
        <ul aria-label="Размер пиццы">
          {sizes.map((size, i) => (
            <li key={size}>
              <button
                type="button"
                onClick={() => handleChangeActiveSize(i)}
                className={activeSize === i ? styles.active : ''}
                aria-pressed={activeSize === i}
              >
                {size} см.
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.price}>от {price} грн.</div>
        <button
          className="button button--outline button--add"
          type="button"
          onClick={handleClickBtn}
          aria-label={`Добавить пиццу ${title} в корзину`}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
        </button>
      </div>
    </div>
  )
}
