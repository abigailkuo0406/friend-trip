import { useState, useEffect, useRef } from 'react'
import {GoogleMap,useLoadScript,Marker,Autocomplete,DirectionsRenderer,
} from '@react-google-maps/api'
import AdminLayout from '@/components/layout/admin-layout'
import Map from '@/components/custom-itinerary/arrange-schedule/map'
import ScheduleSide from '@/components/custom-itinerary/arrange-schedule/arrange-schedule'
import SearchView from '@/components/custom-itinerary/arrange-schedule/search-view'



export default function ArrangeSchedule() {

  const [showSchedule, setShowSchedule] = useState(true)
  const [showSearchView, setShowSearchView] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const autocompleteRef = useRef(null)
  const [searchLngLat, setSearchLngLat] = useState(null) //查詢地點marker
  const [directions, setDirections] = useState(null)


  const handleAddScenery = () => {
    setShowSchedule(false)
    setShowSearchView(true)
  }
  const handleGoBack = () => {
    setShowSearchView(false)
    setShowSchedule(true)
  }
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  //初始地圖位置
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  })

  //搜尋欄取得地點資訊
  const handlePlaceChanged = () => {
    setDirections()
    const place = autocompleteRef.current.getPlace()
    const viewPosition = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    }
    setSearchLngLat(viewPosition)
    setCenter(viewPosition)

    console.log('地點資訊:', place)

    const selectedView={
      place_id:place.place_id,
      name:place.name,
      formatted_address:place.formatted_address,

    }
    console.log('selectedView=>',selectedView)
  }

 

  return (
    <>
      {console.log('searchLngLat:',searchLngLat)}
      {console.log(showSchedule)}
      {showSchedule ? (
        <ScheduleSide onClick={handleAddScenery} />
      ) : (
        <Autocomplete
          onLoad={(autocomplete) => {
            autocompleteRef.current = autocomplete
          }}
          onPlaceChanged={handlePlaceChanged}
          //景點資訊要的欄位
          options={{
            fields: [
              'name',
              'current_opening_hours',
              'formatted_address',
              'geometry',
              'formatted_phone_number',
              'place_id',
              'rating',
            ],
          }}
        >
          <SearchView 
          onClick={handleGoBack} 
          inputValue={inputValue}
          onInputChange={handleInputChange}
          searchLngLat={searchLngLat}
          setSearchLngLat={setSearchLngLat}
          autocompleteRef={autocompleteRef}
          />
        </Autocomplete>
      )}
      <Map searchLngLat={searchLngLat}/>
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
ArrangeSchedule.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
