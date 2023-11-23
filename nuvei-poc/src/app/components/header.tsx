import Link from "next/link";
import { House, Receipt, Coins } from "@phosphor-icons/react/dist/ssr";

import styles from "./header.module.css";

const Header = () => {

  return (
    <header className={styles.headerContainer}>
      <Link href="/" className={styles.headerHome}>
      <House size={20} />
      </Link>
      <div className={styles.headerActions} >
        <Link href="/bills" className={styles.headerItem}>
          Bills
          <Receipt className={styles.icon} size={20} />
        </Link>
        |
        <Link href="/payments" className={styles.headerItem}>
          Payments
          <Coins className={styles.icon} size={20} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
