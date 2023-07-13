import React from 'react'
import Friend from '@/components/friend/friend2'
import AdminLayout from '@/components/layout/admin-layout'

export default function Friendhome2() {
  return (
    <>
      <Friend />
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
Friendhome2.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
