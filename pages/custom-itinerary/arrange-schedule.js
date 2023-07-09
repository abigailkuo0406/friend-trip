import React from 'react'
import ArrangeScheduleSide from '@/components/custom-itinerary/arrange-schedule/arrange-schedule'
import AdminLayout from '@/components/layout/admin-layout'
import InitCard from '@/components/custom-itinerary/arrange-schedule/init-card'
import { BsPlusLg } from 'react-icons/bs'



export default function ArrangeSchedule() {

  
  return (
   <>

    <ArrangeScheduleSide 
    />
    
    
    
  

    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
ArrangeSchedule.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}

