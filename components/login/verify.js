import styles from './verify.module.css'
function VerifyLetter() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.letter}>
          <h3 className={styles.font1}>驗證信已寄發</h3>
        </div>
        <div>
          <h5 className={styles.font2}>10s</h5>
        </div>
      </div>
    </div>
  )
}

export default VerifyLetter
