import React, { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import InviteModal from '@/components/invite/invite-modal'
import Button from '@/components/common/button/btn-normal'
import AuthContext from '@/context/AuthContext'
import NumberInput from '@/components/common/input/input-number'
import RadioGroupInput from '@/components/common/input/input-radio-group'
import DateInput from '@/components/common/input/input-date2'
import RestPhoto from '@/components/restaurant/restaurant-photo'
import Comment from './comment'

import InfoSty from '@/components/restaurant/intro.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Swal from 'sweetalert2'

export default function restIntro({
  restId,
  restName,
  restAddress,
  restPhone,
  restTime,
  restMeal,
  restClass,
  restIntro,
  restImg,
}) {
  const router = useRouter()


  const restIntroArr = restIntro && restIntro.split('\n')
  console.log('restIntroArr', restIntroArr)

  //取得登入之會員資料
  const { auth } = useContext(AuthContext)

  // 定義Modal開關
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //預設訂位時間
  const [reserveTimeInputValue, setReserveTimeInputValue] = useState('')
  const [reserveTimeInputName, setReserveTimeInputName] = useState('')
  const [reserveTimeInputLabel, setReserveTimeInputLabel] = useState('')

  // 預設訂位日期
  const [reserveDateInputVale, setReserveDateInputValue] = useState('')
  const [reserveDateInputName, setReserveDateInputName] = useState('')
  // const [reserveDateInputLabel, setReserveDateInputLabel] = useState('')

  // 預設訂位人數
  const [reservePeopleNumValue, setReservePeopleNumValue] = useState('')
  const [reservePeopleNumName, setReservePeopleNumName] = useState('')

  const [inviteList, setInviteList] = useState([])
  const inviteListChange = (ivList) => {
    setInviteList(ivList)
  }

  const [cts, setComments] = useState([])
  // 取得評論資料
  useEffect(() => {
    if (!restId) return
    fetch('http://localhost:3002/comment', {
      method: 'POST',
      body: JSON.stringify({
        restId: restId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((c) => c.json())
      .then((ct) => {
        setComments(ct)
      })
  }, [restId])

  // 監控按鈕關閉modal屬性
  const [modalClose, setModalClose] = useState('')

  // 初始化訂位日期、時間與人數的驗證訊息
  const [dateVerify, setDateVerify] = useState(true)
  const [timeVerify, setTimeVerify] = useState(true)
  const [numOfPeopleVerify, setNumOfPeopleVerify] = useState(true)

  // 呼叫跳出驗證訊息
  const verifyHint = () => {
    reserveDateInputVale == '' && setDateVerify(false)
    !reserveTimeInputValue && setTimeVerify(false)
    inviteList.length > reservePeopleNumValue - 1 && setNumOfPeopleVerify(false)
  }

  // 監控表單是否可以送出；通過驗證則消除驗證訊息
  useEffect(() => {
    reserveDateInputVale &&
      reserveTimeInputValue &&
      inviteList.length <= reservePeopleNumValue - 1 &&
      setModalClose('modal')

    reserveDateInputVale &&
      reserveTimeInputValue &&
      inviteList.length > reservePeopleNumValue - 1 &&
      setModalClose('')

    reserveDateInputVale != '' && setDateVerify(true)
    reserveTimeInputValue && setTimeVerify(true)
    inviteList.length <= reservePeopleNumValue - 1 && setNumOfPeopleVerify(true)
  }, [
    reserveDateInputVale,
    reserveTimeInputValue,
    reservePeopleNumValue,
    inviteList.length,
  ])


  /* 提交訂位表單*/
  const handleSubmit = (event) => {
    event.preventDefault()
    if (reserveDateInputVale == '' || !reserveTimeInputValue) return

    // const formData = new FormData(document.getElementById('reserve'))

    fetch('http://localhost:3002/restaurant', {
      method: 'POST',
      // body: formData,
      body: JSON.stringify({
        member_id: auth.member_id,
        rest_id: restId,
        reserve_date: reserveDateInputVale,
        reserve_time: reserveTimeInputValue,
        reserve_people: reservePeopleNumValue,
        state: 1, //預定中 ==1 (no cancel) ;已取消== 0 (cancel)
        pass: 0, //預定中 ==0 (no pass) ;已完成 == 1 (pass)
        invites: inviteList,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    Swal.fire({
      width: 400,
      text: '您已完成訂位！',
      icon: 'success',
      iconColor: '#674C87',
      color: '#674C87',
      confirmButtonColor: '#674C87',
      showConfirmButton: true,
      // timer: 1500,
    })
    router.push('/member/reserve')
  }

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close me-3 modalClose"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body container-fluid">
              <div className="d-flex mx-5 my-3 row">
                <div className="mb-4">
                  {restId ? <RestPhoto file={restImg} rid={restId} /> : ''}
                </div>
                <div className={`${InfoSty.leftBox} mb-5`}>
                  <div className={`mb-4`}>
                    <div className={`${InfoSty.infoBox}`}>
                      <h2 className={`${InfoSty.commentTitle}`}>{restName}</h2>
                      {/* <div>星星</div> */}
                    </div>
                    <div className={`${InfoSty.infoBox}`}>
                      <p className={`${InfoSty.infoBox}`}>{restAddress}</p>
                      <p>{restPhone}</p>
                    </div>
                    <div className={`${InfoSty.infoBox}`}>
                      <label>營業時間</label>
                      <p>{restTime}</p>
                      <label>料理特色</label>
                      <p>
                        {restMeal}
                        {restClass}
                      </p>
                      <label>訂位須知</label>
                      <p>{restIntroArr && restIntroArr[0]}</p>
                      <p>{restIntroArr && restIntroArr[1]}</p>
                      <p>{restIntroArr && restIntroArr[2]}</p>

                    </div>
                  </div>

                  <div className={`${InfoSty.infoBox} ${InfoSty.line}`}>
                    <div className={`${InfoSty.line} ${InfoSty.lineBox}`}>
                      <h4 className={`py-3 ps-3`}>訂位</h4>
                    </div>
                    <form
                      id="reserve"
                      onSubmit={handleSubmit}
                      className="py-3 ms-3"
                    >
                      <div className={`${InfoSty.infoBox} mb-4`}>
                        <DateInput
                          id="reserveDate"
                          name="reserve_date"
                          label="訂位日期"
                          width="input-width-10rem"
                          getValue={setReserveDateInputValue}
                          getName={setReserveDateInputName}
                          addClassforLabel={InfoSty.infolabel}
                          addClassforDiv={`restLabel`}
                        />
                        {!dateVerify && (
                          <p className={`${InfoSty.verifyHint} restLabel mt-2`}>
                            尚未選擇預定日期
                          </p>
                        )}
                      </div>
                      <div className={`${InfoSty.infoBox} mb-4`}>
                        <div className={`d-flex mt-2`}>
                          <RadioGroupInput
                            label="訂位時間"
                            name="reserve_time"
                            // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
                            idGroup={['TimeID1', 'TimeID2', 'TimeID3', 'TimeID4', 'TimeID5', 'TimeID6']} // 個別 radio 的 ID
                            valueGroup={['11:30', '12:30', '13:30', '17:30', '18:30', '19:30']} // 個別 radio 的 name
                            labelGroup={['11:30', '12:30', '13:30', '17:30', '18:30', '19:30']} // 個別標籤
                            getValue={setReserveTimeInputValue}
                            getName={setReserveTimeInputName}
                            getLabel={setReserveTimeInputLabel}
                            addClassforTitleLabel={InfoSty.infolabel} // 如果要在標題 label 添加 class
                            addClassforEachLabel={`btn restRadiobtn ${InfoSty.radioItem} restRadioLabel me-3`} // 如果要在個別選項 label 添加 class
                            addClassforInput={`btn-check restRadiobtn-check`} // 如果要在 input 添加 class
                            addClassforDiv={`restLabel`}
                          />
                        </div>
                        {!timeVerify && (
                          <p className={`${InfoSty.verifyHint} restLabel mt-2`}>
                            尚未選擇預定時間
                          </p>
                        )}
                      </div>

                      <div className={`${InfoSty.infoBox}`}>
                        <NumberInput
                          id="PeopleNum"
                          label="訂位人數"
                          name="reserve_people"
                          placeholder="請選擇人數"
                          value={0} // 預設數字
                          max={4} // 最大可選數字
                          min={1} // 最小可選數字
                          step={1} // 右邊箭頭按一次的數字區間
                          hideArrows={false} // true：隱藏右側上下箭頭按鈕，false：顯示
                          getValue={setReservePeopleNumValue}
                          getName={setReservePeopleNumName}
                          width="input-width-5rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
                          addClassforLabel="try1" // 如果要在 label 添加 class
                          addClassforInput="try2 test123" // 如果要在 input 添加 class
                          addClassforDiv={`restLabel`}
                        />
                      </div>
                      <label className="mt-4">邀請好友</label>

                      <div
                        id="inviteList"
                        className={`d-flex justify-content-start mt-3 me-2`}
                      >
                        {inviteList.map((v, i) => {
                          return (
                            // 陣列中有姓名才顯示li
                            <div key={i} className="me-2">
                              {v.inviteName ? (
                                <li>
                                  <input
                                    name="iv_member_id"
                                    value={v.inviteId}
                                    hidden
                                  />

                                  <Image
                                    src={v.inviteImg}
                                    className={`${InfoSty.avatar}`}
                                    alt={v.inviteImg}
                                    width={50}
                                    height={50}
                                  />
                                </li>
                              ) : (
                                <li hidden></li>
                              )}
                            </div>
                          )
                        })}
                        <Button
                          btnText={
                            <AiOutlinePlusCircle className={InfoSty.plus} />
                          }
                          bsModle1="#exampleModalToggle2"
                          bsModle2="modal"
                          addClassforButton={InfoSty.ivBtn}
                        />
                      </div>

                      {!numOfPeopleVerify && (
                        <p className={`${InfoSty.verifyHint} restLabel mt-2`}>
                          最多可邀請{` ${reservePeopleNumValue - 1} `}位好友
                        </p>
                      )}

                      <div
                        id="submitButton"
                        className="d-flex justify-content-end pe-4"
                      >
                        {modalClose == '' && (
                          <Button
                            btnText="確認訂位"
                            addClassforButton="btn-dark mt-3" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                            disabled={false} // fase：可點，true：不可點
                            bsModl3=""
                            onClick={verifyHint}
                          ></Button>
                        )}
                        {modalClose == 'modal' && (
                          <Button
                            type="submit"
                            value="submit"
                            btnText="確認訂位"
                            addClassforButton="btn-dark mt-3" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                            disabled={false} // fase：可點，true：不可點
                            bsModl3="modal"
                          ></Button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
                <div>
                  <div className={`${InfoSty.commentLine} pb-1 mb-3`}>
                    <h3 className={`${InfoSty.commentTitle} ps-1`}>最新評論</h3>
                  </div>
                  <div className={`${InfoSty.commentBox} scrollbar-B`}>
                    {cts.length > 0 ? (
                      cts.map((v, i) => {
                        return (
                          <div key={i}>
                            <Comment
                              commentMemberId={v.comtMemberId}
                              commentMemberName={v.member_name}
                              commentMemberImg={v.images}
                              commentRestId={v.ComtRestId}
                              commentRestName={v.RestName}
                              comment={v.ComtText}
                              rate={v.rating}
                            />
                          </div>
                        )
                      })
                    ) : (
                      <p>目前尚無餐廳評論資料</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InviteModal onValueChange={inviteListChange} />
    </>
  )
}
