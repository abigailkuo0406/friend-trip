import React from 'react'
import styles from './pairs.module.css'

export default function PairBtns({ setPage, setImgIndex, imgIndex }) {
  return (
    <>
      <div className="d-flex justify-content-center gap-5 mt-3">
        <button
          type="button"
          href="#"
          className={styles.button}
          onClick={() => {
            setImgIndex(imgIndex + 1)
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <button
          type="button"
          href="#"
          className={styles.button}
          onClick={() => {
            setPage(2)
          }}
        >
          <i className="fa-solid fa-heart"></i>
        </button>
      </div>
    </>
  )
}
