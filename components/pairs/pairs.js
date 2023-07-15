import React from 'react'
import Card from 'react-bootstrap/Card'
import styles from './pairs.module.css'
import Face from '@/public/img/avatar/face/face14.png'
import Image from 'next/image'
export default function Pairs() {
  return (
    <>
      <div className={`card ${styles.main}`} style={{ width: '18rem' }}>
        <div className="d-flex justify-content-end">
          <i className="fa-solid fa-sliders fa-rotate-270"></i>
        </div>
        <div
          className="d-flex"
          style={{
            width: '60%',
            height: '200px',
          }}
        >
          <div className={styles.imgabove}></div>
          <Image
            // width={100}
            // height={200}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            src={Face}
            className="card-img-top"
            alt="face1.png"
          />
        </div>
        <div className={`card-body ${styles.main}`}>
          <h5 className="card-title text-center">Alex 28歲</h5>
          <p className="card-text text-center">
            不菸不酒 工程師 高爾夫 衝浪 <br />
            想找一起打高爾夫的朋友~
          </p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <button type="button" href="#" className={styles.button}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <button type="button" href="#" className={styles.button}>
              <i className="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
