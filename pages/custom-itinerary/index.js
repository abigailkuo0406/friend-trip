import { useState } from 'react'
import CustomItineraryIndex from '@/components/custom-itinerary'
import HistotyCard from '@/components/custom-itinerary/histoty-card'
import BtnToolbar from '@/components/custom-itinerary/btn-toolbar'
import AdminLayout from '@/components/layout/admin-layout'
import data from '@/data/custom-itinerary/itinerary.json'



export default function Index() {


  return (
    <>
    <CustomItineraryIndex/>

  {data.map((v,i)=>{
        return (
          <div key={i}>
          <HistotyCard 
          name={v.name}
          public={v.public} 
          description={v.description}
          create_at={v.create_at}
          />
          </div>


        )
        
        
        
      

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

