import AdminLayout from '@/components/layout/admin-layout'
import React from 'react'
import styles from './reservefinish.module.css'
import Image from 'next/image'
import img1 from '@/public/officialimg/1.jpg'

function reservefinish() {
  return (
    <div className={styles.body}>
      <h1 className={styles.h10}>碧湖公園</h1>
      <br />
      <Image
        width={800}
        height={600}
        src={img1}
        alt="1"
        className={styles.img}
      />

      <p className={styles.word}>
        介紹:
        <br />
        內湖碧湖公園是位於台灣台北市內湖區的一座公園，
        <br />
        這座公園在之前是一處農田的蓄水池，
        <br />
        後來在1987年改建成為公園，
        <br />
        碧湖公園距離大湖公園只有2公里的距離，
        <br />
        本公園依山傍水，有山巒疊翠的環境， 前擁湖水，與公園景色渾然一體，
        <br />
        其空間靜態之美往往讓來訪遊客留下深刻的印象。
        <br />
        自民國76年闢建以來，陸續完成湖邊東側綠地美化、
        <br />
        增建中國式涼亭、九曲橋及環湖步道等設施， 湖岸周遭並植有流蘇、
        <br />
        柳樹、落羽松、白千層、阿勃勒、鳳凰木、朱槿、杜鵑、矮仙丹等景觀植物，
        <br />
        春夏季彩蝶飛舞，湖光山色美不勝收。
      </p>
      <br />
      <p className={styles.word2}>
        集合地點：台北車站
        <br />
        價格: TWD$42000/2-6 人
        <br />
        <span>時間:2023-06-16 07:00:00</span>
        <br />
      </p>
      <p className={styles.people}>人數:6人</p>
      <button type="button" className={styles.bnt}>
        <a href="http://localhost:3000/official-itinerary">返回交誼旅遊行程</a>
      </button>
    </div>
  )
}

export default reservefinish
reservefinish.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
