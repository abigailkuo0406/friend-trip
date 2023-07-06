import React from 'react'
import CustomItineraryIndex from '@/components/custom-itinerary'
import HistotyCard from '@/components/custom-itinerary/histoty-card'
import BtnToolbar from '@/components/custom-itinerary/btn-toolbar'
import AdminLayout from '@/components/layout/admin-layout'


export default function Index() {
  return (
    <>
    <CustomItineraryIndex/>
     {Array(5)
        .fill(1)
        .map((v, i) => {
          return <HistotyCard key={i}/>  
        })}
        
        <BtnToolbar />
  
     
    
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
Index.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}

