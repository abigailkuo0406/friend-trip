import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Button from '@/components/common/button/btn-normal'

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
  console.log(rid)

  // 取得餐廳資料細項
  console.log(restaurant)

  const restName = restaurant[rid]?.RestName ?? ''

  const restPhone = restaurant[rid]?.RestPhone ?? ''
  const restAdress = restaurant[rid]?.RestAdress ?? ''
  const restTime = restaurant[rid]?.RestTime ?? ''
  const restIntro = restaurant[rid]?.RestIntro ?? ''
  const restclassName = restaurant[rid]?.RestclassName ?? ''
  const restMeal = restaurant[rid]?.RestMeal ?? ''

  const [valueFromInvites, setValueFromInvite] = useState('')
  // 回乎函數，接收邀請元件的傳值
  const handleValueChange = (value) => {
    setValueFromInvite(value)
  }

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
            <div className="d-flex mx-6">
              <div className="modal-body">
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

                <form>
                  <div>
                    <label>訂位日期</label>
                    <input type="date" />
                  </div>

                  <div>
                    <label>訂位時間</label>
                    <input type="time" />
                  </div>

                  <div>
                    <label>訂位人數</label>
                    <input type="number" />
                  </div>

                  <div>
                    <label>邀請好友</label>
                    <img />
                    <img />
                  </div>
                </form>
                <Button btnText="邀請好友" data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal" />
                <button
                  className="btn btn-primary"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  邀請好友
                </button>
                <button>訂位</button>
              </div>

              {/* 照片區 */}
              <div>
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
                        // src=
                        className="d-block w-100"
                        alt="..."
                        width={1000}
                        height={200}
                      />
                    </div>
                    <div className="carousel-item">
                      <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="..." className="d-block w-100" alt="..." />
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
                    console.log(c)
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
              <li>{valueFromInvites}</li>

              <h1>朋友列表</h1>
              <ul id="friendsList" className="list">
                {friends.map((v, i) => {
                  return (
                    <div key={i}>
                      <Invite name={v.FriendName} onValueChange={handleValueChange} />
                    </div>
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
