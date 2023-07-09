import React from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import SaveViewInit from '@/components/custom-itinerary/arrange-schedule/save-view-task/save-view-task'

export default function SaveViewTask() {
  return (
    <>
      <SaveViewInit />
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
SaveViewTask.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
