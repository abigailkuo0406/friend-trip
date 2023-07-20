import React from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import Edit from '@/components/edit/edit'
export default function EditHome() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Edit />
      </div>
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
EditHome.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
