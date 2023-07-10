import React, { useState } from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import InputText from '@/components/common/input/input-text'
import InputRadioGroup from '@/components/common/input/input-radio-group'
import AreaText from '@/components/common/input/textarea'
import SelectOption from '@/components/common/input/select-option'
import InputNumber from '@/components/common/input/input-number'
import InputCheckboxGroup from '@/components/common/input/input-checkbox-group'
import BtnNormal from '@/components/common/button/btn-normal'

import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'

export default function AdminIndex() {
  // input-text
  const [inputValue1, setInputValue1] = useState('')
  const [inputName1, setInputName1] = useState('')
  const [inputValue2, setInputValue2] = useState('')
  const [inputName2, setInputName2] = useState('')
  const [inputValue3, setInputValue3] = useState('')
  const [inputName3, setInputName3] = useState('')
  // input-radio
  const [inputValue4, setInputValue4] = useState('')
  const [inputName4, setInputName4] = useState('')
  const [inputLabel4, setInputLabel4] = useState('')
  // textarea
  const [inputValue5, setInputValue5] = useState('')
  const [inputName5, setInputName5] = useState('')
  // select-option
  const [inputValue6, setInputValue6] = useState('')
  const [inputName6, setInputName6] = useState('')
  // input-number
  const [inputValue7, setInputValue7] = useState('')
  const [inputName7, setInputName7] = useState('')
  // input-checkbox
  const [inputValue8, setInputValue8] = useState([])
  const [inputName8, setInputName8] = useState('')
  const [inputValue9, setInputValue9] = useState([])
  const [inputName9, setInputName9] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('輸入的資料1：', inputValue1 + ' ，name 為：', inputName1)
    console.log('輸入的資料2：', inputValue2 + ' ，name 為：', inputName2)
    console.log('輸入的資料3：', inputValue3 + ' ，name 為：', inputName3)
    console.log(
      '選擇的資料4：',
      inputLabel4 + ' ，value 為：',
      inputValue4 + ' ，name 為：',
      inputName4
    )
    console.log('輸入的資料5：', inputValue5 + ' ，name 為：', inputName5)
    console.log('選擇的資料6：', inputValue6 + ' ，name 為：', inputName6)
    console.log('輸入的數字7：', inputValue7 + ' ，name 為：', inputName7)
    console.log('勾選8：value 為：', inputValue8 + ' ，name 為：', inputName8)
    console.log('勾選9：value 為：', inputValue9 + ' ，name 為：', inputName9)
  }

  return (
    <>
      <article className="blog-post">
        <form onSubmit={handleSubmit}>
          <h2 className="display-5 link-body-emphasis mb-1">
            Sample blog post
          </h2>
          <InputText
            id="ID1"
            name="name1"
            label="問題1"
            value="預設1" // 預設文字
            block="false" // false 為一行兩個 input，tru3 為一行一個
            addClassforLabel="classTest1" // 如果要在 label 添加 class
            addClassforInput="classTest2" // 如果要在 input 添加 class
            getValue={setInputValue1} // 獲取填寫的數值
            getName={setInputName1} // 獲取 name
            required={false} // true：必填，false：非必填
          ></InputText>
          <InputText
            id="ID2"
            name="name2"
            label="問題2"
            value="" // 預設文字
            placeholder="測試2"
            block="false" // false 為一行兩個 input，tru3 為一行一個
            addClassforLabel="classTest1" // 如果要在 label 添加 class
            addClassforInput="classTest2" // 如果要在 input 添加 class
            getValue={setInputValue2} // 獲取填寫的數值
            getName={setInputName2} // 獲取 name
            required={true} // true：必填，false：非必填
          ></InputText>
          <InputText
            id="ID3"
            name="name3"
            label="問題3"
            value="" // 預設文字
            placeholder="測試3"
            block="true" // false 為一行兩個 input，tru3 為一行一個
            addClassforLabel="classTest1" // 如果要在 label 添加 class
            addClassforInput="classTest2" // 如果要在 input 添加 class
            getValue={setInputValue3} // 獲取填寫的數值
            getName={setInputName3} // 獲取 name
            required={true} // true：必填，false：非必填
          ></InputText>
          <InputRadioGroup
            label="動物大集合"
            name="animal"
            // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
            idGroup={['DogID', 'CatID', 'EagleID']} // 個別 radio 的 ID
            valueGroup={['dogValue', 'catValue', 'birdValue']} // 個別 radio 的 name
            labelGroup={['狗(dog)', '貓(cat)', '鳥(bird)']} // 個別標籤
            checked="birdValue" // 預設勾選，需填入 value，只能擇一
            getValue={setInputValue4}
            getName={setInputName4}
            getLabel={setInputLabel4}
            addClassforTitleLabel="classTest1" // 如果要在標題 label 添加 class
            addClassforEachLabel="classTest2" // 如果要在個別選項 label 添加 class
            addClassforInput="classTest3" // 如果要在 input 添加 class
          ></InputRadioGroup>
          <AreaText
            id="Area"
            label="文字標"
            name="BIGTEXT"
            value="哈哈哈哈"
            placeholder="輸入文字啊"
            addClassforLabel="test123" // 如果要在 label 添加 class
            addClassforTextarea="test321" // 如果要在 textarea 添加 class
            getValue={setInputValue5}
            getName={setInputName5}
            required={true} // true：必填，false：非必填
          ></AreaText>
          <SelectOption
            id="foods"
            label="選一個食物"
            name="foods"
            selectedDefault="pasta" //預設選項，可不填，填寫 value
            valueGroup={['noodles', 'rice', 'pasta', 'hamburger', 'BBQ']}
            optionGroup={['麵', '飯', '義大利麵', '漢堡', '烤肉']}
            getValue={setInputValue6}
            getName={setInputName6}
            addClassforLabel="try1" // 如果要在 label 添加 class
            addClassforSelect="try2" // 如果要在 Select 添加 class
            addClassforOption="try3" // 如果要在 Option 添加 class
          ></SelectOption>
          <InputNumber
            id="PeopleNum"
            label="請選擇人數"
            name="PeopleNum"
            placeholder="請選擇人數"
            value="50" // 預設數字
            max={99} // 最大可選數字
            min={2} // 最小可選數字
            getValue={setInputValue7}
            getName={setInputName7}
            addClassforLabel="try1" // 如果要在 label 添加 class
            addClassforInput="try2" // 如果要在 input 添加 class
          ></InputNumber>
          <InputCheckboxGroup
            label="是否訂閱電子報？"
            name="e-ads"
            // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
            idGroup={['yes']} // 個別 radio 的 ID
            valueGroup={['yes']} // 個別 radio 的 name
            labelGroup={['是']} // 個別標籤
            checkedValue={['yes']} // 預設勾選，需填入 value，格式為 Array
            getValue={setInputValue8}
            getName={setInputName8}
            addClassforTitleLabel="classTest1" // 如果要在標題 label 添加 class
            addClassforEachLabel="classTest2" // 如果要在個別選項 label 添加 class
            addClassforInput="classTest3" // 如果要在 input 添加 class
          ></InputCheckboxGroup>
          <InputCheckboxGroup
            label="興趣有什麼？"
            name="interest"
            // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
            idGroup={['playingID', 'travelingID', 'sleepingID']} // 個別 radio 的 ID
            valueGroup={['playingValue', 'travelingValue', 'sleepingValue']} // 個別 radio 的 name
            labelGroup={['玩遊戲', '出遊', '睡覺']} // 個別標籤
            checkedValue={['playingValue', 'sleepingValue']} // 預設勾選，需填入 value，格式為 Array
            getValue={setInputValue9}
            getName={setInputName9}
            addClassforTitleLabel="classTest1" // 如果要在標題 label 添加 class
            addClassforEachLabel="classTest2" // 如果要在個別選項 label 添加 class
            addClassforInput="classTest3" // 如果要在 input 添加 class
          ></InputCheckboxGroup>
          <BtnNormal
            type="submit"
            value="submit"
            btnText="送出"
            addIMGLeft // 增加左側圖示 // 使用 react-icon，記得要 import 進入
            addIMGRight={<BsArrowRightShort></BsArrowRightShort>} // 增加右側圖示 // 使用 react-icon，記得要 import 進入
            addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
          ></BtnNormal>
        </form>
      </article>
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
AdminIndex.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
