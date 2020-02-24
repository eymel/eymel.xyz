import Link from 'next/link'
import styles from './social-link.module.css'
import { FaTwitter, FaGithub, FaGitlab, FaMedium } from 'react-icons/fa'
export function SocialLinks() {
  return (
    <div className={styles.container}>
      <Link href="https://twitter.com/eeymel">
        <a className={styles.link}>
          <FaTwitter className={styles.reactIcons} />
        </a>
      </Link>
      <Link href="https://github.com/eymel">
        <a className={styles.link}>
          <FaGithub className={styles.reactIcons} />
        </a>
      </Link>
      <Link href="https://gitlab.com/eymel">
        <a className={styles.link}>
          <FaGitlab className={styles.reactIcons} />
        </a>
      </Link>
      <Link href="https://medium.com/@eymel">
        <a className={styles.link}>
          <FaMedium className={styles.reactIcons} />
        </a>
      </Link>
    </div>
  )
}
