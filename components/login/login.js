import React from "react"
import { useState } from "react"
import Image from 'next/image'
import styles from './login.module.css'
import logo from '@/assets/logo/FriendTrip-Logo.png'

export default function Login(){
 // input-text
  const [inputText, setInputText] = useState('')
// textarea
  const [textareaText, setTextareaText] = useState('')
    return(
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
                            <h1>電子信箱/帳號</h1>
                            <input id="input1" type="text"></input>
                        </div>
                        <div className={styles.down}>
                            <h1>密碼</h1>
                            <input id="input1" type="text"></input>
                        </div>
                    </div>
                    <div>
                        <button type="button">註冊/登入</button>
                    </div>
                    <div>
                        <h5>未收到驗證信/忘記密碼</h5>
                    </div>
                </div>
            </div>
        </>
    )
}