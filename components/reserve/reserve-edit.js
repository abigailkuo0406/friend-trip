import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import Button from '@/components/common/button/btn-normal'
import FriendSty from '@/components/invite/friends-list.module.css'
import NumberInput from '@/components/common/input/input-number'
import RadioGroupInput from '@/components/common/input/input-radio-group'
import DateInput from '@/components/common/input/input-date2'
import AuthContext from '@/context/AuthContext'
import InviteModalEdit from '@/components/invite/invite-modal-edit'
import { useRouter } from 'next/router'
import styles from '@/pages/member/reserve/rid.module.css'
import InfoSty from '@/components/restaurant/intro.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Swal from 'sweetalert2'


export default function ReserveEdit({ reserveDetails, alreadyInvite }) {
  const router = useRouter()
  // console.log('aa', reserveDetails)

  //取得登入之會員資料
  const { auth } = useContext(AuthContext)

  //拆分時間
  const timeArr = reserveDetails ? reserveDetails.reserve_time.split(':') : []

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

  //初始邀請好友名單
  const [inviteList, setInviteList] = useState([])
  useEffect(() => {
    setInviteList(alreadyInvite)
  }, [alreadyInvite])

  // 子層傳上來的好友名單
  const inviteListChange = (ivList) => {
    setInviteList(ivList)
  }

  // 監控按鈕關閉modal屬性
  const [modalClose, setModalClose] = useState('')

  // 初始化訂位人數的驗證訊息
  const [numOfPeopleVerify, setNumOfPeopleVerify] = useState(true)

  // 呼叫跳出驗證訊息
  const verifyHint = () => {
    inviteList.length > reservePeopleNumValue - 1 && setNumOfPeopleVerify(false)
  }

  useEffect(() => {
    reserveDateInputVale && reserveTimeInputValue && inviteList.length <= reservePeopleNumValue - 1 && setModalClose('modal')

    reserveDateInputVale && reserveTimeInputValue && inviteList.length > reservePeopleNumValue - 1 && setModalClose('')

    inviteList.length <= reservePeopleNumValue - 1 && setNumOfPeopleVerify(true)

  }, [reserveDateInputVale, reserveTimeInputValue, reservePeopleNumValue, inviteList.length])

  console.log('modalClose改變', modalClose)



  // 送出表單
  const handleSubmit = (e) => {
    // const editForm = new FormData(document.getElementById('reserveEdit'))

    fetch('http://localhost:3002/reserve/edit', {
      method: 'PUT',
      body: JSON.stringify({
        member_id: auth.member_id,
        rest_id: reserveDetails.rest_id,
        reserve_id: reserveDetails.reserveId,
        reserve_date: reserveDateInputVale,
        reserve_time: reserveTimeInputValue,
        reserve_people: reservePeopleNumValue,
        invites: inviteList,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    Swal.fire({
      width: 400,
      text: '修改訂位完成',
      icon: 'success',
      iconColor: '#674C87',
      color: '#674C87',
      confirmButtonColor: '#674C87',
      showConfirmButton: true,
      // timer: 1500,
    })

    router.push(`/member/reserve`)
  }

  return (
    <>
      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div className="container-fluid">
              <div className="d-flex mx-5 my-3 row">
                <div className={`modal-body col-4`}>
                  <h2 className={`card-text ${styles.restName}`}>
                    {reserveDetails ? reserveDetails.RestName : ''}
                  </h2>
                  {reserveDetails ? (
                    <form id="reserveEdit" onSubmit={handleSubmit}>
                      <div className={`${InfoSty.infoBox}`}>
                        <DateInput
                          id="reserveDate"
                          name="reserve_date"
                          label="訂位日期"
                          width="input-width-10rem"
                          getValue={setReserveDateInputValue}
                          getName={setReserveDateInputName}
                          addClassforLabel={InfoSty.infolabel}
                          addClassforDiv={`restLabel`}
                          value={reserveDetails.reserve_date}
                        />
                      </div>

                      <div className={`d-flex`}>
                        <RadioGroupInput
                          label="訂位時間"
                          name="reserve_time"
                          // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
                          idGroup={['TimeID1', 'TimeID2', 'TimeID3']} // 個別 radio 的 ID
                          valueGroup={['11:30', '12:30', '13:30']} // 個別 radio 的 name
                          labelGroup={['11:30', '12:30', '13:30']} // 個別標籤
                          getValue={setReserveTimeInputValue}
                          getName={setReserveTimeInputName}
                          getLabel={setReserveTimeInputLabel}
                          addClassforTitleLabel={InfoSty.infolabel} // 如果要在標題 label 添加 class
                          addClassforEachLabel={`btn restRadiobtn ${InfoSty.radioItem} restRadioLabel me-3`} // 如果要在個別選項 label 添加 class
                          addClassforInput={`btn-check restRadiobtn-check`} // 如果要在 input 添加 class
                          addClassforDiv={`restLabel`}
                          checked={`${timeArr[0]}:${timeArr[1]}`}
                        />
                      </div>
                      <div className={`${InfoSty.infoBox}`}>
                        <NumberInput
                          id="PeopleNum"
                          label="訂位人數"
                          name="reserve_people"
                          placeholder="請選擇人數"
                          value={reserveDetails.reserve_people} // 預設數字
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
                    </form>
                  ) : (
                    ''
                  )}

                  <label className="restLabel mb-3">與會好友</label>
                  <div className="d-flex align-items-center">
                    {inviteList.length > 0 ? (
                      inviteList.map((v, i) => {
                        return (
                          <div key={i} className="me-2">
                            {/* <input
                              name="iv_member_id"
                              value={v.iv_member_id}
                            /> */}
                            <Image
                              src={`http://localhost:3002/face/${v.images}`}
                              className={` ${FriendSty.avatar}`}
                              width={50}
                              height={50}
                            />
                          </div>
                        )
                      })
                    ) : (
                      <p className="restLabel">本次訂位無邀請好友</p>
                    )}



                    <div>
                      <Button
                        btnText={
                          <AiOutlinePlusCircle className={styles.plus} />
                        }
                        bsModle1="#exampleModalToggle2"
                        bsModle2="modal"
                        addClassforButton={styles.ivBtn}
                      />
                    </div>

                  </div>
                  {!numOfPeopleVerify &&
                    <p className={`${InfoSty.verifyHint} restLabel mt-2`}>
                      最多可邀請{reservePeopleNumValue - 1}位好友
                    </p>
                  }
                </div>

                <div className="d-flex justify-content-center mt-4">
                  <Button
                    btnText="取消修改"
                    // onClick={modalOpen2}
                    bsModl3="modal"
                    addClassforButton="btn-dark me-5"
                  />
                  {modalClose == '' &&
                    <Button
                      btnText="修改完成"
                      addClassforButton="btn-dark"
                      bsModl3=''
                      onClick={verifyHint}
                    ></Button>
                  }
                  {modalClose == 'modal' &&
                    <Button
                      type="submit"
                      value="submit"
                      btnText="修改完成"
                      addClassforButton="btn-dark"
                      onClick={handleSubmit}
                      bsModl3='modal'
                    ></Button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InviteModalEdit
        onValueChange={inviteListChange}
        alreadyInvite={alreadyInvite}
      />
    </>
  )
}
