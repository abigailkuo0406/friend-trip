import React, { useState } from 'react'
import Friend1 from '@/components/friend/friend'
import Friend2 from '@/components/friend/friend2'
import AdminLayout from '@/components/layout/admin-layout'

export default function Friendhome() {
  const [page, setPage] = useState(1)
  const page1 = <Friend1 setPage={setPage} />
  const page2 = <Friend2 setPage={setPage} />
  return (
    <>
      <div className="d-flex justify-content-center">
        {page === 1 ? page1 : page2}
      </div>
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
Friendhome.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
