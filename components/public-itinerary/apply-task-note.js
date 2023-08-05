import React from 'react'
import styles from '@/components/public-itinerary/public-init.module.css'
import Link from 'next/link'
export default function ApplyTaskNote (props) {
  // 格式化日期
  const formatDateString = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') //padStart->日期維持2位數 ex.05
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}/${month}/${day}`
  }
  const formattedCreateAt = formatDateString(props.itinDate) // 格式化后的創建日期

  return (
    <>
      <div>
        <p>備註：{props.note}</p>
      </div>
      <div>
        <p>*參加日期:</p>
        <input className={styles.inputJoinDate} type="text" value={formattedCreateAt} aria-label="readonly input example" readonly />
      </div>
      <div>
        <p>最低成團人數：{props.ppl}</p>
      </div>
      <div>
        <Link
          href="/member/itinerary"
        >
          <button type="button" href="/member/itinerary" className={` ${styles.joinBtn}`}>報名</button>
        </Link>
      </div>





    </>
  )
}
