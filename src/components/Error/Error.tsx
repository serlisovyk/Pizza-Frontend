import type { ErrorProps } from '../../types'
import styles from './Error.module.scss'

export default function Error({
  title = 'Произошла ошибка',
  description = 'К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже.',
}: ErrorProps) {
  return (
    <div className={styles.error} role="alert">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
