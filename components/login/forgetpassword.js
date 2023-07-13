import { divide } from 'lodash'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from './forgetpassword.module.css'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
function ForgetPassword() {
  return (
    <div
      className={`${styles.main} d-flex align-content-center justify-content-center`}
    >
      <Card className={styles.style}>
        <Card.Body className={styles.body}>
          <div className={styles.cardabove}>
            <Card.Title className={styles.title}>尋找你的帳號</Card.Title>
            <div className={`${styles.inputgroup}`}>
              <InputGroup className="mb-3">
                <InputGroup.Text className="small-font" id="basic-addon1">
                  請輸入電子郵件或手機號碼以搜尋帳號
                </InputGroup.Text>
                <Form.Control
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
          </div>
          <div className={styles.buttongroup}>
            <Button variant="primary d-flex flex-direction">確定</Button>
            <Button variant="primary d-flex flex-direction">取消</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ForgetPassword
