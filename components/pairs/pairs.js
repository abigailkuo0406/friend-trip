import React from 'react'
import Card from 'react-bootstrap/Card'
import styles from './pairs.module.css'
export default function Pairs() {
  return (
    <>
      <div className={styles.card}>
        <Card className={styles.main} style={{ width: '18rem' }}>
          <div className="d-flex justify-content-end">
            <i class="fa-solid fa-sliders fa-rotate-270"></i>
          </div>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title className="d-flex justify-content-center">
              Alex 28歲
            </Card.Title>
            <Card.Text className="d-flex justify-content-center">
              不菸不酒 工程師 高爾夫 衝浪 <br />
              想找一起打高爾夫的朋友~
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="d-flex justify-content-center gap-3">
          <button className={styles.button}>
            <i class="fa-solid fa-xmark"></i>
          </button>
          <button className={styles.button}>
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </>
  )
}
