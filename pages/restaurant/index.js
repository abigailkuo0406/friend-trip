import React from 'react'
import AdminLayout from '@/components/layout/admin-layout'

// 引入元件
import RestaurantList from '@/components/restaurant/restaurant-list'

// 引入假資料
import restaurant from '@/data/restaurant/rest-detail.json'



export default function Rest() {
 
  return (
    <>
      <h1>精選餐廳</h1>
      <RestaurantList details="aa" />
      


    </>
  )
}
Rest.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
