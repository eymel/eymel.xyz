import Link from 'next/link'
import styles from './aside.module.css'
import { Profile } from '../profile'
import { Navigation } from '../navigation'
import { SocialLinks } from '../social-link'

export function Aside() {
  return (
    <div className={styles.container}>
      <Profile />
      <SocialLinks />
      <Navigation />
    </div>
  )
}
