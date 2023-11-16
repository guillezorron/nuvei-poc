import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/nuvei-logo.webp"
          alt="Nuvei Logo"
          width={220}
          height={80}
        />Q
      </div>
    </main>
  )
}
