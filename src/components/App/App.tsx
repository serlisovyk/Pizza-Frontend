import Header from '../Header'
import AppRoutes from '../AppRoutes'
import styles from './App.module.scss'

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
        <AppRoutes />
      </main>
    </div>
  )
}
