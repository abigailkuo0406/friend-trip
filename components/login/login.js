import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import styles from './login.module.css'
import logo from '@/assets/logo/FriendTrip-Logo.png'
import BtnNormal from '@/components/common/button/btn-normal'
import InputText from '@/components//common/input/input-text'
export default function Login() {
  // input-text
  const [inputValue, setinputValue] = useState('')
  const [inputName, setinputName] = useState('')
  // textarea
  const [textareaText, setTextareaText] = useState('')
  return (
    <>
      <div className={styles.white}>
        <div className={styles.leftplace}>
          <Image src={logo} className={styles.photo} />
        </div>
        <div className={styles.rightplace}>
          <div className={styles.title}>
            <h1 className={styles.title}>註冊/登入</h1>
          </div>
          <div className={styles.input}>
            <div className={styles.up}>
              <h5>電子信箱/帳號</h5>
              <div className={styles.inputbox}>
                <InputText
                  getValue={setinputValue}
                  getName={setinputName}
                  width="input-width-100pa"
                ></InputText>
              </div>
            </div>
            <div className={styles.down}>
              <h5>密碼</h5>
              <div className={styles.inputbox}>
                <InputText
                  getValue={setinputValue}
                  getName={setinputName}
                  width="input-width-100pa"
                ></InputText>
              </div>
            </div>
          </div>
          <div className={styles.btnbar}>
            <BtnNormal
              btnText="註冊/登入"
              addClassforButton={`${styles.btn} btn-dark`}
            />
          </div>
          <div>
            <p className={`small-font ${styles.beside}`}>
              未收到驗證信/忘記密碼
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
