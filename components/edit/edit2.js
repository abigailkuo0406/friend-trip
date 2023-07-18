import React from 'react'
import { useState } from 'react'
import styles from './edit2.module.css'
import InputText from '@/components/common/input/input-text-flex'
import InputTextDouble from '@/components/common/input/input-text-double'
import SelectOption from '@/components/common/input/select-option-flex'
import InputRadioGroup from '@/components/common/input/input-radio-group-flex'
import TextArea from '@/components/common/input/textarea-flex'
import BtnNormal from '@/components/common/button/btn-normal'

export default function Edit() {
  const [inputValue1, setInputValue1] = useState('')
  const [inputValue2, setInputValue2] = useState('')
  const [InputName1, setInputName1] = useState('')
  const [InputName2, setInputName2] = useState('')
  const [inputValue6, setInputValue6] = useState('')
  const [InputName6, setInputName6] = useState('')
  const [inputValue4, setInputValue4] = useState('')
  const [InputName4, setInputName4] = useState('')
  const [InputLabel4, setInputLabel4] = useState('')
  const [inputName5, setInputName5] = useState('')
  const [inputValue5, setInputValue5] = useState('')
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
                getValue={() => 'whatever'}
                getName={() => 'whatever'}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <div className={styles.inputstyle}>
            <div className={styles.inputbar}>
              <InputText
                label="體重"
                getValue={() => 'whatever'}
                getName={() => 'whatever'}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <SelectOption
            id="星座"
            label="請選擇你的星座"
            name="星座"
            selectedDefault="value" //預設選項，可不填，填寫 value
            valueGroup={['noodles', 'rice', 'pasta', 'hamburger', 'BBQ']}
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
            getValue={setInputValue6}
            getName={setInputName6}
            width="input-width-10rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
            addClassforLabel="try1" // 如果要在 label 添加 class
            addClassforSelect="try2" // 如果要在 Select 添加 class
            addClassforOption="try3" // 如果要在 Option 添加 class
          />
          <div className={styles.inputstyle}>
            <SelectOption
              id="星座"
              label="血型"
              name="血型"
              selectedDefault="value" //預設選項，可不填，填寫 value
              valueGroup={['noodles', 'rice', 'pasta', 'hamburger', 'BBQ']}
              optionGroup={['A', 'B', 'O', 'AB']}
              getValue={setInputValue6}
              getName={setInputName6}
              width="input-width-10rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
              addClassforLabel="try1" // 如果要在 label 添加 class
              addClassforSelect="try2" // 如果要在 Select 添加 class
              addClassforOption="try3" // 如果要在 Option 添加 class
            />
          </div>
          <div className={styles.inputstyle}>
            <InputRadioGroup
              label="抽菸"
              name="animal"
              // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
              idGroup={['DogID', 'CatID']} // 個別 radio 的 ID
              valueGroup={['dogValue', 'catValue']} // 個別 radio 的 name
              labelGroup={['有', '沒有']} // 個別標籤
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
            <InputRadioGroup
              label="酒精"
              name="animal"
              // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
              idGroup={['DogID', 'CatID', 'catValue']} // 個別 radio 的 ID
              valueGroup={['dogValue', 'catValue', 'catValue']} // 個別 radio 的 name
              labelGroup={['滴酒不沾', '小酌', '酒豪']} // 個別標籤
              checked="value" // 預設勾選，需填入 value，只能擇一
              getValue={setInputValue4}
              getName={setInputName4}
              getLabel={setInputLabel4}
              addClassforTitleLabel="classTest1" // 如果要在標題 label 添加 class
              addClassforEachLabel="classTest2" // 如果要在個別選項 label 添加 class
              addClassforInput="classTest3" // 如果要在 input 添加 class
            ></InputRadioGroup>
          </div>
          <div className={styles.inputstyle}>
            <SelectOption
              id="星座"
              label="教育程度"
              name="教育程度"
              selectedDefault="value" //預設選項，可不填，填寫 value
              valueGroup={['noodles', 'rice', 'pasta', 'hamburger', 'BBQ']}
              optionGroup={['國小', '國中', '高中', '學士', '碩士', '博士']}
              getValue={setInputValue6}
              getName={setInputName6}
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
                getValue={() => 'whatever'}
                getName={() => 'whatever'}
                width="input-width-100pa"
              ></InputText>
            </div>
          </div>
          <div>
            <TextArea
              id="Area"
              label="自我介紹"
              name="自我介紹"
              value="自我介紹轎討美例平爸的美今記與。王進將采五處是常一主城度斜有許誓我聞人懼沾至攸站…；中別光摯現觀樹角討撒此聲法！穩在士致猿到受禾陳方柴弟陳度上報傾實體嘶死至過…或望白梓場了了知們妞間跟，一西民式速盎水在對龍進"
              placeholder="輸入文字啊"
              width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
              addClassforLabel="test123" // 如果要在 label 添加 class
              addClassforTextarea="test321" // 如果要在 textarea 添加 class
              getValue={setInputValue5}
              getName={setInputName5}
              required={true} // true：必填，false：非必填
            />
          </div>
          <div className={styles.inputstyle}>
            <InputTextDouble
              /* 第一個 input */
              id1="ID1"
              name1="name1"
              label1="問題1"
              value1="預設1" // 預設文字
              width1="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
              addClassforLabel1="" // 如果要在 label 添加 class
              addClassforInput1="" // 如果要在 input 添加 class
              getValue1={setInputValue1} // 獲取填寫的數值
              getName1={setInputName1} // 獲取 name
              required1={true} // true：必填，false：非必填
              /* 第二個 input */
              id2="ID2"
              name2="name2"
              label2="問題2"
              value2="預設2" // 預設文字
              width2="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
              addClassforLabel2="classTest1" // 如果要在 label 添加 class
              addClassforInput2="classTest2" // 如果要在 input 添加 class
              getValue2={setInputValue2} // 獲取填寫的數值
              getName2={setInputName2} // 獲取 name
              required2={true} // true：必填，false：非必填
            ></InputTextDouble>
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
