import React, { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import AuthContext from '@/context/AuthContext'


import TextArea from '@/components/common/input/textarea'
import Btn from '@/components/common/button/btn-normal'
import Swal from 'sweetalert2'
import Star from '@/components/common/star/star-rate'

import styles from '@/components/reserve/reserve.module.css'
import InfoSty from '@/components/reserve/reserve.module.css'


export default function Comment({
  reservationId,
  restId = 0,
  restName,
  restAddress,
  restImg,
}) {
  const { auth } = useContext(AuthContext)

  const [textAreaValue, setTextAreaValue] = useState('')
  const [textAreaName, setTextAreaName] = useState()
  const [starValue, setStarValue] = useState('')

  // 取得星等值
  const handleRadionChange = (e) => {
    setStarValue(e.target.value)
  }

  // 監控按鈕關閉modal屬性
  const [modalClose, setModalClose] = useState('')
  console.log('modalClose', modalClose, 'aaaa')

  // 初始化textArea、星等驗證訊息
  const [commentVerify, setCommentsVerify] = useState(false)
  const [starVerify, setStarVerify] = useState(true)


  // 呼叫跳出驗證訊息 
  const verifyHint = () => {
    textAreaValue == '' && setCommentsVerify(false)
    textAreaValue == undefined && setCommentsVerify(false)
    starValue == '' && setStarVerify(false)

  }

  // 監控表單是否可以送出；通過驗證則消除驗證訊息
  useEffect(() => {
    textAreaValue && setModalClose('modal')
    textAreaValue == '' && setModalClose('')
    textAreaValue != '' && setCommentsVerify(true)
    starValue != '' && setStarVerify(true)


  }, [
    textAreaValue, starValue
  ])
  console.log('textAreaValue', textAreaValue)

  // 提交表單
  const handleSubmit = (e) => {
    e.preventDefault()

    if (textAreaValue == '' || textAreaValue == undefined) return
    console.log('送出表單了')


    Swal.fire({
      width: 400,
      text: '評論已發布',
      icon: 'success',
      iconColor: '#FABCBF',
      color: '#674C87',
      confirmButtonColor: '#674C87',
      showConfirmButton: true,
      // timer: 1500,
    })

    const formData = new FormData(document.getElementById('comment'))
    fetch('http://localhost:3002/comment/addcomment', {
      method: 'POST',
      body: formData,
    })

  }

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="container">
              <form id="comment" onSubmit={handleSubmit}>
                <div className="modal-body my-3">
                  <h1 className={`text-center ${styles.cardHead} mb-2`}>
                    {restName}
                  </h1>
                    <input name="RestID" id="RestID" value={restId} hidden />
                  <input
                    name="member_id"
                    id="member_id"
                    value={auth.member_id}
                    hidden
                  />
                  <p className="text-center">{restAddress}</p>
                  <div className="d-flex justify-content-center align-items-center py-2">
                    <Image
                      src={`http://localhost:3002/face/${auth.images}`}
                      className={styles.avatar}
                      alt="大頭貼"
                      width={50}
                      height={50}
                    />
                    <p className="my-auto mx-3">{auth.member_name}</p>
                  </div>
                  <p
                    className={`text-center restLabel ${styles.cardHead} mt-4`}
                  >
                    請給予餐廳評分
                  </p>
                  <div className={`d-flex starBlock justify-content-center`}>
                    <div className="star-cb-group">
                      <input
                        type="radio"
                        id="rating-5"
                        name="rating"
                        value="5"
                        checked={starValue === "5"}
                        onChange={handleRadionChange}
                      />
                      <label for="rating-5" className="restRadioLabel">
                        5
                      </label>
                      <input
                        type="radio"
                        id="rating-4"
                        name="rating"
                        value="4"
                        checked={starValue === "4"}
                        onChange={handleRadionChange}
                      />
                      <label for="rating-4" className="restRadioLabel">
                        4
                      </label>
                      <input
                        type="radio"
                        id="rating-3"
                        name="rating"
                        value="3"
                        checked={starValue === "3"}
                        onChange={handleRadionChange}
                      />
                      <label for="rating-3" className="restRadioLabel">
                        3
                      </label>
                      <input
                        type="radio"
                        id="rating-2"
                        name="rating"
                        value="2"
                        checked={starValue === "2"}
                        onChange={handleRadionChange}
                      />
                      <label for="rating-2" className="restRadioLabel">
                        2
                      </label>
                      <input
                        type="radio"
                        id="rating-1"
                        name="rating"
                        value="1"
                        checked={starValue === "1"}
                        onChange={handleRadionChange}
                      />
                      <label for="rating-1" className="restRadioLabel">
                        1
                      </label>
                    </div>
                  </div>
                  {!starVerify && (
                    <p className={`${InfoSty.verifyHint} restLabel mt-2 text-center`}>
                      尚未點選評分
                    </p>
                  )}
                  <div className="mt-3">
                    <TextArea
                      id=""
                      name="ComtText"
                      label="請寫下您的評論"
                      addClassforLabel="ComentTextArea text-center"
                      addClassforDiv="restLabel text-center"
                      width="input-width-70pa"
                      getValue={setTextAreaValue}
                      getName={setTextAreaName}
                      required={false}
                    />
                    {!commentVerify && (
                      <p className={`${InfoSty.verifyHint} restLabel mt-2 text-center`}>
                        請填寫評論內容
                      </p>
                    )}
                  </div>
                </div>
                <div className="modal-footer">
                  <Btn
                    btnText="取消評論"
                    addClassforButton="btn-light"
                    bsModl3={`modal`}
                  />
                  {modalClose == '' && (
                    <Btn
                      btnText="發布評論"
                      type="submit"
                      value="submit"
                      addClassforButton="btn-dark ms-3" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                      disabled={false} // fase：可點，true：不可點
                      bsModl3=""
                      onClick={verifyHint}
                    />
                  )}

                  {modalClose == 'modal' && (
                    <Btn
                      btnText="發布評論"
                      type="submit"
                      value="submit"
                      addClassforButton="btn-dark ms-3" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                      disabled={false} // fase：可點，true：不可點
                      bsModl3={`modal`}
                    />
                  )}

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
