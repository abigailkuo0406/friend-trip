import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import styles from './forgetpassword.module.css'
import InputText from '@/components/common/input/input-text'
import BtnNormal from '@/components/common/button/btn-normal'
function ForgetPassword() {
  const [inputValue, setinputValue] = useState('')
  return (
    <div
      className={`${styles.main} d-flex align-content-center justify-content-center`}
    >
      <Card className={styles.style}>
        <Card.Body className={styles.body}>
          <div className={styles.cardabove}>
            <Card.Title>
              <h2 className={styles.title}>尋找你的帳號</h2>
            </Card.Title>
            <div className={`${styles.inputgroup}`}>
              <InputText
                getValue={() => 'whatever'}
                getName={() => 'whatever'}
                width="input-width-100pa"
                placeholder="請輸入電子郵件或手機號碼以搜尋帳號"
              ></InputText>
            </div>
          </div>
          <div
            className={`d-flex justify-content-end gap-3 mt-4 ${styles.buttongroup}`}
          >
            <BtnNormal btnText="取消" />
            <BtnNormal btnText="搜尋" addClassforButton="btn-light" />
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ForgetPassword
