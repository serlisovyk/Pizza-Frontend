import styles from './Empty.module.scss'

export default function Empty() {
  return (
    <div className={styles.wrapper}>
      <h2>Пиццы не найдены</h2>
      <p>Попробуйте изменить категорию, сортировку или поисковый запрос.</p>
    </div>
  )
}
