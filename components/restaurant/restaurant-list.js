import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './restaurant.module.css'
import { useState, useEffect } from 'react'

import Button from '@/components/common/button/btn-normal'
import NumberInput from '@/components/common/input/input-number'
import RadioGroupInput from '@/components/common/input/input-radio-group'
import DateInput from '@/components/common/input/input-date'
import RestPhoto from '@/components/restaurant/restaurant-photo'

// 引入邀請元件
import Invite from '@/components/invite/invite'

// 引入評論元件
import Comment from '@/components/restaurant/comment'

// 引入朋友假資料
import friends from '@/data/restaurant/friend-list.json'

export default function RestaurantList({
  restName,
  restPhone,
  restAddress,
  restTime,
  restIntro,
  restClass,
  restMeal,
  restImg,
  restRid,
}) {
  const inviteList = []
  const [invites, setInvites] = useState('')
  const [invitesImg, setInvitesImg] = useState('')
  // 回乎函數，接收邀請元件的傳值
  const handleValueChange = (ivName, ivImg) => {
    console.log('222:', ivName)
    console.log('3333:', ivImg)

    setInvites(ivName)
    setInvitesImg(ivImg)
  }
  // useEffect(() => {
  //   // inviteList.push(invites)
  //   // console.log(inviteList)
  // }, [invites])

  //預設訂位時間
  const [reserveTimeInputValue, setReserveTimeInputValue] = useState('')
  const [reserveTimeInputName, setReserveTimeInputName] = useState('')
  const [reserveTimeInputLabel, setReserveTimeInputLabel] = useState('')

  // 預設訂位日期
  const [reserveDateInputVale, setReserveDateInputValue] = useState('')
  const [reserveDateInputName, setReserveDateInputName] = useState('')
  const [reserveDateInputLabel, setReserveDateInputLabel] = useState('')

  // 預設訂位人數
  const [reservePeopleNumValue, setReservePeopleNumValue] = useState('')
  const [reservePeopleNumName, setReservePeopleNumName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log('時間:' + reserveTimeInputValue)
    // console.log('日期:' + reserveDateInputVale)
    // console.log('人數:' + reservePeopleNumValue)

    const formData = new FormData(document.getElementById(`reserve${restRid}`))

    fetch('http://localhost:3002/restaurant', {
      method: 'POST',
      body: formData,
    })
      .then((r) => r.json)
      .then((data) => {
        console.log(data)
      })
  }
  return (
    <>
      <div className="card mb-3 radius20px">
        <div className="row g-0 my-3">
          <div className="col-md-3">
            <div className={styles.imgClass}>
              <Image
                src={`http://localhost:3002/restImg/${restImg}`}
                className={`rounded ms-2 ${styles.img1}`}
                width={200}
                height={200}
                priority={true}
              />
            </div>
          </div>

          <div className="col-md-9">
            <div className="card-body">
              <h2 className="card-title">{restName}</h2>
              <p className="card-text text-truncate my-4">{restIntro}</p>
              <button
                className="btn btn-primary"
                data-bs-target={`#exampleModalToggle${restRid}`}
                data-bs-toggle="modal"
              >
                訂位
              </button>

              <div
                className="modal fade"
                id={`exampleModalToggle${restRid}`}
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabindex="-1"
              >
                <div className="modal-dialog modal-dialog-centered modal-fullscreen ">
                  <div className="modal-content ">
                    <div className="modal-header">
                      {/* 關閉按鈕 */}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

                    {/* modal body */}
                    <div className="d-flex mx-2 row">
                      <div className="modal-body col-5">
                        {/*左方標題列 */}
                        <div className="d-flex">
                          <h2>{restName}</h2>
                          <div>星星</div>
                        </div>

                        {/* 左方小資訊列 */}
                        <div>
                          <p>{restAddress}</p>
                          <p>{restPhone}</p>
                        </div>

                        {/* 左方大資訊區 */}
                        <div>
                          <label>營業時間</label>
                          <p>{restTime}</p>
                          <label>料理特色</label>
                          <p>
                            {restMeal}
                            {restClass}
                          </p>
                          <label>訂位須知</label>
                          <p>{restIntro}</p>
                        </div>

                        <form id={`reserve${restRid}`} onSubmit={handleSubmit}>
                          <input name="member_id" value="1" />
                          <input name="rest_id" value={restRid} />

                          <div className="mb-3">
                            <DateInput
                              id="reserveDate"
                              name="reserve_date"
                              label="訂位日期"
                              width="input-width-10rem"
                              getvalue={setReserveDateInputValue}
                              getname={setReserveDateInputName}
                              getLabel={setReserveDateInputLabel}
                              // minDate='2023-12-16'
                            />
                          </div>

                          <div className="mb-3">
                            <RadioGroupInput
                              label="訂位時間"
                              name="reserve_time"
                              // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
                              idGroup={['TimeID1', 'TimeID2', 'TimeID3']} // 個別 radio 的 ID
                              valueGroup={['11:30', '12:30', '13:30']} // 個別 radio 的 name
                              labelGroup={['11:30', '12:30', '13:30']} // 個別標籤
                              checked="11:30" // 預設勾選，需填入 value，只能擇一
                              getValue={setReserveTimeInputValue}
                              getName={setReserveTimeInputName}
                              getLabel={setReserveTimeInputLabel}
                              addClassforTitleLabel="classTest1" // 如果要在標題 label 添加 class
                              addClassforEachLabel="btn btn-secondary me-3" // 如果要在個別選項 label 添加 class
                              addClassforInput="btn-check" // 如果要在 input 添加 class
                            />
                          </div>

                          <div>
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
                            />
                          </div>

                          <div>
                            <label>邀請好友</label>
                            <img />
                            <img />
                          </div>
                          <Button
                            btnText="邀請好友"
                            bsModle1="#exampleModalToggleSecond"
                            bsModle2="modal"
                          />
                          <Button
                            type="submit"
                            value="submit"
                            btnText="直接訂位"
                            addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                            disabled={false} // fase：可點，true：不可點
                          ></Button>
                        </form>
                      </div>
                      {/* 照片區 */}
                      <div className="col-5">
                        <RestPhoto file={restImg} rid={restRid} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 第二層Modal */}
              <div
                className="modal fade"
                id="exampleModalToggleSecond"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabindex="-1"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5"
                        id="exampleModalToggleLabel2"
                      >
                        Modal 2
                      </h1>
                      {/* 關閉按鈕 */}
                      {/* <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
                    </div>
                    <div className="modal-body">
                      {/* <h1>邀請列表</h1> */}
                      <ul id="inviteList">
                        {/* {inviteList.map((v, i) => {
                          console.log('33333:', v)
                          return (
                            <div key={i}>
                              <li>{v}</li>
                            </div>
                          )
                        })} */}
                        <li>
                          {invitesImg ? (
                            <Image
                              src={invitesImg}
                              className={`rounded`}
                              width={50}
                              height={50}
                            />
                          ) : (
                            <Image
                              src={invitesImg}
                              width={50}
                              height={50}
                              hidden
                            />
                          )}

                          {invites}
                        </li>
                      </ul>

                      <h1>朋友列表</h1>
                      <ul id="friendsList" className="list">
                        {friends.map((v, i) => {
                          return (
                            <div key={i}>
                              <Invite
                                friendName={v.FriendName}
                                img={v.FriendImg}
                                onValueChange={handleValueChange}
                              />
                            </div>
                          )
                        })}
                      </ul>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-primary"
                        data-bs-target={`#exampleModalToggle${restRid}`}
                        data-bs-toggle="modal"
                      >
                        回上一頁
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <p className="card-text"> */}
              {/* 導入動態路由網址 */}
              {/* <button
                  type="button"
                  id={props.restrid}
                  onClick={() => router.push('restaurant/' + props.restrid)}
                >
                  訂位 */}
              {/* </button> */}
              {/* </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
