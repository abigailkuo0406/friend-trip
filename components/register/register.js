import React, { useEffect } from 'react'
import { useState } from 'react'
import InputText from '@/components/common/input/input-text-flex'
import styles from './register.module.css'
import BtnNormal from '@/components/common/button/btn-normal'
import InputRadioGroup from '@/components/common/input/input-radio-group-flex'
import { useRouter } from 'next/router'

export default function RegisterLetter1({
  setPage,
  setAaa,
  aaa })
{
  const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [name, setName] = useState('')
  // const [id, setId] = useState('')
  // const [gender, setGender] = useState('')
  // const [location, setLocation] = useState('')
  // const [InputName4, setInputName4] = useState('')
  // const [InputLabel4, setInputLabel4] = useState('')
  // const [error8, setError8] = useState(false)
  // const [errorTracker8, setErrorTracker8] = useState('')
  // const [submitted, setSubmitted] = useState(false)
  // const [clickSubmitted, setClickSubmitted] = useState(false)

  // const handleSubmit = (event) => {
  //   event.preventDefault()

  //   setSubmitted(true) // 更改追蹤是否提交的狀態，用於 <form> 內除錯
  //   setClickSubmitted(!clickSubmitted) // 可以追蹤點擊提交
  //   if (error8 == true) {
  //     var moveTo = document.getElementById(errorTracker8)
  //     moveTo.scrollIntoView() // 滑向錯誤的地方
  //     moveTo.focus()
  //     return
  //   }
  // }
  // const add = (e) => {
  //   e.preventDefault()
  //   fetch(process.env.API_SERVER + '/register/add', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //       images: images,
  //       member_name: member_name,
  //       member_birth: member_birth,
  //       id_number: id_number,
  //       gender: gender,
  //       location: location,
  //       height: height,
  //       weight: weight,
  //       zodiac: zodiac,
  //       bloodtype: bloodtype,
  //       smoke: smoke,
  //       alchohol: alchohol,
  //       education_level: education_level,
  //       job: job,
  //       profile: profile,
  //       mobile: mobile,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then((data) => {
  //       console.log(data)
  //       if (data.success) {
  //         const obj = { ...data.data }
  //         localStorage.setItem('auth', JSON.stringify(obj))
  //         setAuth(obj)
  //         // alert('登入成功')
  //         router.push('/')
  //       } else {
  //         alert(data.error || '帳密錯誤')
  //       }
  //     })
  // }
  useEffect(() => {
    setAaa((prev) => {
      return { ...prev, email }
    })
  }, [email])

  return (
    <>
      <div className={styles.main}>
        <div className={styles.cardbody}>
          <div className={styles.breadcontainer}>
            <div className={styles.breadline}></div>
            <div className={styles.bread1}></div>
            <div className={styles.bread2}></div>
          </div>
          {/* <form onSubmit={add}> */}
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
                    value != '' ? setEmail(value) : setEmail('')
                  }}
                  addClassforInput={email == '' ? styles.error : styles.right}
                  getName={() => {}}
                  width="input-width-100pa"
                ></InputText>
              </div>
            </div>
            {/* <div className={styles.inputstyle}>
              <div className={styles.inputbar}>
                <InputText
                  label="密碼"
                  name="password"
                  getValue={(value) =>
                    value != '' ? setPassword(value) : setPassword('')
                  }
                  getName={() => 'whatever'}
                  width="input-width-100pa"
                ></InputText>
              </div>
            </div>
            <div className={styles.inputstyle}>
              <h5 className={styles.inputlabel}>照片</h5>
              <BtnNormal
                btnText="上傳"
                addClassforButton={`btn-dark small-font ${styles.btnsize}`}
              />
            </div>
            <div className={styles.inputstyle}>
              <div className={styles.inputbar}>
                <InputText
                  label="會員名稱"
                  name="member_name"
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
              <input type="date" className="rounded-3"></input>
            </div>
            <div className={styles.inputstyle}>
              <div className={styles.inputbar}>
                <InputText
                  label="身分證字號"
                  name="id_number"
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
                checked="birdValue" // 預設勾選，需填入 value，只能擇一
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
                  getValue={(value) =>
                    value != '' ? setLocation(value) : setLocation('')
                  }
                  getName={() => 'whatever'}
                  width="input-width-100pa"
                ></InputText>
              </div>
            </div> */}
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
          {/* </form> */}
        </div>
      </div>
    </>
  )
}
