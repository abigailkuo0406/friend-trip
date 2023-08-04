import React from 'react'
import styles from './pairs.module.css'

export default function PairBtns({ setPage }) {
  return (
    <>
      <div className="d-flex justify-content-center gap-5 mt-3">
        <button type="button" href="#" className={styles.button}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <button
          type="button"
          href="#"
          className={styles.button}
          onClick={() => setPage(2)}
        >
          <i className="fa-solid fa-heart"></i>
        </button>
      </div>
    </>
  )
}
