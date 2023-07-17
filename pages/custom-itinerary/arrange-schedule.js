import { useState } from 'react'
import ScheduleSide from '@/components/custom-itinerary/arrange-schedule/arrange-schedule'
import AdminLayout from '@/components/layout/admin-layout'
import SearchView from '@/components/custom-itinerary/arrange-schedule/search-view'
import Map from '@/components/custom-itinerary/arrange-schedule/map'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'

export default function ArrangeSchedule() {
  //搜尋頁面元件
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  })

  const [showSchedule, setShowSchedule] = useState(true)
  const handleAddScenery = () => {
    setShowSchedule(true)
  };

  return (
    <>
      {console.log(showSchedule)}
      {showSchedule ? (
        <div
          onClick={() => {
            setShowSchedule((perviwsshowSearchView)=>{
              return ! showSchedule
            })
          }}
        ><ScheduleSide />
        </div>
      ) : (
        <div
          onClick={() => {
            setShowSchedule((perviwsshowSearchView)=>{
              return ! showSchedule
            })
          }}
        ><SearchView />
        </div>
      )}

      <Map />

     
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
ArrangeSchedule.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
