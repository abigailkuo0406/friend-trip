import React from 'react'
import { useState } from 'react'
import InputText from '@/components/common/input/input-text-flex'
import styles from './register.module.css'
import BtnNormal from '@/components/common/button/btn-normal'
import InputRadioGroup from '@/components/common/input/input-radio-group-flex'
export default function RegisterCard() {
  const [inputValue4, setInputValue4] = useState('')
  const [InputName4, setInputName4] = useState('')
  const [InputLabel4, setInputLabel4] = useState('')
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
                getValue={() => 'whatever'}
                getName={() => 'whatever'}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <div className={styles.inputstyle}>
            <div className={styles.inputbar}>
              <InputText
                label="密碼"
                getValue={() => 'whatever'}
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
            <div className={styles.inputbar}>
              <InputText
                label="身分證字號"
                getValue={() => 'whatever'}
                getName={() => 'whatever'}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <div className={styles.inputstyle}>
            <InputRadioGroup
              label="性別"
              name="animal"
              // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
              idGroup={['DogID', 'CatID']} // 個別 radio 的 ID
              valueGroup={['dogValue', 'catValue']} // 個別 radio 的 name
              labelGroup={['男', '女']} // 個別標籤
              checked="birdValue" // 預設勾選，需填入 value，只能擇一
              getValue={setInputValue4}
              getName={setInputName4}
              getLabel={setInputLabel4}
              addClassforTitleLabel="classTest1" // 如果要在標題 label 添加 class
              addClassforEachLabel="classTest2" // 如果要在個別選項 label 添加 class
              addClassforInput="classTest3" // 如果要在 input 添加 class
            ></InputRadioGroup>
          </div>
          <div className={styles.inputstyle}>
            <div className={styles.inputbar}>
              <InputText
                label="地區"
                getValue={() => 'whatever'}
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
            />
          </div>
        </div>
      </div>
    </>
  )
}
