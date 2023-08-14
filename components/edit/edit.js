import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import InputText from '@/components/common/input/input-text-flex'
import InputTextPwd from '@/components/common/input/input-text-flex-pwd'
import styles from './edit.module.css'
import BtnNormal from '@/components/common/button/btn-normal'
import InputRadioGroup from '@/components/common/input/input-radio-group-flex'
import { useRouter } from 'next/router'
import App from '@/components/edit/imgupload'
import Image from 'next/image'
import AuthContext from '@/context/AuthContext'
export default function Edit1({ setPage, setAaa, aaa, memberInfo }) {
  const { auth, setAuth } = useContext(AuthContext)
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
      }
    })
  }, [email, password, name, id, gender, location])

  useEffect(() => {
    console.log('111', birth)
  }, [birth])

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
            <h2 className={styles.title}>修改個人資料</h2>
          </div>
          <div className={styles.inputstyle}>
            <div className={styles.inputbar}>
              <InputText
                label="電子信箱/帳號"
                name="email"
                //change
                value={aaa.email ? aaa.email : memberInfo?.email}
                id="email"
                // value=''
                getValue={(value) => {
                  value != '' ? setEmail(value) : setEmail('')
                }}
                addClassforInput={email == '' ? styles.error : styles.right}
                getName={() => {}}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <div className={styles.inputstyle}>
            <div className={styles.inputbar}>
              <InputTextPwd
                label="密碼"
                value={aaa.password ? aaa.password : memberInfo?.password}
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
            {auth.images === '' ? (
              <Image
                src={`http://localhost:3002/face/${auth.images}`}
                width={100}
                height={100}
              />
            ) : (
              <App aaa={aaa} />
            )}
          </div>
          <div className={styles.inputstyle}>
            <div className={styles.inputbar}>
              <InputText
                label="會員名稱"
                name="member_name"
                value={aaa.member ? aaa.member : memberInfo?.member_name}
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
              value={aaa.birth ? aaa.birth : memberInfo?.member_birth}
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
                value={aaa.id ? aaa.id : memberInfo?.id_number}
                getValue={(value) => (value != '' ? setId(value) : setId(''))}
                getName={() => 'whatever'}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <div className={styles.inputstyle}>
            <InputRadioGroup
              label="性別"
              name="gender"
              // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
              idGroup={['male', 'female']} // 個別 radio 的 ID
              valueGroup={['男', '女']} // 個別 radio 的 name
              labelGroup={['男', '女']} // 個別標籤
              value={aaa.gender ? aaa.gender : memberInfo?.gender}
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
                value={aaa.location ? aaa.location : memberInfo?.location}
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
