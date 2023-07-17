import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import styles from './login.module.css'
import logo from '@/assets/logo/FriendTrip-Logo.png'
import BtnNormal from '@/components/common/button/btn-normal'
import InputText from '@/components//common/input/input-text'
export default function Login() {
  // input-text
  const [inputText, setInputText] = useState('')
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
            <h1>註冊/登入</h1>
          </div>
          <div className={styles.input}>
            <div className={styles.up}>
              <h4>電子信箱/帳號</h4>
              <input id="input1" type="text" size="30"></input>
            </div>
            <div className={styles.down}>
              <h4>密碼</h4>
              <input type="text" id="fname" name="fname" size="30"></input>
            </div>
          </div>
          <div>
            <BtnNormal btnText="註冊/登入" addClassforButton="btn-dark" />
          </div>
          <div>
            <p className="small-font">未收到驗證信/忘記密碼</p>
          </div>
        </div>
      </div>
    </>
  )
}
