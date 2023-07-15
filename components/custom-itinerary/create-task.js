import { useState, useEffect } from 'react'
import styles from './create-task.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { TbPhotoPlus } from 'react-icons/tb'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import InputText from '../common/input/input-text'
import AreaText from '../common/input/textarea'
import InputRadioGroup from '../common/input/input-radio-group'
import InputNumber from '../common/input/input-number'
import BtnNormal from '../common/button/btn-normal'
import ImageItemPpreview from './image-item-preview'

export default function CreateTask() {
  // 追蹤是否觸發了已經提交操作
  const [submitted, setSubmitted] = useState(false)
  // 追蹤點選動作
  const [clickSubmitted, setClickSubmitted] = useState(false)

  const [inputValue3, setInputValue3] = useState('')
  const [inputName3, setInputName3] = useState('')
  // textarea
  const [inputValue5, setInputValue5] = useState('')
  const [inputName5, setInputName5] = useState('')
  //是否公開？ input-radio
  const [inputValue4, setInputValue4] = useState('')
  const [inputName4, setInputName4] = useState('')
  const [inputLabel4, setInputLabel4] = useState('')
  // input-number
  const [inputValue7, setInputValue7] = useState('')
  const [inputName7, setInputName7] = useState('')

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

    console.log('輸入的資料3：', inputValue3 + ' ，name 為：', inputName3)

  }

  // const [files, setFiles] = useState([])
  // const handleSetFiles = (file, fid) => {
  //   console.log(file, fid)
  //   setFiles([...files, { file, fid }])
  // }

  // const router = useRouter()
  // console.log(router)
  // const [data, setData] = useState({
  //   redirect: '',
  //   totalRows: 0,
  //   perPage: 4,
  //   totalPages: 0,
  //   page: 1,
  //   rows: [],
  // })

  // useEffect(() => {
  //   const usp = new URLSearchParams(router.query)

    // API串接
  //   fetch('http://localhost:3002/itinerary ', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify()
  //   })
  //     .then((r) => r.json())
  //     .then((data) => {
  //       console.log(data)
  //       setData(data)
  //     })
  // }, [])

  return (
    <>
     <article className="blog-post">
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <Link href="/custom-itinerary">
            <h4>
              <FaArrowLeftLong />
            </h4>
          </Link>
          <h3 className="mx-auto">新增行程</h3>
        </div>
        {/* 行程封面照片 */}
        {/* <ImageItemPpreview setFiles={handleSetFiles} alt="..." fid="example-fid" /> */}

        {/* 表格 */}
        <div className={styles.formbody}>
          <div className="container ">
            <InputText
              id="ID1"
              name="name3"
              label="行程名稱"
              value="" // 預設文字
              placeholder="請輸入"
              width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
              addClassforLabel="classTest1" // 如果要在 label 添加 class
              addClassforInput="classTest2" // 如果要在 input 添加 class
              getValue={setInputValue3} // 獲取填寫的數值
              getName={setInputName3} // 獲取 name
              required={true} // true：必填，false：非必填
            ></InputText>
             <div className="mb-3">
              <label> 出發日期</label>
              <input
                type="date"
                className="form-control"
                name="date"
                placeholder="請輸入"
              />
            </div>

            <AreaText
              id="Area"
              label="說明"
              name="BIGTEXT"
              value=""
              placeholder="輸入文字啊"
              width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
              addClassforLabel="test123" // 如果要在 label 添加 class
              addClassforTextarea="test321" // 如果要在 textarea 添加 class
              getValue={setInputValue5}
              getName={setInputName5}
              required={true} // true：必填，false：非必填
            ></AreaText>
            <InputRadioGroup
              label="是否要公開？"
              name="Public"
              // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
              idGroup={['PublicID', 'nonPublicID']} // 個別 radio 的 ID
              valueGroup={['publicValue', 'nonPublicValue']} // 個別 radio 的 name
              labelGroup={['公開', '不公開']} // 個別標籤
              getValue={setInputValue4}
              getName={setInputName4}
              getLabel={setInputLabel4}
              addClassforTitleLabel="classTest1" // 如果要在標題 label 添加 class
              addClassforEachLabel="classTest2" // 如果要在個別選項 label 添加 class
              addClassforInput="classTest3" // 如果要在 input 添加 class
            ></InputRadioGroup>
            <InputNumber
              id="PeopleNum"
              label="請選擇人數"
              name="PeopleNum"
              placeholder="請選擇人數"
              value={0} // 預設數字
              max={99} // 最大可選數字
              min={0} // 最小可選數字
              step={1} // 右邊箭頭按一次的數字區間
              hideArrows={false} // true：隱藏右側上下箭頭按鈕，false：顯示
              getValue={setInputValue7}
              getName={setInputName7}
              width="input-width-5rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
              addClassforLabel="try1" // 如果要在 label 添加 class
              addClassforInput="try2 test123" // 如果要在 input 添加 class
            ></InputNumber>
            <AreaText
              id="Area"
              label="備註"
              name="BIGTEXT"
              value=""
              placeholder="輸入文字啊"
              width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
              addClassforLabel="test123" // 如果要在 label 添加 class
              addClassforTextarea="test321" // 如果要在 textarea 添加 class
              getValue={setInputValue5}
              getName={setInputName5}
              required={true} // true：必填，false：非必填
            ></AreaText>
            {/* btn */}
            <div className="d-flex justify-content-center mx-2">
              <BtnNormal
                type="submit"
                value="submit"
                btnText="取消"
                addClassforButton="btn-white" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                disabled={false} // fase：可點，true：不可點
              ></BtnNormal>
               {/*<BtnNormal
                type="submit"
                value="submit"
                btnText="建立"
                addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                disabled={false} // fase：可點，true：不可點
              ></BtnNormal> */}
            </div>
          </div>
        </div>
      </form>
      </article>
    </>
  )
}
