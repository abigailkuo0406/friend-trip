import React from 'react'
import AdminLayout from '@/components/layout/admin-layout'

// 引入元件
import RestaurantList from '@/components/restaurant/restaurant-list'

// 引入假資料
import restaurant from '@/data/restaurant/rest-detail.json'

export default function Rest() {
  return (
    <>
      <div className="container">
        <h1>精選餐廳</h1>
        {restaurant.map((v, i) => {
          return (
            <div key={v.RestID}>
              <RestaurantList
                img={v.RestImg}
                title={v.RestName}
                details={v.RestIntro}
                rid={v.RestID}
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
