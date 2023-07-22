import { useState, useEffect } from 'react'
import { Router, useRouter } from 'next/router'
import Link from 'next/link'
import styles from './create-task.module.css'
import Image from 'next/image'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { TbPhotoPlus } from 'react-icons/tb'
import InputText from '../common/input/input-text'
import AreaText from '../common/input/textarea'
import InputRadio from '../common/input/input-radio-group'
import InputNumber from '../common/input/input-number'
import BtnNormal from '../common/button/btn-normal'
import ImageItemPpreview from './image-item-preview'
import InputDate from '../common/input/input-date'

export default function CreateTask() {
  const router = useRouter()
  // 追蹤是否觸發了已經提交操作
  const [submitted, setSubmitted] = useState(false)
  // 追蹤點選動作
  const [clickSubmitted, setClickSubmitted] = useState(false)

  const [inputSubjectValue, setinputSubjectValue] = useState('')
  const [inputSubject, setInputSubject] = useState('')

  const [inputDateValue, setInputDateVlaue] = useState('')
  const [inputDate, setInputDate] = useState('')

  const [inputDescriptionValue, setInputDescriptionValue] = useState('')
  const [inputDescription, setInputDescription] = useState('')

  const [publicValue, setPublicValue] = useState('')
  const [publicName, setPublicName] = useState('')
  const [publicLabel, setPublicLabel] = useState('')

  const [peopleNumValue, setPeopleNumValue] = useState('')
  const [peopleNum, setPeopleNum] = useState('')

  const [inputNoteValue, setInputNoteValue] = useState('')
  const [inputNote, setInputNote] = useState('')

  //上傳照片
  const [file, setFiles] = useState(null)

  //除錯用
  const [error8, setError8] = useState(false)
  const [errorTracker8, setErrorTracker8] = useState('')

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
    //點選建立後3秒後跳轉
    // setTimeout(() => {
    //   router.push('/custom-itinerary/arrange-schedule')
    // }, 3000)

    // console.log('行程名稱：', inputSubjectValue)
    // console.log('出發日期：',inputDateValue)
    // console.log('說明：',inputDescriptionValue)
    // console.log('是否公開？',publicLabel+ ' ，value 為：',
    // publicValue + ' ，name 為：',
    // publicName)
    // console.log('人數：',peopleNumValue)
    // console.log('備註：',inputNoteValue)

    const formData = new FormData(document.getElementById('createInit'))
    console.log('document::::',document.getElementById('createInit'))
    console.log(formData)
    // API串接
    fetch('http://localhost:3002/custom-itinerary', {
      method: 'POST',
      body: formData,
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
      })


      // fetch('http://localhost:3002/try-preview', {
      //   method: 'POST',
      //   body: formData,
      // })
      //   .then((r) => r.json())
      //   .then((data) => {
      //     console.log(data)
      //   })


    // const fd = new formData()
    // console.log('fd===>', fd)
    // //上傳照片  `
    // fetch('http://localhost:3002/try-previw'),
    //   {
    //     method: 'POST',
    //     body: fd,
    //   }
    //     .then((response) => response.json())
    //     .then((result) => {
    //       console.log('Success:', result)
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error)
    //     })
  }

  //  點選取消後回到首頁
  const handleCancel = () => {
    router.push('/ ')
  }

  return (
    <>
      <article className="blog-post">
        <form onSubmit={handleSubmit} id="createInit" name="add">
          <div className={`${styles.coverTitle}`}>
            <Link className={styles.link} href="/member/itinerary">
              <FaArrowLeftLong />
            </Link>
            <h3 className={styles.h3}>新增行程</h3>
          </div>
          {/* <div>
            <label className={` ${styles.label}`}>旅程封面圖片</label>
            <ImageItemPpreview name="img" />
          </div> */}
          {/* 表格 */}
          <div className={styles.formbody}>
          <div>
            <label className={` ${styles.label}`}>旅程封面圖片</label>
            <ImageItemPpreview name="img" />
          </div>


            <div className="container ">
              <InputText
                id="inputSubject"
                name="name"
                label="行程名稱"
                value="" // 預設文字
                placeholder="請輸入"
                width="input-width-100pa"
                getValue={setinputSubjectValue} // 獲取填寫的數值
                getName={setInputSubject} // 獲取 name
                required={true} // true：必填，false：非必填
              ></InputText>

              <InputDate
                id="inputDate"
                name="date"
                label="出發日期"
                width="input-width-10rem"
                value={inputDateValue}
                // getvalue={setInputDateVlaue}
                // getname={setInputDate}
              ></InputDate>

              <AreaText
                id="description"
                label="說明"
                name="description"
                value=""
                placeholder="輸入文字啊"
                width="input-width-100pa"
                getValue={setInputDescriptionValue}
                getName={setInputDescription}
                required={true} // true：必填，false：非必填
              ></AreaText>

              <InputRadio
                label="是否要公開？"
                name="public"
                // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
                idGroup={['PublicID', 'nonPublicID']} // 個別 radio 的 ID
                valueGroup={['publicValue', 'nonPublicValue']} // 個別 radio 的 name
                labelGroup={['公開', '不公開']} // 個別標籤
                defaultChecked="publicValue"
                getValue={setPublicValue}
                getName={setPublicName}
                getLabel={setPublicLabel}
              ></InputRadio>

              <InputNumber
                id="PeopleNum"
                label="請選擇人數"
                name="ppl"
                placeholder="請選擇人數"
                value={0} // 預設數字
                max={99} // 最大可選數字
                min={0} // 最小可選數字
                step={1} // 右邊箭頭按一次的數字區間
                hideArrows={false} // true：隱藏右側上下箭頭按鈕，false：顯示
                getValue={setPeopleNumValue}
                getName={setPeopleNum}
                width="input-width-5rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
                addClassforLabel="try1" // 如果要在 label 添加 class
                addClassforInput="try2 test123" // 如果要在 input 添加 class
              ></InputNumber>

              <AreaText
                id="Area"
                label="備註"
                name="note"
                value=""
                placeholder="輸入文字啊"
                width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
                addClassforLabel="test123" // 如果要在 label 添加 class
                addClassforTextarea="test321" // 如果要在 textarea 添加 class
                getValue={setInputNoteValue}
                getName={setInputNote}
                required={true} // true：必填，false：非必填
              ></AreaText>
              {/* btn */}
              <div className="d-flex justify-content-center">
                <div className="mx-5">
                  <button
                    type="button"
                    className="btn btn-white"
                    onClick={handleCancel}
                  >
                    取消
                  </button>
                </div>
                <div className="mx-5">
                  <BtnNormal
                    type="submit"
                    value="submit"
                    btnText="建立"
                    addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                    disabled={false} // fase：可點，true：不可點
                  ></BtnNormal>
                </div>
              </div>
            </div>
          </div>
        </form>
      </article>
    </>
  )
}
