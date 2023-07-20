import React from 'react'
import Friend from '@/components/friend/friend'
import AdminLayout from '@/components/layout/admin-layout'

export default function Friendhome() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Friend />
      </div>
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
Friendhome.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
