import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="cardNumber">
            Card Number
          </label>
          <input
            className={styles.formInput}
            id="cardNumber"
            name="cardNumber"
            type="text"
            autoComplete="cc-number"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="cardName">
            Card Name
          </label>
          <input
            className={styles.formInput}
            id="cardName"
            name="cardName"
            type="text"
            autoComplete="cc-name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="cardExpiry">
            Card Expiry
          </label>
          <input
            className={styles.formInput}
            id="cardExpiry"
            name="cardExpiry"
            type="text"
            autoComplete="cc-exp"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="cardCvc">
            Card CVC
          </label>
          <input
            className={styles.formInput}
            id="cardCvc"
            name="cardCvc"
            type="text"
            autoComplete="cc-csc"
            required
          />
        </div>
        <button className={styles.formButton} type="submit">
          Pay
        </button>
      </form>
    </main>
  )
}
