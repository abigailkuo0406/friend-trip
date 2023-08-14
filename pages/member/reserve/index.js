import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AuthContext from '@/context/AuthContext'

import AdminLayout from '@/components/layout/admin-layout'
import ReserveItem from '@/components/reserve/reserve-item'
import Button from '@/components/common/button/btn-normal'
import CommentModal from '@/components/reserve/comment'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

import styles from '@/pages/member/reserve/rid.module.css'

export default function Reserve() {
  //取得登入之會員資料
  const { auth } = useContext(AuthContext)

  const router = useRouter()

  const [reserve, setReserve] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 4,
    totalPages: 0,
    page: 1,
    rows: [],
  })

  useEffect(() => {
    if (!auth.member_id) return
    if (!router.query) return


    const usp = new URLSearchParams(router.query)

    //取得訂位資料
    fetch(`http://localhost:3002/reserve?${usp.toString()}`, {
      method: 'POST',
      body: JSON.stringify({ memberID: auth.member_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((reserveDetails) => {
        setReserve(reserveDetails)
      })

  }, [auth, router.query])

  // 預設要傳入comment的資料
  const [reservationId, setReservationId] = useState()
  const [restaurantId, setRestaurantId] = useState()
  const [rName, setRName] = useState()
  const [rAddress, setRAddress] = useState()
  const [rImg, setRImg] = useState()

  const showModal = (
    modal,
    reservationId,
    restaurantId,
    rName,
    restaurantAddress,
    rImg
  ) => {
    setReservationId(reservationId)
    setRestaurantId(restaurantId)
    setRName(rName)
    setRAddress(restaurantAddress)
    setRImg(rImg)
  }

  // 訂位狀態篩選器
  const [reserveList, setReserveList] = useState([])
  useEffect(() => {
    if (!reserve) return
    setReserveList(reserve.rows)
  }, [reserve])

  // 所有訂位
  const allreserve = () => {
    // setReserveList(reserve.rows)
    router.push(``)

  }

  // 已取消的訂位
  const cancaleFiliter = () => {
    // const ArrCancelReserve = reserve.rows.filter((v, i) => {
    //   return v.state == 0
    // })
    // setReserveList(ArrCancelReserve)
    router.push(`?cancel=${0}`)
  }

  const theDay = Date.parse(new Date().toDateString())

  // 預定中的訂位
  const reserveProcessFilter = () => {
    router.push(`?nocancel=${1}&nopass=${0}`)

    // showReserveProcess()
  }

  // const showReserveProcess = () => {
  //   const ArrProcessReserve = reserve.rows.filter((v, i) => {
  //     return v.state == 1 && Date.parse(v.reserve_date) >= theDay
  //   })
  //   setReserveList(ArrProcessReserve)
  // }

  // 已完成的訂位
  const reserveFinishFilter = () => {
    // const ArrFinishReserve = reserve.rows.filter((v, i) => {
    //   return v.state == 1 && Date.parse(v.reserve_date) < theDay
    // })
    // setReserveList(ArrFinishReserve)
    router.push(`?nocancel=${1}&pass=${1}`)


  }
  const query2 = { ...router.query }



  return (
    <>
      <div className={`d-flex ${styles.container}`}>
        <Button
          btnText='所有訂位'
          onClick={allreserve}
          addClassforButton={`${styles.textcolor} me-3`}

        />
        <Button
          btnText='預定中'
          onClick={reserveProcessFilter}
          addClassforButton={`${styles.textcolor} me-3`}

        />
        <Button
          btnText='已完成'
          onClick={reserveFinishFilter}
          addClassforButton={`${styles.textcolor} me-3`}

        />
        <Button
          btnText='已取消'
          onClick={cancaleFiliter}
          addClassforButton={`${styles.textcolor}`}


        />

      </div>

      {reserveList.length > 0 ? reserveList.map((v, i) => {
        return (
          <div key={v.reserve_id}>
            <ReserveItem
              reserveId={v.reserveId}
              restId={v.rest_id}
              restName={v.RestName}
              restAddress={v.RestAdress}
              restImg={v.RestImg}
              reserveDate={v.reserve_date}
              reserveTime={v.reserve_time}
              reservePeopleNum={v.reserve_people}
              state={v.state}
              pass={v.pass}
              modalChange={showModal}
            />
          </div>
        )
      }) : (
        <p>目前尚無訂位紀錄</p>
      )}




      <CommentModal
        reservationId={reservationId}
        restId={restaurantId}
        restName={rName}
        restImg={rImg}
        restAddress={rAddress}
      />

      {reserveList.length > 0 ? (
        <div className="itin-card-pagination">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <Link
                  className="page-link"
                  href={'?' +
                    (query2.cancel ? 'cancel=' + query2.cancel + '&' : '') +
                    (query2.nocancel ? 'nocancel=' + query2.nocancel + '&' : '') +
                    (query2.pass ? 'pass=' + query2.pass + '&' : '') +
                    (query2.nopass ? 'nopass=' + query2.nopass + '&' : '') +
                    new URLSearchParams('page=1').toString()}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link"
                  href={
                    '?' +
                    (query2.cancel ? 'cancel=' + query2.cancel + '&' : '') +
                    (query2.nocancel ? 'nocancel=' + query2.nocancel + '&' : '') +
                    (query2.pass ? 'pass=' + query2.pass + '&' : '') +
                    (query2.nopass ? 'nopass=' + query2.nopass + '&' : '') +
                    new URLSearchParams(
                      parseInt(reserve.page) > 1
                        ? `page=${parseInt(reserve.page) - 1}`
                        : 'page=1'
                    ).toString()
                  }
                  aria-label="Previous"
                >
                  <span aria-hidden="true">
                    <MdNavigateBefore />
                  </span>
                </Link>
              </li>

              {Array(5)
                .fill(1)
                .map((v, i) => {
                  const p = reserve.page - 2 + i
                  const query = { ...router.query }
                  if (p < 1 || p > reserve.totalPages) return
                  query.page = p
                  return (
                    <li
                      className={
                        `page-item ` + (p === reserve.page ? 'active' : '')
                      }
                      key={p}
                    >
                      <Link
                        className="page-link"
                        href={'?' + new URLSearchParams(query).toString()}
                      >
                        {p}
                      </Link>
                    </li>
                  )
                })}
              <li className="page-item">
                <Link
                  className="page-link"
                  href={
                    '?' +
                    (query2.cancel ? 'cancel=' + query2.cancel + '&' : '') +
                    (query2.nocancel ? 'nocancel=' + query2.nocancel + '&' : '') +
                    (query2.pass ? 'pass=' + query2.pass + '&' : '') +
                    (query2.nopass ? 'nopass=' + query2.nopass + '&' : '') +
                    new URLSearchParams(
                      parseInt(reserve.page) < reserve.totalPages
                        ? `page=${parseInt(reserve.page) + 1}`
                        : `page=${reserve.totalPages}`
                    ).toString()
                  }
                  aria-label="Previous"
                >
                  <span aria-hidden="true">
                    <MdNavigateNext />
                  </span>
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link"
                  href={
                    '?' +
                    (query2.cancel ? 'cancel=' + query2.cancel + '&' : '') +
                    (query2.nocancel ? 'nocancel=' + query2.nocancel + '&' : '') +
                    (query2.pass ? 'pass=' + query2.pass + '&' : '') +
                    (query2.nopass ? 'nopass=' + query2.nopass + '&' : '') +
                    new URLSearchParams(`page=${reserve.totalPages}`).toString()
                  }
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
Reserve.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
