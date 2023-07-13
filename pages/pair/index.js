import React from 'react'
import LoginLayout from '@/components/layout/login-layout'
import Pairs from '@/components/pairs/pairs'
export default function PairsIndex() {
  return (
    <>
      <Pairs />
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
PairsIndex.getLayout = function (page) {
  return <LoginLayout>{page}</LoginLayout>
}
