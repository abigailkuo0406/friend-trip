import AdminLayout from '@/components/layout/admin-layout'
import React from 'react'
import styles from './reserve.module.css'
import Image from 'next/image'
import img1 from '@/public/officialimg/1.jpg'

export default function reserve() {
  return (
    <div className={styles.body}>
      <h1>碧湖公園。內湖小白宮｜在水一方的夢幻閱覽室.</h1>
      <br />
      <Image width={800} height={600} src={img1} alt="1" />

      <p className={styles.word}>
        隱身在內湖區的碧湖公園
        <br />
        除了是內湖居民的後花園
        <br />
        也是臺北市唯二擁有大湖泊的水景公園
        <br />
        旅遊地點: 碧湖公園
        <br />
        集合地點：台北車站
        <br />
        價格: TWD$42000/2-6人
        <br />
        <label htmlfor="start"> 參加日期:</label>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2022-07-22"
          min="2022-01-01"
          max="2022-12-31"
        />
        <br />
      </p>
      <p>
        <label htmlfor="people">人數:</label>
        <input type="number" placeholder="請輸入人數" width={60} height={30} />
        <br />
      </p>
      <p>
        <button type="button">
          <a href="http://localhost:3000/official-itinerary/reservefinish">
            報名
          </a>
        </button>
      </p>
    </div>
  )
}

reserve.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
