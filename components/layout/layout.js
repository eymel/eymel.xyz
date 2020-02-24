import { Aside } from '../aside';
import styles from './layout.module.css';
export   function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Aside></Aside>
      </div>
      <div className={styles.rigthSide}>
        <main>{children}</main>
        <footer></footer>
      </div>
    </div>
  )
}
