import React, { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import styles from '../restaurant/restaurant.module.css'
import Button from '@/components/common/button/btn-normal'
import { useRouter } from 'next/router'
import AuthContext from '@/context/AuthContext'

export default function ReserveItem({
  reserveId,
  restId,
  restName,
  restImg,
  reserveDate,
  reserveTime,
  reservePeopleNum,
}) {
  const { auth } = useContext(AuthContext)

  // 跳轉單一訂單頁
  const router = useRouter()
  const routerChange = () => {
    router.push(`/member/reserve/${reserveId}`)
  }

  //拆分日期
  const dateArr = reserveDate.split('-')

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
      // console.log('arr', arr)
      setInvite(arr)
    }
  }, [invitesData])

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
              <div className="d-flex">
                <h2 className="card-title">{restName}</h2>
                <p>{reserveId}</p>
                <p className="card-text text-truncate my-4">訂單狀態</p>
              </div>

              <div className="d-flex">
                <p className="card-text text-truncate me-2">訂位資訊：</p>
                <p className="card-text text-truncate me-2">
                  {dateArr[0]}
                  <span className="ms-1">年</span>
                </p>
                <p className="card-text text-truncate me-2">
                  {dateArr[1]}
                  <span className="ms-1">月</span>
                </p>
                <p className="card-text text-truncate me-3">
                  {dateArr[2]}
                  <span className="ms-1">日</span>
                </p>
                <p className="card-text text-truncate me-3">{reserveTime}</p>
                <p className="card-text text-truncate me-2">
                  {reservePeopleNum}
                  <span className="ms-1">位成人</span>
                </p>
              </div>

              {/* <div>
                                <p className="card-text text-truncate my-4">與會好友</p>

                                <div className='d-flex'>
                                    {invite ?
                                        invite.map((v, i) => {
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
                                </div> */}
            </div>

            {/* <p>訂單編號{reserveId}</p>
                            <p>好友{inviteList.iv_member_id}</p> */}

            <Button btnText="詳細資訊" onClick={routerChange} />
          </div>
        </div>
      </div>
    </>
  )
}
