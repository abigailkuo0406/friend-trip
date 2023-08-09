import React, { useState, useContext } from 'react'
import Image from 'next/image'

import TextArea from '@/components/common/input/textarea'
import Btn from '@/components/common/button/btn-normal'
import AuthContext from '@/context/AuthContext'
import styles from '@/components/reserve/reserve.module.css'

export default function Comment({
  reservationId,
  restId = 0,
  restName,
  restImg,
}) {
  const { auth } = useContext(AuthContext)
  // console.log('評論元件的auth', auth)

  const [textAreaValue, setTextAreaValue] = useState()
  const [textAreaName, setTextAreaName] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(document.getElementById('comment'))
    fetch('http://localhost:3002/comment/addcomment', {
      method: 'POST',
      body: formData,
    })
  }

  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="container position-relative my-4">
              <form id="comment" onSubmit={handleSubmit}>
                <div class="modal-body">
                  <h1 className="text-center">{restName}</h1>
                  <p className="text-center">訂單編號{reservationId}</p>
                  <input name="RestID" id="RestID" value={restId} hidden />
                  <input
                    name="member_id"
                    id="member_id"
                    value={auth.member_id}
                    hidden
                  />
                  <p className="text-center">餐廳地址</p>
                  <div className="d-flex justify-content-center align-items-center  ">
                    <Image
                      src={`http://localhost:3002/face/${auth.images}`}
                      className={styles.avatar}
                      alt="大頭貼"
                      width={50}
                      height={50}
                    />
                    <p className="my-auto mx-3">{auth.member_name}</p>
                  </div>
                  <p className="text-center restLabel mt-4">請給予餐廳評分</p>
                  <div className={`d-flex starBlock justify-content-center`}>
                    <div class="star-cb-group">
                      <input
                        type="radio"
                        id="rating-5"
                        name="rating"
                        value="5"
                      />
                      <label for="rating-5" className="restRadioLabel">
                        5
                      </label>
                      <input
                        type="radio"
                        id="rating-4"
                        name="rating"
                        value="4"
                      />
                      <label for="rating-4" className="restRadioLabel">
                        4
                      </label>
                      <input
                        type="radio"
                        id="rating-3"
                        name="rating"
                        value="3"
                      />
                      <label for="rating-3" className="restRadioLabel">
                        3
                      </label>
                      <input
                        type="radio"
                        id="rating-2"
                        name="rating"
                        value="2"
                      />
                      <label for="rating-2" className="restRadioLabel">
                        2
                      </label>
                      <input
                        type="radio"
                        id="rating-1"
                        name="rating"
                        value="1"
                        checked
                      />
                      <label for="rating-1" className="restRadioLabel">
                        1
                      </label>
                      {/* <input type="radio" id="rating-0" name="rating" value="0" class="star-cb-clear" /><label for="rating-0">0</label> */}
                    </div>
                  </div>
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
                      required="true"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <Btn
                    btnText="取消評論"
                    addClassforButton="btn-light"
                    bsModl3={`modal`}
                  />
                  <Btn
                    btnText="發布評論"
                    type="submit"
                    value="submit"
                    addClassforButton="btn-dark ms-3" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                    disabled={false} // fase：可點，true：不可點
                    bsModl3={`modal`}
                  />
                  {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
