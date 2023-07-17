import React from 'react'

import styles from './register.module.css'
export default function RegisterCard() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.cardbody}>
          <div>
            <h2>快速註冊</h2>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>電子信箱/帳號</h5>
            <input type="text" className={styles.input}></input>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>密碼</h5>
            <input type="text" className={styles.input}></input>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>照片</h5>
            <button type="button">上傳</button>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>會員名稱</h5>
            <input type="text" className={styles.input}></input>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>會員生日</h5>
            <input type="text" className={styles.input}></input>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>身分證字號</h5>
            <input type="text" className={styles.input}></input>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>性別</h5>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>
              <label for="html">男</label>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>
              <label for="html">女</label>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>地區</h5>
            <input type="text" className={styles.input}></input>
          </div>
        </div>
      </div>
    </>
  )
}
