
import styles from './page.module.css';
export function Page({ children, title }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}
