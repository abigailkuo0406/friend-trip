import React from 'react'
import PublicScheduleIndex from '@/components/public-itinerary'
import SortBoard from '@/components/public-itinerary/sort-board'
import AdminLayout from '@/components/layout/admin-layout'

export default function PublicSchedule() {
  return (
    <>
      <div className="d-flex mb-2 ">
        <h3 className="my-auto mx-auto">公開行程</h3>
      </div>
      <SortBoard />
      <div className="d-flex flex-wrap">
        {Array(15)
          .fill(1)
          .map((v, i) => {
            return <PublicScheduleIndex key={i} />
          })}
      </div>
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
PublicSchedule.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
