import React, { createContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Button from '@/components/common/button/btn-normal'
import NumberInput from '@/components/common/input/input-number'
import RadioInput from '@/components/common/input/input-radio'
import RadioGropuInput from '@/components/common/input/input-radio-group'
import DateInput from '@/components/common/input/input-date'

import p1 from '@/public/restimg/1a.jpg'

// 引入邀請元件
import Invite from '@/components/invite/invite'

// 引入評論元件
import Comment from '@/components/restaurant/comment'

// 引入朋友假資料
import friends from '@/data/restaurant/friend-list.json'
// 引入餐廳假資料
import restaurant from '@/data/restaurant/rest-detail.json'
// 引入評論假資料
import comment from '@/data/restaurant/comment.json'

export default function RestItem() {
  // 取用useRouter方法
  const router = useRouter()

  // 取得當頁動態編號
  // const rid = parseInt(router.query?.rid ??) - 1

  let rid = 0
  if (router.query.rid != null) {
    rid = router.query?.rid
  }
  // console.log(rid)

  // 取得餐廳資料細項
  // console.log(restaurant)

  const restName = restaurant[rid]?.RestName ?? ''

  const restPhone = restaurant[rid]?.RestPhone ?? ''
  const restAdress = restaurant[rid]?.RestAdress ?? ''
  const restTime = restaurant[rid]?.RestTime ?? ''
  const restIntro = restaurant[rid]?.RestIntro ?? ''
  const restclassName = restaurant[rid]?.RestclassName ?? ''
  const restMeal = restaurant[rid]?.RestMeal ?? ''

  //預設訂位日期
  const [reserveTimeInputValue, setReserveTimeInputValue] = useState('')
  const [reserveTimeInputName, setReserveTimeInputName] = useState('')
  const [reserveTimeInputLabel, setReserveTimeInputLabel] = useState('')

  // 預設訂位時間
  const [reserveDateInputVale, setReserveDateInputValue] = useState('')
  const [reserveDateInputName, setReserveDateInputName] = useState('')
  const [reserveDateInputLabel, setReserveDateInputLabel] = useState('')

  // 預設訂位人數
  const [reservePeopleNumValue, setReservePeopleNumValue] = useState('')
  const [reservePeopleNumName, setReservePeopleNumName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(
    //   '訂位日期',
    //   reserveDateInputVale,
    //   '，name為:',
    //   reserveDateInputName
    // )
    // console.log(
    //   '訂位時間:',
    //   reserveTimeInputLabel + ' ，value 為：',
    //   reserveTimeInputValue + ' ，name 為：',
    //   reserveTimeInputName
    // )
    // console.log(
    //   '訂位人數：',
    //   reservePeopleNumValue + ' ，name 為：',
    //   reservePeopleNumName
    // )
    const fd = new FormData(document.restaurant_addform)
    // ******** 轉換成 Object

    fetch('http://localhost:3002/restaurant', {
      method: 'POST',
      body: fd,
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj)
      })
  }
  const InviteContext = createContext()
  console.log(InviteContext)

  const [invites, setInvites] = useState('AA')
  console.log('1:' + invites)

  // const handleClick = () => {
  //   setInvites(v.FriendName)
  // }

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen ">
          <div className="modal-content ">
            <div className="modal-header">
              {/* <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Modal 1
              </h1> */}

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
                  <p>{restAdress}</p>
                  <p>{restPhone}</p>
                </div>

                {/* 左方大資訊區 */}
                <div>
                  <label>營業時間</label>
                  <p>{restTime}</p>
                  <label>料理特色</label>
                  <p>
                    {restMeal}
                    {restclassName}
                  </p>
                  <label>訂位須知</label>
                  <p>{restIntro}</p>
                </div>

                <form name="restaurant_addform" onSubmit={handleSubmit}>
                  <input name="member_id" value="1" hidden />

                  <input name="rest_id" value={rid} hidden />

                  <div className="mb-3">
                    <DateInput
                      id="reserveDate"
                      name="reserve_date"
                      label="訂位日期"
                      getvalue={setReserveDateInputValue}
                      getname={setReserveDateInputName}
                      getLabel={setReserveDateInputLabel}
                      // minDate='2023-12-16'
                    />
                    {/* <label>訂位日期</label>
                    <input type="date" value="2023-07-18"/> */}
                  </div>

                  <div className="mb-3">
                    <label>訂位時間</label>
                    <RadioGropuInput
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
                    <div className="d-flex">
                      {/* <RadioInput
                        id="option1"
                        name="options"
                        label="11:00"
                        value="11:00" // 預設文字:
                        placeholder="測試3"
                        width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
                        addClassforEachLabel="btn btn-secondary me-3" // 如果要在 label 添加 class
                        addClassforInput="btn-check" // 如果要在 input 添加 class
                        getValue={setInputValue3} // 獲取填寫的數值
                        getName={setInputName3} // 獲取 name
                        required={true} // true：必填，false：非必填
                      />
                      <RadioInput
                        id="option1"
                        name="options"
                        label="12:00"
                        value="12:00" // 預設文字:
                        placeholder="測試3"
                        width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
                        addClassforEachLabel="btn btn-secondary me-3" // 如果要在 label 添加 class
                        addClassforInput="btn-check" // 如果要在 input 添加 class
                        getValue={setInputValue3} // 獲取填寫的數值
                        getName={setInputName3} // 獲取 name
                        required={true} // true：必填，false：非必填
                      />
                      <RadioInput
                        id="option1"
                        name="options"
                        label="13:00"
                        value="13:00" // 預設文字:
                        placeholder="測試3"
                        width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
                        addClassforEachLabel="btn btn-secondary me-3" // 如果要在 label 添加 class
                        addClassforInput="btn-check" // 如果要在 input 添加 class
                        getValue={setInputValue3} // 獲取填寫的數值
                        getName={setInputName3} // 獲取 name
                        required={true} // true：必填，false：非必填
                      /> */}
                    </div>
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
                    bsModle1="#exampleModalToggle2"
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
                <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image
                        src={p1}
                        className="d-block w-100"
                        alt="..."
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src={p1}
                        className="d-block w-100"
                        alt="..."
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src={p1}
                        className="d-block w-100"
                        alt="..."
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 評論 */}
            <div className="container">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Comment
                      memberId={comment[0].member_id}
                      comment={comment[0].ComtText}
                      star={comment[0].RestStarP}
                    />
                  </div>
                  {comment.map((c, i) => {
                    {
                      /* console.log(c) */
                    }
                    return (
                      <div className="carousel-item" key={i}>
                        <Comment
                          memberId={c.member_id}
                          comment={c.ComtText}
                          star={c.RestStarP}
                        />
                      </div>
                    )
                  })}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            {/* footer */}
            {/* <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                邀請好友
              </button>
              <button>訂位</button>
            </div> */}
          </div>
        </div>
      </div>

      {/* 第二層Modal */}
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
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
              <h1>邀請列表</h1>
              <ul id="inviteList"></ul>
              <li>{invites}</li>

              <h1>朋友列表</h1>
              <ul id="friendsList" className="list">
                {friends.map((v, i) => {
                  return (
                    <InviteContext.Provider value={{ invites, setInvites }}>
                      {console.log('123')}
                      <div key={i}>
                        <Invite
                          name={v.FriendName}
                          img={v.FriendImg}
                          // testfunc={handleClick}
                        />
                      </div>
                    </InviteContext.Provider>
                  )
                })}
              </ul>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                回上一頁
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        className="btn btn-primary"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        訂位
      </button>
    </>
  )
}
