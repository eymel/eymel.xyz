import styles from './profile.module.css'
export function Profile() {
  return (
    <div className={styles.container}>
      <img src="/profile_photo.jpg" className={styles.userImage}></img>
      <h1>Eyüp Yıldırım</h1>
      <span>Software Developer</span>
    </div>
  )
}
