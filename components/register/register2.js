import React from 'react'
import { useState } from 'react'
import styles from './register2.module.css'
import InputText from '@/components/common/input/input-text-flex'
import InputTextDouble from '@/components/common/input/input-text-double'
import SelectOption from '@/components/common/input/select-option-flex'
import InputRadioGroup from '@/components/common/input/input-radio-group-flex'
import TextArea from '@/components/common/input/textarea-flex'
import BtnNormal from '@/components/common/button/btn-normal'

export default function RegisterCard() {
  const [member, setMember] = useState({
    height: '',
    weight: '',
    zodiac: '',
    bloodtype: '',
    smoke: '',
    alchohol: '',
    education_level: '',
    job: '',
    profile: '',
    mobile: '',
  })
  const [height, setHeight] = useState('')
  const [heightName, setHeightName] = useState('')
  const [weight, setWeight] = useState('')
  const [weightName, setWeightName] = useState('')
  const [zodiac, setZodiac] = useState('')
  const [zodiacName, setZodiacName] = useState('')
  const [bloodType, setBloodType] = useState('')
  const [bloodTypename, setBloodTypeName] = useState('')
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
                value={height}
                getValue={(value) => {
                  if (value >= 200) return setHeight(200)
                  // setHeight(value)
                }}
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
                getValue={setWeight}
                getName={setWeightName}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <SelectOption
            id="zodiac"
            label="請選擇你的星座"
            name="zodiac"
            selectedDefault="value" //預設選項，可不填，填寫 value
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
            getValue={setZodiac}
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
              selectedDefault="value" //預設選項，可不填，填寫 value
              valueGroup={['noodles', 'rice', 'pasta', 'hamburger', 'BBQ']}
              optionGroup={['A', 'B', 'O', 'AB']}
              getValue={setBloodType}
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
              checked="birdValue" // 預設勾選，需填入 value，只能擇一
              getValue={setSmoke}
              getName={setSmokeName}
              getLabel={setSmokeLabel}
              addClassforTitleLabel="classTest1" // 如果要在標題 label 添加 class
              addClassforEachLabel="classTest2" // 如果要在個別選項 label 添加 class
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
              checked="value" // 預設勾選，需填入 value，只能擇一
              getValue={setAlchohol}
              getName={setAlchoholName}
              getLabel={setAlchoholLabel}
              addClassforTitleLabel="classTest1" // 如果要在標題 label 添加 class
              addClassforEachLabel="classTest2" // 如果要在個別選項 label 添加 class
              addClassforInput="classTest3" // 如果要在 input 添加 class
            ></InputRadioGroup>
          </div>
          <div className={styles.inputstyle}>
            <SelectOption
              id="education"
              label="教育程度"
              name="education"
              selectedDefault="value" //預設選項，可不填，填寫 value
              valueGroup={['國小', '國中', '高中', '學士', '碩士', '博士']}
              optionGroup={['國小', '國中', '高中', '學士', '碩士', '博士']}
              getValue={setEducation}
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
              value="自我介紹轎討美例平爸的美今記與。王進將采五處是常一主城度斜有許誓我聞人懼沾至攸站…；中別光摯現觀樹角討撒此聲法！穩在士致猿到受禾陳方柴弟陳度上報傾實體嘶死至過…或望白梓場了了知們妞間跟，一西民式速盎水在對龍進"
              placeholder="輸入文字啊"
              width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
              addClassforLabel="test123" // 如果要在 label 添加 class
              addClassforTextarea="test321" // 如果要在 textarea 添加 class
              getValue={setProfile}
              getName={setProfileName}
              required={true} // true：必填，false：非必填
            />
          </div>
          <div className={styles.inputstyle}>
            <InputText
              label="手機"
              name="mobile"
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
            />
            <BtnNormal btnText="完成註冊" addClassforButton="btn-dark" />
          </div>
        </div>
      </div>
    </>
  )
}
