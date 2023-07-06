import React from 'react'
import AdminLayout from '@/components/layout/admin-layout'

import RestaurantList from '@/components/restaurant/restaurant-list'

export default function Rest() {
  return (
    <>
      <h1>精選餐廳</h1>
      <RestaurantList></RestaurantList>
    </>
  )
}
Rest.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
