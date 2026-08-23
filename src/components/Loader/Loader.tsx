import type { LoaderProps } from '../../types/types'
import styles from './Loader.module.scss'

export default function Loader({ label = 'Загрузка...' }: LoaderProps) {
  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
    </div>
  )
}
