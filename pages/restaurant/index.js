import React from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'


// 引入元件
import RestaurantList from '@/components/restaurant/restaurant-list'

// 引入假資料
import restaurant from '@/data/restaurant/rest-detail.json'

export default function Rest() {
  const router = useRouter()
  const [restaurants, setRestaurants] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 4,
    totalPages: 0,
    page: 1,
    rows: [],
  })
  // console.log(restaurants)
  useEffect(() => {
    const usp = new URLSearchParams(router.query)

    // API串接
    fetch("http://localhost:3002/restaurant", {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((restaurants) => {
        setRestaurants(restaurants)
      })
  }, [])

  return (
    <>
      <div className="container">
        <h1>精選餐廳</h1>
        {restaurants.rows.map((v, i) => {
          {/* console.log(v) */}
          return (
            <div key={v.RestID}>
              <RestaurantList
                restImg={v.RestImg}
                restName={v.RestName}
                restIntro={v.RestIntro}
                restRid={v.RestID}
                restAddress={v.RestAdress}
                restPhone={v.RestPhone}
                restTime={v.RestTime}
                restMeal={v.RestMeal}
                restClass={v.RestClass}


              />
            </div>
          )
        })}
      </div>
    </>
  )
}
Rest.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
