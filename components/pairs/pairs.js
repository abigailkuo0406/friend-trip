import React from 'react'
import styles from './pairs.module.css'
import Face from '@/public/img/avatar/face/face52.png'
import Image from 'next/image'
export default function Pairs() {
  return (
    <>
      <div className={styles.main}>
        <div className={`card ${styles.card}`} style={{ width: '18rem' }}>
          <div className="d-flex justify-content-end">
            <i className="fa-solid fa-sliders fa-rotate-270"></i>
          </div>
          <div className={`d-flex ${styles.imgborder}`}>
            <div className={styles.imgabove}></div>
            <Image
              src={Face}
              className={`card-img-top ${styles.img}`}
              alt="face1.png"
            />
          </div>
          <div className={`card-body ${styles.cardprofile}`}>
            <h5 className="card-title text-center">Alex 28歲</h5>
            <p className="card-text text-center">
              不菸不酒 工程師 高爾夫 衝浪 <br />
              想找一起打高爾夫的朋友~
            </p>
          </div>{' '}
        </div>
        <div className="d-flex justify-content-center gap-5 mt-3">
          <button type="button" href="#" className={styles.button}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button type="button" href="#" className={styles.button}>
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </>
  )
}
