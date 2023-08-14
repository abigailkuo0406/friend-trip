import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '@/context/AuthContext' // 會員
import styles from './pairs.module.css'

export default function PairBtns({
  setPage,
  setImgIndex,
  imgIndex,
  randomstate,
  page,
}) {
  const { auth, setAuth } = useContext(AuthContext)
  // useEffect(() => {
  //   console.log('page change', page)
  //   if (page == 2) {
  //     console.log('hjhjhjhj')
  //     fetch(process.env.API_SERVER + '/makefriend', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         memberId: auth.member_id,
  //         FriendId: randomstate[imgIndex].select_id,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then((r) => r.json())
  //       .then((data) => {
  //         console.log(data)
  //         alert('加入好友成功')
  //         console.log('資料抓到', data.all)
  //       })
  //   }
  // }, [page])
  return (
    <>
      <div className="d-flex justify-content-center gap-5 mt-3">
        <button
          type="button"
          href="#"
          className={styles.button}
          onClick={() => {
            setImgIndex(imgIndex + 1)
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <button
          type="button"
          href="#"
          className={styles.button}
          onClick={() => {
            setPage(2)
          }}
        >
          <i className="fa-solid fa-heart"></i>
        </button>
      </div>
    </>
  )
}
