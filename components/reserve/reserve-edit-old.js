import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'

import Modal2 from '@/components/invite/invite-modal'
import Button from '@/components/common/button/btn-normal'

import InfoSty from '@/components/restaurant/intro.module.css'
import FriendSty from '@/components/invite/friends-list.module.css'

import NumberInput from '@/components/common/input/input-number'
import RadioGroupInput from '@/components/common/input/input-radio-group'
import DateInput from '@/components/common/input/input-date'
import AuthContext from '@/context/AuthContext'




export default function ReserveEdit({
  // iL,
  reserveDetails
}) {
  console.log('zzz', reserveDetails)

  //取得登入之會員資料
  const { auth } = useContext(AuthContext)

  //預設訂位時間
  const [reserveTimeInputValue, setReserveTimeInputValue] = useState('')
  const [reserveTimeInputName, setReserveTimeInputName] = useState('')
  const [reserveTimeInputLabel, setReserveTimeInputLabel] = useState('')


  // 預設訂位日期
  const [reserveDateInputVale, setReserveDateInputValue] = useState('')
  // const [reserveDateInputName, setReserveDateInputName] = useState('')
  // const [reserveDateInputLabel, setReserveDateInputLabel] = useState('')

  // 預設訂位人數
  const [reservePeopleNumValue, setReservePeopleNumValue] = useState('')
  const [reservePeopleNumName, setReservePeopleNumName] = useState('')



  const handleSubmit = (e) => {
    const editForm = new FormData(document.getElementById('reserveEdit'))
    fetch('http://localhost:3002/reserve/edit', {
      method: 'PUT',
      body: editForm
    })
  }



  // console.log('111', iL)
  return (
    <>
      <h3>修改訂位</h3>
      <form id="reserveEdit" onSubmit={handleSubmit}>
        <input name="member_id" value={auth.member_id} hidden />
        <input name="rest_id" value={reserveDetails.restId} />
        <input name="reserve_id" value={reserveDetails.reserveId} />

        <div className={`${InfoSty.infoBox}`} >
          <DateInput
            id="reserveDate"
            name="reserve_date"
            label="訂位日期"
            width="input-width-10rem"
            // addClassforLabel={InfoSty.infolabel}
            value={reserveDetails.reserveDate}
          />
        </div>

        <div className={`${InfoSty.infoBox}`}>

          <RadioGroupInput
            label="訂位時間"
            name="reserve_time"
            // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
            idGroup={['TimeID1', 'TimeID2', 'TimeID3']} // 個別 radio 的 ID
            valueGroup={['11:30:30', '12:30:25', '13:30:15']} // 個別 radio 的 name
            labelGroup={['11:30', '12:30', '13:30']} // 個別標籤
            value={reserveDetails.reserveTime}
            getValue={setReserveTimeInputValue}
            getName={setReserveTimeInputName}
            getLabel={setReserveTimeInputLabel}
            addClassforTitleLabel={InfoSty.infolabel} // 如果要在標題 label 添加 class
            addClassforEachLabel={`btn ${InfoSty.radioItem} me-3`} // 如果要在個別選項 label 添加 class
            addClassforInput={`btn-check`} // 如果要在 input 添加 class
          />
        </div>

        <div className={`${InfoSty.infoBox}`}>
          <NumberInput
            id="PeopleNum"
            label="訂位人數"
            name="reserve_people"
            placeholder="請選擇人數"
            value={reserveDetails.reservePeopleNum} // 預設數字
            max={4} // 最大可選數字
            min={1} // 最小可選數字
            step={1} // 右邊箭頭按一次的數字區間
            hideArrows={false} // true：隱藏右側上下箭頭按鈕，false：顯示
            getValue={setReservePeopleNumValue}
            getName={setReservePeopleNumName}

            width="input-width-5rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
            addClassforLabel="try1" // 如果要在 label 添加 class
            addClassforInput="try2 test123" // 如果要在 input 添加 class
          />
        </div>
      </form>



      <label>邀請好友</label>
      <div className='d-flex'>
        {reserveDetails ?
          reserveDetails.inviteListArr.map((v, i) => {
            return (
              v.iv_member_id ?
                <div key={i} className='me-2' >
                  <Image src={`http://localhost:3002/face/${v.images}`}
                    className={` ${FriendSty.avatar}`}
                    width={50}
                    height={50} />
                </div>
                :
                <p>本次訂位無邀請好友</p>
            )
          })
          :
          ""
        }
        <Button
          btnText="邀請好友"
          bsModle1="#exampleModalToggle2"
          bsModle2="modal"
        />
      </div>

    
      <div className='d-flex'>
        <Button
          btnText='取消修改'
          // onClick={modalOpen2}
          bsModl3='modal'
        />
        <Button
          type='submit'
          btnText='修改完成'
          onClick={handleSubmit}
          bsModl3='modal'
        />
      </div>
    </>
  )
}