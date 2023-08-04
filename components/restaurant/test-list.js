import React, { useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './restaurant.module.css'
import { useState, useEffect } from 'react'

import Button from '@/components/common/button/btn-normal'
import NumberInput from '@/components/common/input/input-number'
import RadioGroupInput from '@/components/common/input/input-radio-group'
import DateInput from '@/components/common/input/input-date'
import RestPhoto from '@/components/restaurant/restaurant-photo'
import AuthContext from '@/context/AuthContext'

// 引入邀請元件
import Invite from '@/components/invite/invite'

// 引入評論元件
import Comment from '@/components/restaurant/comment'

// 引入朋友假資料
import friendss from '@/data/restaurant/friend-list.json'

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
  restArea
}) {

  //取得登入之會員資料
  const { auth } = useContext(AuthContext)

  /*邀請功能*/
  const [inviteList, setInviteList] = useState([])
  // console.log('外層邀請清單:', inviteList)

  const handleValueChange = (ivName, ivImg, ivBtn, ivId) => {

    if (ivBtn) {
      // 子層傳上來的按鈕值為true(+)，就把傳上來的邀請姓名和照片路徑拷貝到邀請清單中
      setInviteList([{ 'inviteName': ivName, 'inviteImg': ivImg, 'inviteId': ivId }, ...inviteList])
    }
    else {
      // 子層傳上來的按鈕值為false(移除)，由於傳上來的邀請姓名和照片路徑state沒有變，輸出一個過濾掉該邀請姓名的陣列(arr)，再重設回邀請清單

      const arr = inviteList.filter((v) => {
        return v.inviteName !== ivName
      })
      setInviteList(arr)
    }
  }



  //預設訂位時間
  const [reserveTimeInputValue, setReserveTimeInputValue] = useState('')
  const [reserveTimeInputName, setReserveTimeInputName] = useState('')
  const [reserveTimeInputLabel, setReserveTimeInputLabel] = useState('')

  useEffect(() => {
    console.log('訂位時間:', reserveTimeInputValue)
    console.log('訂位人數:', reservePeopleNumValue)


  }, [reserveTimeInputValue])

  // 預設訂位日期
  const [reserveDateInputVale, setReserveDateInputValue] = useState('')
  // const [reserveDateInputName, setReserveDateInputName] = useState('')
  // const [reserveDateInputLabel, setReserveDateInputLabel] = useState('')

  // 預設訂位人數
  const [reservePeopleNumValue, setReservePeopleNumValue] = useState('')
  const [reservePeopleNumName, setReservePeopleNumName] = useState('')

  const restItem = () => {
    fetch('http://localhost:3002/restphoto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ "rid": restRid, })

    })
  }




  /* 提交訂位表單*/
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('訂位123:', reserveTimeInputValue)
    console.log('訂位456:', reservePeopleNumValue)

    const formData = new FormData(document.getElementById(`reserve${restRid}`))

    console.log(formData.get('reserve_time'));
    console.log(formData.get('reserve_people'));

    fetch('http://localhost:3002/restaurant', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      // body: JSON.stringify({ "member_id": 1, "rest_id": restRid, "reserve_date": "2023-08-04", "reserve_time": reserveTimeInputValue, "reserve_people": reservePeopleNumValue })
      body: formData,
    })

  }

  const [friends, setFriends] = useState()

  // useEffect(() => {
  //   fetch(`http://localhost:3002/friends`, {
  //     method: 'GET',
  //   })
  //     .then((f) => f.json())
  //     .then((friendsData) => {
  //       setFriends(friendsData)
  //       console.log(friends.rows)

  //     })
  // }, [])

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
              <div className='d-flex'>
                <h2 className="card-title">{restName}</h2>
                <p className='ms-3'>{restArea}</p>
              </div>


              <p className="card-text text-truncate my-4">{restIntro}</p>
              <Button
                btnText='訂位'
                onClick={restItem}
                bsModle1={`#exampleModalToggle${restRid}`}
                bsModle2='modal'

              />
              {/* <button
                className="btn btn-primary"
                data-bs-target={`#exampleModalToggle${restRid}`}
                data-bs-toggle="modal"
                onClick={restItem()}

              >
                訂位
              </button> */}

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
                        <button onClick={() => {
                          console.log('訂位123:', reserveTimeInputValue)
                          console.log('訂位456:', reservePeopleNumValue)
                        }}>log</button>
                        <form id={`reserve${restRid}`} onSubmit={handleSubmit}>
                          <input name="member_id" value={auth.member_id} hidden />
                          <input name="rest_id" value={restRid} hidden />

                          <div className="mb-3">
                            <DateInput
                              id="reserveDate"
                              name="reserve_date"
                              label="訂位日期"
                              width="input-width-10rem"
                            />
                          </div>

                          <div className="mb-3">
                            {/* <label for="test1"/>11:30
                            <input
                              type='radio'
                              value='11:30'
                              name='reserve_time'
                              id='test1'
                            /> */}
                            <RadioGroupInput
                              label="訂位時間"
                              name="reserve_time"
                              // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
                              idGroup={['TimeID1', 'TimeID2', 'TimeID3']} // 個別 radio 的 ID
                              valueGroup={['11:30:30', '12:30:25', '13:30:15']} // 個別 radio 的 name
                              labelGroup={['11:30', '12:30', '13:30']} // 個別標籤
                              checked={reserveTimeInputValue} // 預設勾選，需填入 value，只能擇一
                              getValue={setReserveTimeInputValue}
                              getName={setReserveTimeInputName}
                              getLabel={setReserveTimeInputLabel}
                              addClassforTitleLabel="classTest1" // 如果要在標題 label 添加 class
                              addClassforEachLabel="btn btn-secondary me-3" // 如果要在個別選項 label 添加 class
                              addClassforInput="btn-check" // 如果要在 input 添加 class
                            />
                            {/* <div class="form-check">
                              <input class="form-check-input" type="radio" name="reserve_time" id="flexRadioDefault1" value='11:30' />
                              <label class="form-check-label" for="flexRadioDefault1">
                                11:30
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="reserve_time" id="flexRadioDefault2" value='12:30' />
                              <label class="form-check-label" for="flexRadioDefault2">
                                12:30
                              </label>
                            </div> */}
                            {/* 
                            <input type="radio" class="form-check-input" name="reserve_time" id="option1" value='11:30' />
                            <label class="form-check-label" for="option1">11:30</label>

                            <input type="radio" class="btn-check" name="reserve_time" id="option2" value='12:30' />
                            <label class="btn btn-secondary" for="option2">12:30</label>

                            <input type="radio" class="btn-check" name="reserve_time" id="option3" value='13:30' />
                            <label class="btn btn-secondary" for="option3">13:30</label>

                            <input type="radio" class="btn-check" name="reserve_time" id="option4" value='14:30' />
                            <label class="btn btn-secondary" for="option4">14:30</label> */}
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
                            <ul id="inviteList">
                              {inviteList.map((v, i) => {
                                return (
                                  // 陣列中有姓名才顯示li
                                  <div key={i}>
                                    {v.inviteName
                                      ?
                                      <li>
                                        <input name="iv_member_id" value={v.inviteId} hidden />

                                        <Image
                                          src={v.inviteImg}
                                          className={`rounded`}
                                          width={50}
                                          height={50}
                                        />
                                        {v.inviteName}
                                      </li>
                                      :
                                      <li hidden></li>}

                                  </div>
                                )
                              })}

                            </ul>
                          </div>
                          <Button
                            btnText="邀請好友"
                            bsModle1={`#exampleModalToggleSecond${restRid}`}
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
                id={`exampleModalToggleSecond${restRid}`}
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
                        {inviteList.map((v, i) => {
                          return (
                            // 陣列中有姓名才顯示li
                            <div key={i}>
                              {v.inviteName
                                ?
                                <li>
                                  <Image
                                    src={v.inviteImg}
                                    className={`rounded`}
                                    width={50}
                                    height={50}
                                  />
                                  {v.inviteName}
                                </li>
                                :
                                <li hidden></li>}

                            </div>
                          )
                        })}

                      </ul>

                      <h1>朋友列表</h1>
                      <ul id="friendsList" className="list">
                        {friends.rows.map((v, i) => {
                          return (
                            <div key={i}>
                              <Invite
                                friendName={v._member_name}
                                img={v.images}
                                friendId={v.FriendId}
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
