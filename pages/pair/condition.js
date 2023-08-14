import React from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import Condition from '@/components/pairs/condition'

export default function ConditionPage() {
  return (
    <>
      <Condition />
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
ConditionPage.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
