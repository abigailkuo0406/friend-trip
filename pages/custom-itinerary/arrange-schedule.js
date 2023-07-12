import { useState } from 'react'
import ScheduleSide from '@/components/custom-itinerary/arrange-schedule/arrange-schedule'
import AdminLayout from '@/components/layout/admin-layout'
import SearchView from '@/components/custom-itinerary/arrange-schedule/search-view'
import Map from '@/components/custom-itinerary/arrange-schedule/map'

export default function ArrangeSchedule() {

  return (
    <>
      {/* <SearchView/> */}
      <ScheduleSide/>
      <Map/>

   
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
ArrangeSchedule.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
