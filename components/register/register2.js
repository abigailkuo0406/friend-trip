import React from 'react'
import { useState, useEffect } from 'react'
import styles from './register2.module.css'
import InputText from '@/components/common/input/input-text-flex-un'
import InputTextDouble from '@/components/common/input/input-text-double'
import SelectOption from '@/components/common/input/select-option-flex'
import InputRadioGroup from '@/components/common/input/input-radio-group-flex'
import TextArea from '@/components/common/input/textarea-flex'
import BtnNormal from '@/components/common/button/btn-normal'
import { useRouter } from 'next/router'
import { Logger } from 'sass'

export default function RegisterLetter2({ setPage, setForm, setAaa, aaa }) {
  const [height, setHeight] = useState('')
  const [heightName, setHeightName] = useState('')
  const [weight, setWeight] = useState('')
  const [weightName, setWeightName] = useState('')
  const [zodiac, setZodiac] = useState('')
  const [zodiacName, setZodiacName] = useState('')
  const [bloodtype, setBloodType] = useState('')
  const [bloodtypename, setBloodTypeName] = useState('')
  const [smoke, setSmoke] = useState('')
  const [smokeName, setSmokeName] = useState('')
  const [smokeLabel, setSmokeLabel] = useState('')
  const [alchohol, setAlchohol] = useState('')
  const [alchoholName, setAlchoholName] = useState('')
  const [alchoholLabel, setAlchoholLabel] = useState('')
  const [education, setEducation] = useState('')
  const [educationName, setEducationName] = useState('')
  const [job, setJob] = useState('')
  const [jobName, setJobName] = useState('')
  const [profile, setProfile] = useState('')
  const [profileName, setProfileName] = useState('')
  const [mobile, setMobile] = useState('')
  const [mobileName, setMobileName] = useState('')
  const [error8, setError8] = useState(false)
  const [errorTracker8, setErrorTracker8] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [clickSubmitted, setClickSubmitted] = useState(false)
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
    console.log(zodiac, '\n', aaa.zodiac, 'L53')
    setAaa((prev) => {
      console.log(zodiac)
      return {
        ...prev,
        height,
        weight,
        // zodiac,
        // bloodtype,
        smoke,
        alchohol,
        // education,
        job,
        profile,
        mobile,
      }
    })
  }, [
    height,
    weight,
    // zodiac,
    // bloodtype,
    smoke,
    alchohol,
    // education,
    job,
    profile,
    mobile,
  ])
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
            <h2 className={styles.title}>*深入資料</h2>
          </div>
          <div className={styles.inputstyle}>
            <div className={styles.inputbar}>
              <InputText
                label="身高"
                name="height"
                value={aaa.height}
                // getValue={(value) => {
                //   parseInt(value) != '' ? setHeight(value) : setHeight('')
                // }}
                getValue={(value) => {
                  value != '' ? setHeight(parseInt(value)) : setHeight('')
                }}
                // addClassforInput={height == '' ? styles.error : styles.right}
                // getName={setHeightName}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <div className={styles.inputstyle}>
            <div className={styles.inputbar}>
              <InputText
                label="體重"
                name="weight"
                getName={setWeightName}
                value={aaa.weight}
                getValue={(value) => {
                  value != '' ? setWeight(parseInt(value)) : setWeight('')
                }}
                // addClassforInput={height == '' ? styles.error : styles.right}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <SelectOption
            id="zodiac"
            label="請選擇你的星座"
            name="zodiac"
            value={aaa.zodiac}
            selectedDefault="value" //預設選項，可不填，填寫 value
            valueGroup={[
              '牡羊座',
              '金牛座',
              '雙子座',
              '巨蟹座',
              '獅子座',
              '處女座',
              '天秤座',
              '天蠍座',
              '射手座',
              '摩羯座',
              '水瓶座',
              '雙魚座',
            ]}
            optionGroup={[
              '牡羊座',
              '金牛座',
              '雙子座',
              '巨蟹座',
              '獅子座',
              '處女座',
              '天秤座',
              '天蠍座',
              '射手座',
              '摩羯座',
              '水瓶座',
              '雙魚座',
            ]}
            // getValue={setZodiac}
            getValue={(value) => {
              setAaa({ ...aaa, zodiac: value })
            }}
            getName={setZodiacName}
            width="input-width-10rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
            addClassforLabel="try1" // 如果要在 label 添加 class
            addClassforSelect="try2" // 如果要在 Select 添加 class
            addClassforOption="try3" // 如果要在 Option 添加 class
          />
          <div className={styles.inputstyle}>
            <SelectOption
              id="bloodtype"
              label="血型"
              name="bloodtype"
              value={aaa.bloodtype}
              selectedDefault="value" //預設選項，可不填，填寫 value
              valueGroup={['A', 'B', 'O', 'AB']}
              optionGroup={['A', 'B', 'O', 'AB']}
              getValue={(value) => {
                setAaa({ ...aaa, bloodtype: value })
              }}
              getName={setBloodTypeName}
              width="input-width-10rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
              addClassforLabel="try1" // 如果要在 label 添加 class
              addClassforSelect="try2" // 如果要在 Select 添加 class
              addClassforOption="try3" // 如果要在 Option 添加 class
            />
          </div>
          <div className={styles.inputstyle}>
            <InputRadioGroup
              label="抽菸"
              name="smoke"
              // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
              idGroup={['有', '沒有']} // 個別 radio 的 ID
              valueGroup={['有', '沒有']} // 個別 radio 的 name
              labelGroup={['有', '沒有']} // 個別標籤
              checked="有" // 預設勾選，需填入 value，只能擇一
              value={aaa.smoke}
              getValue={(value) => {
                setAaa({ ...aaa, smoke: value })
              }}
              getName={setSmokeName}
              getLabel={setSmokeLabel}
              addClassforTitleLabel="classTest1 d-flex justify-contents-center align-items-center" // 如果要在標題 label 添加 class
              addClassforEachLabel="classTest2 d-flex justify-contents-center align-items-center" // 如果要在個別選項 label 添加 class
              addClassforInput="classTest3" // 如果要在 input 添加 class
            ></InputRadioGroup>
          </div>
          <div className={styles.inputstyle}>
            <InputRadioGroup
              label="酒精"
              name="alchohol"
              // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
              idGroup={['DogID', 'CatID', 'catValue']} // 個別 radio 的 ID
              valueGroup={['滴酒不沾', '小酌', '酒豪']} // 個別 radio 的 name
              labelGroup={['滴酒不沾', '小酌', '酒豪']} // 個別標籤
              checked="滴酒不沾" // 預設勾選，需填入 value，只能擇一
              value={aaa.alchohol}
              getValue={(value) => {
                setAaa({ ...aaa, alchohol: value })
              }}
              getName={setAlchoholName}
              getLabel={setAlchoholLabel}
              addClassforTitleLabel="classTest1 d-flex justify-contents-center align-items-center" // 如果要在標題 label 添加 class
              addClassforEachLabel="classTest2 d-flex justify-contents-center align-items-center" // 如果要在個別選項 label 添加 class
              addClassforInput="classTest3" // 如果要在 input 添加 class
            ></InputRadioGroup>
          </div>
          <div className={styles.inputstyle}>
            <SelectOption
              id="education"
              label="教育程度"
              name="education"
              value={aaa.education}
              selectedDefault="value" //預設選項，可不填，填寫 value
              valueGroup={['國小', '國中', '高中', '學士', '碩士', '博士']}
              optionGroup={['國小', '國中', '高中', '學士', '碩士', '博士']}
              getValue={(value) => {
                setAaa({ ...aaa, education: value })
              }}
              getName={setEducationName}
              width="input-width-10rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
              addClassforLabel="try1" // 如果要在 label 添加 class
              addClassforSelect="try2" // 如果要在 Select 添加 class
              addClassforOption="try3" // 如果要在 Option 添加 class
            />
          </div>
          <div className={styles.inputstyle}>
            <div className={styles.inputbar}>
              <InputText
                label="工作"
                name="job"
                value={aaa.job}
                getValue={setJob}
                getName={setJobName}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <div>
            <TextArea
              id="profile"
              label="自我介紹"
              name="profile"
              value={aaa.profile}
              placeholder="輸入文字啊"
              width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
              addClassforLabel="test123" // 如果要在 label 添加 class
              addClassforTextarea="test321" // 如果要在 textarea 添加 class
              getValue={setProfile}
              getName={setProfileName}
              required={false} // true：必填，false：非必填
            />
          </div>
          <div className={styles.inputstyle}>
            <InputText
              label="手機"
              name="mobile"
              value={aaa.mobile}
              getValue={setMobile}
              getName={setMobileName}
              width="input-width-100pa"
            ></InputText>
          </div>
          <div className="d-flex justify-content-end gap-3">
            <BtnNormal
              type="button"
              value="button"
              btnText="上一頁"
              addClassforButton="btn-dark"
              onClick={() => {
                setPage(1)
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
