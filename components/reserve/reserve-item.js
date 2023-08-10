import React, { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import Button from '@/components/common/button/btn-normal'
import { useRouter } from 'next/router'
import AuthContext from '@/context/AuthContext'
import styles from '@/components/reserve/reserve.module.css'
import FriendSty from '@/components/invite/friends-list.module.css'

export default function ReserveItem({
  reserveId,
  restId,
  restName,
  restAddress,
  restImg,
  reserveDate,
  reserveTime,
  reservePeopleNum,
  state,
  modalChange,
}) {
  const { auth } = useContext(AuthContext)


  // 跳轉單一訂單頁
  const router = useRouter()
  const routerChange = () => {
    router.push(`/member/reserve/${reserveId}`)
  }

  //拆分日期
  const dateArr = reserveDate.split('-')
  //拆分時間
  const timeArr = reserveTime.split(':')

  // 定義當日
  const today = new Date()
  const nowYear = today.getFullYear()
  const nowMonth = today.getMonth() + 1
  const nowDate = today.getDate()

  // 定義狀態
  let stateText = ''
  let itemState = 0

  switch (state) {
    case 0:
      stateText = '已取消'
      break
    case 1:
      stateText = '預定中'
      itemState = 1

  }
  if (state == 1) {
    if (dateArr[0] == nowYear) {
      if (dateArr[1] == nowMonth) {
        if (dateArr[2] < nowDate) {
          stateText = '訂位完成'
          itemState = 2

        }
      } else if (dateArr[1] < nowMonth) {
        stateText = '訂位完成'
        itemState = 2

      }
    } else if (dateArr[0] < nowYear) {
      stateText = '訂位完成'
      itemState = 2
    }
  }
  // console.log(restName, stateText)

  // 定義邀請名單
  const [invitesData, setInvitesData] = useState()
  const [invite, setInvite] = useState([])

  // 取得訂位邀請資料
  useEffect(() => {
    fetch('http://localhost:3002/reserveinvites', {
      method: 'POST',
      body: JSON.stringify({ memberID: auth.member_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((invites) => {
        setInvitesData(invites.rows)
      })
  }, [])

  // 針對訂單編號串接對應的邀請名單
  useEffect(() => {
    if (invitesData) {
      const arr = invitesData.filter((v) => {
        return v.reserveId == reserveId
      })
      setInvite(arr)
    }
  }, [invitesData])

  const [modal, setModal] = useState(false)
  const [reservationId, setReservationId] = useState()
  const [restaurantId, setRestaurantId] = useState()
  const [rAddress, setRAddress] = useState()
  const [rName, setRName] = useState()
  const [rImg, setRImg] = useState()


  const showModal = () => setModal(true)

  // 開啟評論modal
  const modalOpen = () => {
    showModal()
    setRestaurantId(restId)
    setReservationId(reserveId)
    setRAddress(restAddress)
    setRName(restName)
    setRImg(restImg)
  }

  //modal值為true，回傳資料到index.js(reserve)
  useEffect(() => {
    modalChange(modal, reservationId, restaurantId, rName, rAddress, rImg)
  }, [modal])

  return (
    <>
      <div className="card mb-3">
        <div className="d-flex">
          <div className="my-3 mx-3">
            <div className={`${styles.imgClass} `}>
              <Image
                src={`http://localhost:3002/restImg/${restImg}`}
                className={`${styles.img1}`}
                width={250}
                height={250}
                priority={true}
              />
            </div>
          </div>

          <div className="my-3 w-100">
            <div className="card-body">
              <div className={`d-flex align-items-center ${styles.cardHead}`}>
                <h2 className={`card-title ${styles.cardHead}`}>{restName}</h2>
                <p
                  className={`ms-4 ${state == 0 ? styles.stateCancel : styles.state
                    }`}
                >
                  {stateText}
                </p>
              </div>

              <div className="d-flex my-3">
                <p className={`card-text me-2 ${styles.text} restLabel`}>訂位資訊：</p>
                <p className={`card-text me-2 ${styles.text} restLabel`}>
                  {dateArr[0]}
                  <span className="ms-1">年</span>
                </p>
                <p className={`card-text me-2 ${styles.text} restLabel`}>
                  {dateArr[1]}
                  <span className="ms-1">月</span>
                </p>
                <p className={`card-text me-4 ${styles.text} restLabel`}>
                  {dateArr[2]}
                  <span className="ms-1">日</span>
                </p>
                <p className={`card-text me-4 ${styles.text} restLabel`}>
                  {timeArr[0]}:{timeArr[1]}
                </p>
                <p className={`card-text me-2 ${styles.text} restLabel`}>
                  {reservePeopleNum}
                  <span className="ms-1">位成人</span>
                </p>
              </div>

              <div>
                <p className={`card-text me-2 ${styles.text}`}>與會好友：</p>
                <div className="d-flex">
                  {invite.length > 0 ? (
                    invite.map((v, i) => {
                      return (
                        <div key={i} className="me-2">
                          {v.images ? (
                            <Image
                              src={`http://localhost:3002/face/${v.images}`}
                              className={` ${FriendSty.avatar}`}
                              width={50}
                              height={50}
                            />
                          ) : (
                            <p className={`${styles.noInvite}`}>本次訂位無邀請好友</p>
                          )}
                        </div>
                      )
                    })
                  ) : (
                    <p className={`${styles.noInvite}`}>本次訂位無邀請好友</p>
                  )}
                </div>
              </div>

              <div className="d-flex mt-3">
                {
                  itemState == 0 &&
                  <Button btnText="詳細資訊" onClick={routerChange} addClassforButton={styles.stateCancel} />
                }
                {
                  itemState == 1 &&
                  <Button btnText="詳細資訊" onClick={routerChange}/>

                }
                {
                  itemState == 2 &&
                  <Button
                    btnText="撰寫評論"
                    onClick={modalOpen}
                    bsModle1={`#exampleModal`}
                    bsModle2="modal"
                  />
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
