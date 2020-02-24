import Link from 'next/link'
import styles from './navigation.module.css'
export function Navigation() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.link}> Ana Sayfa </a>
      </Link>
      <Link href="/about">
        <a className={styles.link}> Hakkımda </a>
      </Link>
    </div>
  )
}
