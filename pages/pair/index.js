import React from 'react'
import SlideLayout from '@/components/layout/slide-layout'
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
  return <SlideLayout>{page}</SlideLayout>
}
