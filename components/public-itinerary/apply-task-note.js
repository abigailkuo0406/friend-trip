import React from 'react'
import { useEffect, useState, useContext } from 'react'
import styles from '@/components/public-itinerary/public-init.module.css'
import Link from 'next/link'
import AuthContext from '@/context/AuthContext'

export default function ApplyTaskNote (props) {

  //取得登入之會員資料
  const { auth } = useContext(AuthContext)
  // 格式化日期
  const formatDateString = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') //padStart->日期維持2位數 ex.05
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}/${month}/${day}`
  }
  const formattedCreateAt = formatDateString(props.itinDate) // 格式化后的創建日期

  const joinPublicItinerary = () => {
    const storedData = localStorage.getItem('select_schedule_info')
    const parsedData = JSON.parse(storedData)
    const itinMember = parsedData.itin_member
    const memberID = auth.member_id

    // console.log('itinMember', itinMember)
    // console.log('memberID', memberID)
    // console.log('joinPublicItinerary==>', 'OK')

    // 景點行程API串接(行程寫進db)

    fetch('http://localhost:3002/public-itinerary/join-public', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ member_id: memberID, itin_id: itinMember }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log('資料已成功送到資料庫:', data)
      })
      .catch((error) => {
        console.log('發生錯誤，行程未送成功到資料庫', error)
      })


    const noteText = props.note.replace(/\*/g,'\n')
    // console.log('props.note',props.note)


  }
  return (
    <>
      <div>
        <span className={styles.spnaName}>備註：</span>
        <p className={`${styles.noteText}`}>{props.note}<br/></p>
      </div>
      <div>
        <p className={styles.spnaName}>*參加日期:</p>
        <input className={styles.inputJoinDate} type="text" value={formattedCreateAt} aria-label="readOnly input example" readOnly />
      </div>
      <div>
        <p className={styles.spnaName}>最低成團人數：{props.ppl}</p>
      </div>
      <div>
        <Link
          href="/member/itinerary"
          onClick={joinPublicItinerary}
        >
          <button type="button" href="/member/itinerary" className={` ${styles.joinBtn}`}>報名</button>
        </Link>
      </div>





    </>
  )
}
