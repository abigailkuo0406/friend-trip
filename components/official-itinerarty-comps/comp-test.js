import React from 'react'
import styles from '@/pages/official-itinerary/style.module.css'
import Image from 'next/image'

import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
// import img1 from '@/public/officialimg/1.jpg'
// import img2 from '@/public/officialimg/2.jpg'
// import img3 from '@/public/officialimg/3.jpg'
// import img4 from '@/public/officialimg/4.jpg'
// import img5 from '@/public/officialimg/5.jpg'
// import img6 from '@/public/officialimg/6.jpg'
// import img7 from '@/public/officialimg/7.jpg'
// import img8 from '@/public/officialimg/8.jpg'
// import img9 from '@/public/officialimg/9.jpg'

function Comptest({ rows }) {
  return (
    <>
      <div className={styles.productlist}>
        <h1 className={styles.title}>交誼旅遊行程</h1>
        <div className={styles.clearfix}></div>
        <ul>
          {rows.map((v, i) => {
            return (
              <li key={v.id}>
                <Image width={50} height={130} src={v['img']} />

                <h10>{v['itinerary name']}</h10>
                <br />
                <span>TWD: {v.price}/2-6人</span>
                <br />
                <span>時間:{dayjs(v.date).format('YYYY-MM-DD HH:MM')}</span>
                {/* <div className={styles.empty_star}>★</div> */}
                {/* <div>評分:{v['trip evaluation']}分</div> */}
                <button type="button" className={styles.bnt}>
                  <a href="http://localhost:3000/official-itinerary/reserve">
                    參加
                  </a>
                </button>
              </li>
            )
          })}
          {/* <li>
            <Image width={50} height={130} src={img1} alt="1" />
            <h10>碧湖公園</h10>
            <br />
            <span>TWD {price}/2-6人</span>
            <br />
            <span>時間:2023-6-30 07:00:00</span>

            <div className={styles.empty_star}>★</div>

            <button type="button" className={styles.bnt}>
              <a href="http://localhost:3000/official-itinerary/reserve">
                參加
              </a>
            </button>
          </li>
          <li>
            <Image width={50} height={130} src={img2} alt="2" />
            <h10>碧山巖櫻花隧道</h10>
            <br />
            <span>TWD 42000/2-4人</span>
            <br />
            <span>2023-07-02 07:00:00</span>
            <div className={styles.empty_star}>★★</div>
            <button type="button" className={styles.bnt}>
              參加
            </button>
          </li>
          <li>
            <Image width={50} height={130} src={img3} alt="3" />
            <h10>台北賞櫻景點</h10>
            <br />
            <span>TWD 42000/2-3人</span>
            <br />
            <span>2023-07-05 07:00:00</span>
            <div className={styles.empty_star}>★★</div>
            <button type="button" className={styles.bnt}>
              參加
            </button>
          </li>
          <li>
            <Image width={50} height={130} src={img4} alt="4" />
            <h10>大溝溪生態治水園區</h10>
            <br />
            <span>TWD 42000/2-6人</span>
            <br />
            <span>2023-07-07 09:00:00</span>
            <div className={styles.empty_star}>★★★</div>
            <button type="button" className={styles.bnt}>
              參加
            </button>
          </li>
          <li>
            <Image width={50} height={130} src={img5} alt="5" />
            <h10>圓覺瀑布</h10>
            <br />
            <span>TWD 42000/2-6人</span>
            <br />
            <span>2023-07-10 09:00:00</span>
            <div className={styles.empty_star}>★★★</div>
            <button type="button" className={styles.bnt}>
              參加
            </button>
          </li>
          <li>
            <Image width={50} height={130} src={img6} alt="6" />
            <h10>大溝溪步道</h10>
            <br />
            <span>TWD 42000/2-6人</span>
            <br />
            <span>2023-07-13 07:00:00</span>
            <div className={styles.empty_star}>★★★★</div>
            <button type="button" className={styles.bnt}>
              參加
            </button>
          </li>
          <li>
            <Image width={50} height={130} src={img7} alt="7" />
            <h10>華山文創園區與周邊</h10>
            <br />
            <span>TWD 42000/2-6人</span>
            <br />
            <span>2023-07-17 07:00:00</span>
            <div className={styles.empty_star}>★★★★</div>
            <button type="button" className={styles.bnt}>
              參加
            </button>
          </li>
          <li>
            <Image width={50} height={130} src={img8} alt="8" />
            <h10>白石湖吊橋</h10>
            <br />
            <span>TWD 42000/2-4人</span>
            <br />
            <span>2023-07-20 07:00:00</span>
            <div className={styles.empty_star}>★★★★★</div>
            <button type="button" className={styles.bnt}>
              參加
            </button>
          </li>
          <li>
            <Image width={50} height={130} src={img9} alt="9" />
            <h10>內溝溪自然生態步道</h10>
            <br />
            <span> TWD 42000/2-3人</span>
            <br />
            <span>2023-07-25 07:00:00</span>

            <div className={styles.empty_star}>★★★★★</div>
            <button type="button" className={styles.bnt}>
              參加
            </button>
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default Comptest
