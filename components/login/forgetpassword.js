import { divide } from 'lodash';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from './forgetpassword.module.css'
import InputGroup from 'react-bootstrap/InputGroup'

function BasicExample() {
  return (
    <div className={`${style.main} d-flex align-content-center justify-content-center`}>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>尋找你的帳號</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        <Button variant="primary d-flex flex-direction">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;
