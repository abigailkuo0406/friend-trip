import React from 'react'
import InputText from '@/components/common/input/input-text'
import styles from './register.module.css'
export default function RegisterCard() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.cardbody}>
          <div className={styles.breadcontainer}>
            <div className={styles.breadline}></div>
            <div className={styles.bread1}></div>
            <div className={styles.bread2}></div>
          </div>
          <div>
            <h2 className={styles.title}>快速註冊</h2>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>電子信箱/帳號</h5>
            <div className={styles.inputbar}>
              <InputText
                getValue={() => 'whatever'}
                getName={() => 'whatever'}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>密碼</h5>
            <div className={styles.inputbar}>
              <InputText
                getValue={() => 'whatever'}
                getName={() => 'whatever'}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>照片</h5>
            <button type="button">上傳</button>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>會員名稱</h5>
            <div className={styles.inputbar}>
              <InputText
                getValue={() => 'whatever'}
                getName={() => 'whatever'}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>會員生日</h5>
            <input type="date"></input>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>身分證字號</h5>
            <div className={styles.inputbar}>
              <InputText
                getValue={() => 'whatever'}
                getName={() => 'whatever'}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>性別</h5>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>
            <label htmlFor="html">男</label>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>
            <label htmlFor="html">女</label>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>地區</h5>
            <div className={styles.inputbar}>
              <InputText
                getValue={() => 'whatever'}
                getName={() => 'whatever'}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
