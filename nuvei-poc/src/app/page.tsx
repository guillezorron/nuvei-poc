import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Link href="/payment/1">
          <Image
            className={styles.logo}
            src="/nuvei-logo.webp"
            alt="Nuvei Logo"
            width={220}
            height={80}
          />
        </Link>
        (  AKA Stripen&apos;t )
      </div>
    </main>
  )
}
