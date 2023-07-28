import AdminLayout from '@/components/layout/admin-layout'
import React from 'react'
import styles from "./style.module3.css";
import Image from "next/image";
import img1 from '@/public/officialimg/1.jpg'

function reservefinish() {
  return (
    <div className={styles.body}>
    <h1>碧湖公園。內湖小白宮｜在水一方的夢幻閱覽室.</h1>
    <br />
    <Image
          width={800}
          height={600}
          src={img1} alt="1" />
    <p className={styles.word}>
      旅遊項目：碧湖公園‧內湖小白宮｜在水一方的夢幻閱覽室<br />
      地點：114台北市內湖區內湖路二段1巷175號<br />
      日期：2023/6/31 08:00<br />
      路線：過大直橋沿北安路接內湖路一段至文德路左轉接內湖路二段即可到達
    </p>
  </div>
  )
}

export default reservefinish
reservefinish.getLayout = function (page){
    return<AdminLayout>{page}</AdminLayout>
  }
