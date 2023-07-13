import { divide } from 'lodash';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './verify.module.css'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form';
function VerifyLetter() {
  return (
    <div className={`${styles.main} d-flex align-content-center justify-content-center`}>
    <Card className={styles.style}>
      <Card.Body className={styles.body}>
      <div className={styles.cardabove}>
        <div className={styles.inputgroup}>
        <h2>驗證信已寄發</h2>
      </div>
        </div>
        <div className={styles.minutes}>
          <h4>10s</h4>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default VerifyLetter;
