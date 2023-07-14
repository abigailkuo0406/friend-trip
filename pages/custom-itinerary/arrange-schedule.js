import { useState } from 'react'
import ScheduleSide from '@/components/custom-itinerary/arrange-schedule/arrange-schedule'
import AdminLayout from '@/components/layout/admin-layout'
import SearchView from '@/components/custom-itinerary/arrange-schedule/search-view'
import Map from '@/components/custom-itinerary/arrange-schedule/map'

export default function ArrangeSchedule() {
  //搜尋頁面元件
  const [showSearchView, setShowSearchView] = useState(false)
  const handleAddScenery = () => {
    setShowSearchView(true)
  }

  return (
    <>
    <ScheduleSide onAddScenery={handleAddScenery} />
        <Map showSearchView={showSearchView} />
     {/* <ScheduleSide/> */}
     {/* {showSearchView ? (
        <SearchView />
      ) : (
        <>
          <ScheduleSide onAddScenery={handleAddScenery} />
        </>
      )}
       <Map /> */}
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
ArrangeSchedule.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
