import styles from './Sort.module.scss'

export default function Skeleton() {
  return (
    <div className={styles.skeleton} aria-hidden="true">
      <span className={styles.skeletonIcon} />
      <span className={styles.skeletonLabel} />
      <span className={styles.skeletonValue} />
    </div>
  )
}
