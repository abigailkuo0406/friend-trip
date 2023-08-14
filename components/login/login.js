import React from 'react'
import { useState, useContext } from 'react'
import Image from 'next/image'
import styles from './login.module.css'
import logo from '@/assets/logo/FriendTrip-Logo.png'
import BtnNormal from '@/components/common/button/btn-normal'
import InputText from '@/components//common/input/input-text'
import InputTextPwd from '@/components//common/input/input-text-pwd'
import AuthContext from '@/context/AuthContext'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
export default function Login() {
  // input-text
  const [inputValue1, setinputValue1] = useState('')
  const [inputName1, setinputName1] = useState('')
  const [inputValue2, setinputValue2] = useState('')
  const [inputName2, setinputName2] = useState('')
  // textarea
  const [textareaText, setTextareaText] = useState('')
  const router = useRouter()
  const { auth, setAuth } = useContext(AuthContext)
  const doLogin = (e) => {
    e.preventDefault()
    fetch(process.env.API_SERVER + '/login/admin', {
      method: 'POST',
      body: JSON.stringify({
        email: inputValue1,
        password: inputValue2,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          const obj = { ...data.data }
          localStorage.setItem('auth', JSON.stringify(obj))
          setAuth(obj)
          Swal.fire({
            width: 400,
            title: '登入成功',
            text: '感謝您的使用祝福您使用愉快',
            icon: 'success',
            iconColor: '#FABCBF',
            color: '#674C87',
            confirmButtonColor: '#674C87',
            showConfirmButton: false,
          })
          router.push('/')
        } else {
          alert(data.error || '帳密錯誤')
        }
      })
  }

  return (
    <>
      <div className={styles.white}>
        <div className={styles.leftplace}>
          <Image src={logo} className={styles.photo} alt="logo.png" />
        </div>
        <div className={styles.rightplace}>
          <div className={styles.title}>
            <h1 className={styles.title}>註冊/登入</h1>
          </div>
          <form onSubmit={doLogin}>
            <div className={styles.input}>
              <div className={styles.up}>
                <h5>電子信箱/帳號</h5>
                <div className={styles.inputbox}>
                  <InputText
                    getValue={setinputValue1}
                    getName={setinputName1}
                    width="input-width-100pa"
                  ></InputText>
                </div>
              </div>
              <div className={styles.down}>
                <h5>密碼</h5>
                <div className={styles.inputbox}>
                  <InputTextPwd
                    getValue={setinputValue2}
                    getName={setinputName2}
                    width="input-width-100pa"
                  ></InputTextPwd>
                </div>
              </div>
            </div>
            <div className={`${styles.btnbar} d-flex justify-content-center`}>
              <BtnNormal
                type="button"
                btnText="註冊"
                onClick={() => {
                  router.push('/register')
                }}
                addClassforButton={`${styles.btn} btn-light  me-5`}
              />
              <BtnNormal
                type="submit"
                btnText="登入"
                onClick={() => {
                  console.log(inputValue1, ' \n', inputValue2)
                }}
                addClassforButton={`${styles.btn} btn-dark`}
              />
            </div>
          </form>
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
