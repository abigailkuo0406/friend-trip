import React from 'react'
import styles from './condition.module.css'
import BtnNormal from '@/components/common/button/btn-normal.js'
export default function Condition() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div>
            <h4 className={styles.font}>對象</h4>
            <div className={styles.btns}>
              <BtnNormal
                className="btn"
                btnText="生理女性"
                addClassforButton="btn-light"
              />
              <BtnNormal btnText="生理男性" addClassforButton="btn-light" />
              <BtnNormal btnText="都可以" addClassforButton="btn-light" />
            </div>
          </div>
          <div>
            <label htmlFor="customRange2" class="form-label">
              <h4>年齡</h4>
            </label>
            <input
              type="range"
              class="form-range"
              min="0"
              max="5"
              id="customRange2"
            ></input>
          </div>
        </div>
      </div>
    </>
  )
}
