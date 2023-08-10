import AdminLayout from '@/components/layout/admin-layout'
import HomePageStyle from '@/css/homepage.module.css'
import { useEffect, useState } from 'react'
import Btn from '@/components/common/button/btn-normal'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BsPcDisplayHorizontal } from 'react-icons/bs'
import Carousel from '@/components/common/carousel/carousel'

export default function AdminIndex() {
  return (
    <>
      <article className="blog-post mb-4">
        <div className={`${HomePageStyle.cardLong} ${HomePageStyle.cardPair}`}>
          <p className={HomePageStyle.cardTitle}>認識理想中的他與她！</p>
          <Btn btnText="抽好友這裡去→" addClassforButton="btn-light" />
        </div>
      </article>
      {/* 公開行程輪播 */}
      <h3 className="carousel-text">首選規畫師</h3>
      <Carousel />
      {/*建立專屬行程、浪漫餐廳首選 */}
      <article className="blog-post d-flex mb-3">
        <a
          href="/custom-itinerary/create-task"
          className={`${HomePageStyle.cardItinerary} ${HomePageStyle.cardMain} me-3`}
        >
          <p className={HomePageStyle.cardText}>建立專屬行程</p>
        </a>

        <a
          href="/restaurant"
          className={`${HomePageStyle.cardRestaurant} ${HomePageStyle.cardMain}`}
        >
          <p className={HomePageStyle.cardText}>浪漫餐廳首選</p>
        </a>
      </article>
      {/* 官方行程推薦、 心動時分小物*/}
      <article className="blog-post d-flex mb-4">
        <a
          href="/official-itinerary"
          className={`${HomePageStyle.cardOfficial} ${HomePageStyle.cardMain} me-3`}
        >
          <p className={HomePageStyle.cardText}>官方行程推薦</p>
        </a>
        <a
          href="/public-itinerary"
          className={`${HomePageStyle.cardPublic} ${HomePageStyle.cardMain} me-3`}
        >
          <p className={HomePageStyle.cardText}>公開行程推薦</p>
        </a>
        <a
          href="/product"
          className={`${HomePageStyle.cardProduct} ${HomePageStyle.cardMain}`}
        >
          <p className={HomePageStyle.cardText}>心動時分小物</p>
        </a>
      </article>
      {/* 論壇 */}
      <article className="blog-post mb-4">
        <a
          href="/forum"
          className={`${HomePageStyle.cardLong} ${HomePageStyle.cardForum}`}
        >
          <p className={HomePageStyle.cardText}>論壇</p>
        </a>
      </article>
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
AdminIndex.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
