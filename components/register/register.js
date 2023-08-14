import React, { useEffect } from 'react'
import { useState } from 'react'
import InputText from '@/components/common/input/input-text-flex'
import InputTextPwd from '@/components/common/input/input-text-flex-pwd'
import styles from './register.module.css'
import BtnNormal from '@/components/common/button/btn-normal'
import InputRadioGroup from '@/components/common/input/input-radio-group-flex'
import { useRouter } from 'next/router'
import App from '@/components/register/imgupload'
export default function RegisterLetter1({ setPage, setAaa, aaa }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [birth, setBirth] = useState('')
  const [id, setId] = useState('')
  const [gender, setGender] = useState('')
  const [location, setLocation] = useState('')
  const [InputName4, setInputName4] = useState('')
  const [InputLabel4, setInputLabel4] = useState('')
  const [error8, setError8] = useState(false)
  const [errorTracker8, setErrorTracker8] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [clickSubmitted, setClickSubmitted] = useState(false)
  const [images, setImages] = useState()

  // 事件處理函式，在日期選擇時更新狀態
  const handleDateChange = (event) => {
    setBirth(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    setSubmitted(true) // 更改追蹤是否提交的狀態，用於 <form> 內除錯
    setClickSubmitted(!clickSubmitted) // 可以追蹤點擊提交
    if (error8 == true) {
      var moveTo = document.getElementById(errorTracker8)
      moveTo.scrollIntoView() // 滑向錯誤的地方
      moveTo.focus()
      return
    }
  }
  useEffect(() => {
    setAaa((prev) => {
      return {
        ...prev,
        email,
        password,
        name,
        // birth,
        id,
        gender,
        location,
        images,
      }
    })
  }, [email, password, name, id, gender, location])

  useEffect(() => {
    console.log('111', birth)
  }, [birth])
  // useEffect(() => {
  //   console.log(result)
  // }, [img])
  const resultChange = (resultObj) => {
    resultObj ? console.log('11', resultObj.filename) : console.log('22')
    resultObj ? setImages(resultObj.filename) : setImages('')
  }
  const [verifyEmail, setVerifyEmail] = useState(true)
  function validateemail(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // console.log(emailPattern.test(value))
    if (emailPattern.test(value)) {
      setEmail(value)
      console.log(value)
      setVerifyEmail(true)
    } else {
      setVerifyEmail(false)
    }
  }
  const [verifyId, setVerifyId] = useState(true)
  function validateidnumber(value) {
    const idPattern = /^[A-Z][12]\d{8}$/
    // console.log(emailPattern.test(value))
    if (idPattern.test(value)) {
      setId(value)
      console.log(value)
      setVerifyId(true)
    } else {
      setVerifyId(false)
    }
  }
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
            <div className={styles.inputbar}>
              <InputText
                label="電子信箱/帳號"
                name="email"
                //change
                value={aaa.email}
                id="email"
                // value=''
                getValue={(value) => {
                  value != '' ? validateemail(value) : setEmail('')
                }}
                addClassforInput={email == '' ? styles.error : styles.right}
                getName={() => {}}
                width="input-width-100pa"
              ></InputText>
            </div>
            {/* {verify && <div style={{ color: 'green' }}>請輸入電子信箱</div>} */}
            {!verifyEmail && (
              <div style={{ color: 'red' }}>電子信箱格式錯誤</div>
            )}
          </div>
          <div className={styles.inputstyle}>
            <div className={styles.inputbar}>
              <InputTextPwd
                type="password"
                label="密碼"
                value={aaa.password}
                name="password"
                getValue={(value) =>
                  value != '' ? setPassword(value) : setPassword('')
                }
                getName={() => 'whatever'}
                width="input-width-100pa"
              ></InputTextPwd>
            </div>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>照片</h5>
            <App resultChange={resultChange} />
          </div>
          <div className={styles.inputstyle}>
            <div className={styles.inputbar}>
              <InputText
                label="會員名稱"
                name="member_name"
                value={aaa.name}
                getValue={(value) =>
                  value != '' ? setName(value) : setName('')
                }
                getName={() => 'whatever'}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>會員生日</h5>
            <input
              type="date"
              className="input-text"
              value={aaa.birth}
              onChange={(e) => {
                setAaa({ ...aaa, birth: e.target.value })
              }}
            ></input>
          </div>
          <div className={styles.inputstyle}>
            <div className={styles.inputbar}>
              <InputText
                label="身分證字號"
                name="id_number"
                value={aaa.id}
                getValue={(value) =>
                  value != '' ? validateidnumber(value) : setId('')
                }
                getName={() => 'whatever'}
                width="input-width-100pa"
              ></InputText>
            </div>
            {!verifyId && (
              <div style={{ color: 'red' }}>身分證字號格式錯誤</div>
            )}
          </div>
          <div className={styles.inputstyle}>
            <InputRadioGroup
              label="性別"
              name="gender"
              // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
              idGroup={['male', 'female']} // 個別 radio 的 ID
              valueGroup={['男', '女']} // 個別 radio 的 name
              labelGroup={['男', '女']} // 個別標籤
              value={aaa.gender}
              checked="男" // 預設勾選，需填入 value，只能擇一
              getValue={(value) =>
                value != '' ? setGender(value) : setGender('')
              }
              getName={setInputName4}
              getLabel={setInputLabel4}
              addClassforTitleLabel="classTest1 d-flex justify-contents-center align-items-center" // 如果要在標題 label 添加 class
              addClassforEachLabel="classTest2 d-flex justify-contents-center align-items-center" // 如果要在個別選項 label 添加 class
              addClassforInput="classTest3" // 如果要在 input 添加 class
            ></InputRadioGroup>
          </div>
          <div className={styles.inputstyle}>
            <div className={styles.inputbar}>
              <InputText
                label="地區"
                name="location"
                value={aaa.location}
                getValue={(value) =>
                  value != '' ? setLocation(value) : setLocation('')
                }
                getName={() => 'whatever'}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <BtnNormal
              type="button"
              value="button"
              btnText="下一頁"
              addClassforButton="btn-dark"
              onClick={() => {
                setPage(2)
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
