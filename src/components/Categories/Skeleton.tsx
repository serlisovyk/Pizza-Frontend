import styles from './Categories.module.scss'

const SKELETON_ITEMS = [
  { width: 104 },
  { width: 88 },
  { width: 116 },
  { width: 122 },
  { width: 156 },
] as const

export default function Skeleton() {
  return (
    <ul className={styles.skeletonList} aria-hidden="true">
      {SKELETON_ITEMS.map(({ width }, index) => (
        <li key={index} className={styles.skeletonItem} style={{ width }} />
      ))}
    </ul>
  )
}
