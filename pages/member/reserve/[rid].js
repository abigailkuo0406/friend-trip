import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AdminLayout from '@/components/layout/admin-layout'
import Image from 'next/image'
import AuthContext from '@/context/AuthContext'
import Link from 'next/link'

import Button from '@/components/common/button/btn-normal'
import ReserveEdit from '@/components/reserve/reserve-edit'

import FriendSty from '@/components/invite/friends-list.module.css'
import styles from '@/pages/member/reserve/rid.module.css'
import Swal from 'sweetalert2'

export default function ReseveDetails({ state }) {
  console.log('rid頁重新選染')

  const { auth } = useContext(AuthContext)

  // 取用useRouter方法
  const router = useRouter()

  // 取得當頁動態編號
  const rid = router.query.rid

  //設定單筆訂位資料
  const [reserveDetails, setReserveDetails] = useState()

  useEffect(() => {
    fetch(`http://localhost:3002/reserve/${rid}`, {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((details) => {
        rid ? setReserveDetails(details.row) : 1
      })
  }, [rid])
  // console.log('reserveDetails', reserveDetails)

  //拆分日期
  const dateArr = reserveDetails ? reserveDetails.reserve_date.split('-') : []

  //拆分時間
  const timeArr = reserveDetails ? reserveDetails.reserve_time.split(':') : []

  // 定義邀請名單
  const [invitesData, setInvitesData] = useState()
  const [invite, setInvite] = useState([])

  // 取得訂位邀請資料
  useEffect(() => {
    if (!auth.member_id) return

    fetch('http://localhost:3002/reserveinvites', {
      method: 'POST',
      body: JSON.stringify({
        memberID: auth.member_id,
        
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((invites) => {
        setInvitesData(invites.rows)
      })
  }, [auth])

  // 針對訂單編號串接對應的邀請名單
  useEffect(() => {
    if (rid) {
      if (invitesData) {
        const arr = invitesData.filter((v) => {
          if (v.invite_id != null) {
            return v.reserveId == rid
          }
        })
        setInvite(arr)
      }
    }
  }, [invitesData])

  // 取消訂位
  const cancel = () => {
    fetch('http://localhost:3002/reserve/state', {
      method: 'PUT',
      body: JSON.stringify({ reserve_id: rid }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    Swal.fire({
      width: 400,
      text: '已取消訂位',
      icon: 'success',
      iconColor: '#674C87',
      color: '#674C87',
      confirmButtonColor: '#674C87',
      showConfirmButton: true,
      // timer: 1500,
    })
    router.push('/member/reserve?cancel=0')
  }

  return (
    <>
      {/* <h1>訂單{rid}</h1> */}
      {reserveDetails ? (
        <div className={`container position-relative ${styles.base}`}>
          <div className="text-center my-2">
            {reserveDetails.state == 0 && (
              <div className="d-flex justify-content-center mb-4">
                <p className={`${styles.cancelText} restLabel`}>
                  本次訂位已取消
                </p>
                {/* <Link href='/member/reserve'>
                  <Button btnText="回上一頁"></Button>
                </Link> */}
              </div>
            )}

            <h2 className={`card-text text-truncate ${styles.title}`}>
              {reserveDetails.RestName}
            </h2>
            <p className={`restLabel mb-1 ${styles.label}`}>{reserveDetails.RestPhone}</p>
            <p className={`restLabel ${styles.label}`}>{reserveDetails.RestAdress}</p>
            <div className={`mt-4`}>
              <h3 className={`${styles.label}`}>訂位日期</h3>
              <div className="d-flex justify-content-center">
                <p className={`card-text me-2 ${styles.text}`}>
                  {dateArr[0]}
                  <span className={`card-text ms-1 ${styles.text}`}>年</span>
                </p>
                <p className={`card-text me-2 ${styles.text}`}>
                  {dateArr[1]}
                  <span className={`card-text ms-1 ${styles.text}`}>月</span>
                </p>
                <p className={`card-text me-2 ${styles.text}`}>
                  {dateArr[2]}
                  <span className={`card-text ms-1 ${styles.text}`}>日</span>
                </p>
              </div>
            </div>

            <div className={`mb-4`}>
              <h3 className={`${styles.label}`}>訂位時間</h3>
              <p className={`card-text me-2 ${styles.text}`}>
                {timeArr[0]}:{timeArr[1]}
              </p>
            </div>
            <div className={`mb-4`}>
              <h4 className={`${styles.label}`}>訂位人數</h4>
              <p className={`card-text me-2 ${styles.text}`}>
                {reserveDetails.reserve_people}
                <span className="ms-1">位成人</span>
              </p>
            </div>

            <h3 className={`${styles.label} mb-3`}>邀請好友</h3>
            <div className="d-flex justify-content-center">
              {invite.length > 0 ? (
                invite.map((v, i) => {
                  return (
                    <div key={i} className="me-2">
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
                <p className={`${styles.noInvite} restLabel`}>
                  本次訂位無邀請好友
                </p>
              )}
            </div>
            {reserveDetails.state == 1 ? (
              <div className="d-flex justify-content-center mt-4">
                <Button
                  btnText="修改訂位"
                  // onClick={modalOpen1}
                  bsModle1={`#exampleModalToggle`}
                  bsModle2="modal"
                  addClassforButton="btn-dark me-5"
                />
                <Button btnText="取消訂位" onClick={cancel} />
              </div>
            ) : (
              <p hidden></p>
            )}
          </div>
        </div>
      ) : (
        ''
      )}

      <ReserveEdit
        // modalState={modal}
        reserveDetails={reserveDetails}
        alreadyInvite={invite}
      />
    </>
  )
}
ReseveDetails.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
