import React from 'react'
import Card from 'react-bootstrap/Card'
import styles from './pairs.module.css'
import Face from '@/public/img/avatar/face/face1.png'
import Image from 'next/image'
import { IconName } from 'react-icons/tb'
export default function Pairs() {
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <div className="d-flex justify-content-end">
          <i className="fa-solid fa-sliders fa-rotate-270"></i>
        </div>
        <div className="d-flex">
          <div className={styles.imgabove}></div>
          <Image src={Face} className="card-img-top" alt="face1.png" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Alex 28歲</h5>
          <p className="card-text">
            不菸不酒 工程師 高爾夫 衝浪 <br />
            想找一起打高爾夫的朋友~
          </p>
          <div className="d-flex justify-content-center gap-3 mt-3"></div>
          <a href="#" className={styles.button}>
            <i className="fa-solid fa-xmark"></i>
          </a>
          <a href="#" className={styles.button}>
            <i className="fa-solid fa-heart"></i>
          </a>
        </div>
      </div>
    </>
  )
}
